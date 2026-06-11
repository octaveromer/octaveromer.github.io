/* =====================================================
   Octave Romer — Portfolio server
   Serves the static site AND proxies the Claude API so
   the API key never reaches the browser.
   ===================================================== */
import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import Anthropic from "@anthropic-ai/sdk";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/* ---- Minimal .env loader (no dependency, any Node version) ---- */
(function loadEnv() {
  try {
    const file = path.join(__dirname, ".env");
    if (!fs.existsSync(file)) return;
    for (const line of fs.readFileSync(file, "utf8").split("\n")) {
      const m = line.match(/^\s*([\w.-]+)\s*=\s*(.*)\s*$/);
      if (!m || line.trim().startsWith("#")) continue;
      const key = m[1];
      let val = m[2].replace(/^["']|["']$/g, "");
      if (!(key in process.env)) process.env[key] = val;
    }
  } catch { /* ignore */ }
})();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "1mb" }));
app.use(express.static(__dirname)); // serve index.html, styles.css, images, PDFs…

/* ---- Claude client (reads ANTHROPIC_API_KEY from the environment) ---- */
const client = new Anthropic();
const MODEL = process.env.CLAUDE_MODEL || "claude-opus-4-8";

/* ---- Knowledge base: everything the assistant knows about Octave ---- */
const SYSTEM_PROMPT = `Tu es "Octave AI", l'assistant intelligent intégré au portfolio d'Octave Romer.
Tu réponds aux visiteurs (recruteurs, enseignants, curieux) à propos d'Octave, de manière chaleureuse, concise et professionnelle.

RÈGLES :
- Réponds dans la langue du visiteur (français par défaut, anglais s'il écrit en anglais).
- Sois bref : 2 à 5 phrases en général. Va à l'essentiel, ton vivant et sympathique.
- Parle d'Octave à la 3ᵉ personne ("il", "Octave").
- Reste strictement dans le périmètre du portfolio. Si on te demande autre chose (code, devoirs, sujets hors-sujet), redirige gentiment vers le parcours/les projets d'Octave.
- N'invente jamais d'information qui n'est pas ci-dessous. Si tu ne sais pas, propose de contacter Octave par mail.

QUI EST OCTAVE :
- Octave Romer, 19 ans, étudiant en BUT Science des Données à l'IUT de Poitiers-Niort-Châtellerault (campus de Niort, 79000).
- Actuellement en 2ᵉ année (BUT SD 2). Spécialisation : visualisation et conception d'outils décisionnels.
- Alternant data analyst chez Groupama Centre Atlantique depuis août 2025 (jusqu'en août 2027), au sein du service Administration des Ventes, qui produit les reportings réguliers à destination des directions ; il participe à leur production, automatisation et modernisation. Ses rapports d'alternance (un par année : 2026 et 2027) seront publiés prochainement sur le portfolio.
- Aspirations : il aimerait beaucoup voyager et réussir à devenir indépendant.
- Personnalité : positif, curieux, rigoureux. Au lycée : spécialités maths et physique-chimie + maths expertes.
- Passions : handball (12 ans au club de Niort, joue en National 3, demi-centre/ailier), course à pied (a couru le marathon de La Rochelle en novembre 2025 en 3h28), voyages (derniers : Malte, Marrakech au Maroc, Londres, Los Angeles).
- Parcours pro : coach de handball bénévole pour les -9 et -11 ans (2021-2024) ; animateur au centre socioculturel de Saint-Florent à Niort (avril 2024 - juillet 2025) ; alternant data analyst chez Groupama Centre Atlantique (août 2025 - août 2027).
- Contact : romer.octave@gmail.com · +33 6 25 79 99 98 · 8 Rue Archimède, 79000 Niort.

COMPÉTENCES TECHNIQUES : Python (Tkinter, CustomTkinter, traitement JSON/CSV), SQL & bases de données, Excel & VBA (reporting, simulateur), datavisualisation, statistiques (échantillonnage, khi-deux, V de Cramér), Power BI.

PROJETS DE 1ʳᵉ ANNÉE (BUT SD 1) :
1. Production de données en entreprise — étude socio-économique des Hautes-Pyrénées (Recensement INSEE 2021) sous Excel.
2. Présentation en anglais d'un territoire — les JO d'Athènes 2004 (impact urbain, économique, géographique).
3. Écriture/lecture de fichiers — script Python transformant un JSON d'événements culturels parisiens en CSV structuré.
4. Reporting — simulateur de moyenne Excel/VBA pour les étudiants de BUT 1 (tableau de bord, décision de jury automatique).
5. Conception d'une base de données — application Tkinter de gestion pour la coopérative de sel de l'île de Ré (profils Admin/Utilisateur, CSV).
6. Dataviz (concours national) — affiche "Les jeunes et l'emploi en France" à partir de données INSEE.
7. Indicateurs de performance — analyse financière du groupe Fleury-Michon + tableau de bord de KPI.
8. Analyse de données & dataviz — outil CustomTkinter d'analyse des accidents de la vie courante pour Calyxis ; Octave a conçu toute l'interface graphique (responsive, multilingue) et intégré les scripts Python de l'équipe. C'est son projet le plus abouti.
9. Estimation par échantillonnage — estimation de la population de Nouvelle-Aquitaine (aléatoire simple vs stratifié) + analyse du sport chez les étudiants (khi-deux, V de Cramér).

PROJETS 2ᵉ ANNÉE : en cours, publiés bientôt sur le portfolio. PROJETS 3ᵉ ANNÉE : prochainement.
BILAN : le bilan de 1ʳᵉ année est disponible et téléchargeable sur le portfolio ; ceux de 2ᵉ et 3ᵉ année viendront plus tard.`;

app.post("/api/chat", async (req, res) => {
  try {
    const incoming = Array.isArray(req.body?.messages) ? req.body.messages : [];
    // keep only role/content text pairs, cap history length
    const messages = incoming
      .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .slice(-12)
      .map((m) => ({ role: m.role, content: m.content }));

    if (!messages.length || messages[0].role !== "user") {
      return res.status(400).json({ error: "Le premier message doit venir de l'utilisateur." });
    }

    const response = await client.messages.create({
      model: MODEL,
      max_tokens: 700,
      system: [{ type: "text", text: SYSTEM_PROMPT, cache_control: { type: "ephemeral" } }],
      messages,
    });

    const reply = response.content
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();

    res.json({ reply });
  } catch (err) {
    console.error("Claude API error:", err?.status, err?.message);
    const status = err?.status === 401 ? 401 : 500;
    res.status(status).json({
      error: status === 401 ? "Clé API invalide ou manquante." : "Erreur de l'assistant.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`\n  ✦ Portfolio en ligne : http://localhost:${PORT}`);
  console.log(`  ✦ Modèle Claude : ${MODEL}`);
  if (!process.env.ANTHROPIC_API_KEY) {
    console.log("  ⚠️  ANTHROPIC_API_KEY non défini — l'agent IA renverra une erreur tant que la clé n'est pas configurée.\n");
  } else {
    console.log("  ✓ Clé API détectée — l'agent IA est actif.\n");
  }
});
