# Portfolio — Octave Romer

Portfolio personnel (BUT Science des Données) avec un **agent IA Claude** intégré.

## Structure du dossier

```
portfolio/
├── index.html            Structure de la page (Accueil · À propos · Alternance · Projets · Bilan · Contact)
├── server.js             Sert le site ET appelle l'API Claude (clé secrète côté serveur)
├── package.json          Dépendances Node
├── .env.example          Modèle de configuration de la clé API
├── README.md
└── assets/
    ├── css/styles.css    Design clair à dégradés orange, animé
    ├── js/app.js         Animations, navigation, projets, modal, chat IA
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

## 1. Voir le site sans l'IA

Ouvre simplement `index.html` dans ton navigateur. Tout fonctionne **sauf** le chatbot
(qui a besoin du serveur pour parler à Claude).

## 2. Activer l'agent IA

### Prérequis
- [Node.js](https://nodejs.org/) version 18 ou plus.
- Une clé API Anthropic : https://console.anthropic.com/ (rubrique *API Keys*).

### Étapes (dans le dossier du projet, en PowerShell)

```powershell
# a) Installer les dépendances (une seule fois)
npm install

# b) Créer le fichier de configuration et y coller ta clé
Copy-Item .env.example .env
notepad .env        # remplace la valeur de ANTHROPIC_API_KEY puis enregistre

# c) Lancer le serveur
npm start
```

Ouvre ensuite **http://localhost:3000** : le bouton ✦ en bas à droite ouvre l'assistant.

### Astuce coût
Par défaut le modèle est `claude-opus-4-8` (le plus intelligent). Pour réduire les coûts,
décommente `CLAUDE_MODEL=claude-haiku-4-5` dans le fichier `.env`.

## 3. Mettre à jour le contenu

- **Ajouter des projets (2e / 3e année)** :
  1. Dépose les images dans `assets/img/projects/but-sd2/` (ou `but-sd3/`).
  2. Dépose les fichiers téléchargeables dans `assets/files/projects/but-sd2/`.
  3. Branche-les dans le tableau `PROJECTS` en haut de `assets/js/app.js`, puis remplace le bloc `.coming` de l'onglet concerné dans `index.html`.
- **Projets BUT SD 1** : tableau `PROJECTS` (`assets/js/app.js`). Les chemins sont relatifs à `assets/img/projects/but-sd1/` (images) et `assets/files/projects/but-sd1/` (fichiers).
- **Bilan BUT SD 2 / 3** : remplace les blocs `.coming` dans la section Bilan d'`index.html`.
- **Connaissances de l'IA** : variable `SYSTEM_PROMPT` dans `server.js`.

> Ne partage jamais ton fichier `.env` ni ta clé API publiquement.
