# Portfolio — Octave Romer

Portfolio personnel (BUT Science des Données) avec un **agent IA gratuit** intégré.
Site **100 % statique** : aucune installation, aucune clé API, aucun serveur.

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

## L'agent IA (gratuit, sans clé)

Le chatbot ✦ utilise **[Puter.js](https://docs.puter.com/)** : une IA qui tourne directement dans
le navigateur, **gratuitement et sans aucune clé API**. Rien à configurer.
> Au premier message, le visiteur peut être invité à créer un compte Puter gratuit (c'est le modèle
> « l'utilisateur paie » qui rend le service gratuit pour toi).

Les connaissances de l'IA (ton parcours, tes projets) sont dans la variable `SYSTEM_PROMPT`
en haut de la section AI AGENT de `assets/js/app.js`.

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
