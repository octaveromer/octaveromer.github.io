# Portfolio — Octave Romer

Portfolio personnel (BUT Science des Données) avec un **agent IA** intégré.
Site **100 % statique** (aucun serveur, aucune installation). L'agent IA utilise **Gemini Flash**
(API gratuite de Google) — il suffit d'y coller une clé gratuite une seule fois (voir plus bas).

🔗 **En ligne :** https://octaveromer.github.io

## Structure du dossier

```
portfolio/
├── index.html            La page (Accueil · À propos · Alternance · Projets · Bilan · Contact)
├── README.md
└── assets/
    ├── css/styles.css    Design clair à dégradés orange, animé
    ├── js/app.js         Animations, navigation, projets, modal, agent IA
    ├── img/
    │   ├── me/           Photos (moi.png, moi-detour.png détourée)
    │   ├── about/        Images centres d'intérêt
    │   ├── logos/        Logo Groupama
    │   └── projects/
    │       ├── but-sd1/  Images des projets de 1re année
    │       ├── but-sd2/  ← déposer ici les images des projets de 2e année
    │       └── but-sd3/  ← déposer ici les images des projets de 3e année
    └── files/
        ├── docs/         CV + Bilan (téléchargeables)
        └── projects/
            ├── but-sd1/  Fichiers téléchargeables des projets de 1re année
            ├── but-sd2/  ← déposer ici les fichiers des projets de 2e année
            └── but-sd3/  ← déposer ici les fichiers des projets de 3e année
```

## Lancer le site

Ouvre simplement `index.html` dans ton navigateur. Tout fonctionne, **y compris le chatbot IA**.

## L'agent IA (Gemini Flash — gratuit)

Le chatbot ✦ utilise **Gemini Flash** de Google, dont l'API a un **quota gratuit** largement
suffisant. Il faut une **clé gratuite** (créée en 1 min), à coller une seule fois.

### Activer le chatbot (à faire une fois)

1. Va sur **https://aistudio.google.com/apikey** → connecte-toi avec un compte Google → **« Create API key »**.
2. **Restreins la clé à ton site** (important, car la clé sera visible dans le code) :
   - Ouvre la clé dans **Google Cloud Console → Identifiants → ta clé API**.
   - *Restrictions d'application* → **Sites web (HTTP referrers)** → ajoute :
     `octaveromer.github.io/*` et `https://octaveromer.github.io/*` (et `localhost:*` si tu testes en local).
   - *Restrictions d'API* → limite à **Generative Language API**.
   - Ainsi, même visible, la clé ne fonctionne que depuis **ton** site.
3. Colle la clé entre les guillemets dans **`assets/js/config.js`** :
   ```js
   window.GEMINI_API_KEY = "TA_CLE_ICI";
   ```
4. `git add -A && git commit -m "Active l'agent IA" && git push`.

> Sans clé, le chatbot affiche un message « pas encore activé ». Avec la clé, il répond tout seul.

Les connaissances de l'IA (ton parcours, tes projets) sont dans la variable `SYSTEM_PROMPT`
en haut de la section AI AGENT de `assets/js/app.js`. Le modèle se change via `GEMINI_MODELS` (même fichier).

## Mettre à jour le contenu

- **Ajouter des projets (2e / 3e année)** :
  1. Dépose les images dans `assets/img/projects/but-sd2/` (ou `but-sd3/`).
  2. Dépose les fichiers téléchargeables dans `assets/files/projects/but-sd2/`.
  3. Branche-les dans le tableau `PROJECTS` en haut de `assets/js/app.js`, puis remplace le bloc `.coming` de l'onglet concerné dans `index.html`.
- **Bilan BUT SD 2 / 3** : remplace les blocs `.coming` dans la section Bilan d'`index.html`.

## Mettre à jour le site en ligne

Depuis ce dossier :

```powershell
git add -A
git commit -m "Ma modification"
git push
```

Le site se met à jour automatiquement (~1-2 min) sur https://octaveromer.github.io.
