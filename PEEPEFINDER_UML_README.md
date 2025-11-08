# Documentation UML - Base de données PeePeeFinder

## 📋 Fichiers disponibles

Ce dossier contient la documentation UML de la base de données PeePeeFinder en plusieurs formats:

### 1. **peepefinder-database-uml.drawio** ⭐ RECOMMANDÉ
Diagramme Draw.io éditable avec interface visuelle professionnelle.

**Utilisation:**
- Éditable avec Draw.io (app.diagrams.net)
- Export PNG/SVG/PDF haute qualité
- Interface drag & drop intuitive
- Compatible VSCode, GitHub, Desktop

**Comment visualiser/éditer:**
```bash
# Méthode 1: En ligne (RECOMMANDÉ)
# Ouvrir https://app.diagrams.net/
# File > Open from > Device > Sélectionner peepefinder-database-uml.drawio

# Méthode 2: VSCode
# Installer l'extension "Draw.io Integration"
# Puis ouvrir directement le fichier .drawio

# Méthode 3: Application Desktop
# Télécharger depuis https://www.diagrams.net/
```

### 2. **peepefinder-database-uml.md**
Diagramme Mermaid intégré dans un fichier Markdown avec documentation complète.

**Utilisation:**
- Visualisable directement sur GitHub
- Compatible avec VSCode (extension Markdown Preview Mermaid)
- Format texte léger

**Comment visualiser:**
```bash
# Sur GitHub: Ouvrir directement le fichier
# Sur VSCode: Installer l'extension "Markdown Preview Mermaid Support"
# En ligne: https://mermaid.live/ (copier/coller le code Mermaid)
```

### 3. **peepefinder-database-uml.puml**
Diagramme PlantUML (format source) pour génération d'images haute qualité.

**Utilisation:**
- Génération de PNG/SVG professionnels
- Intégration dans documentation
- Personnalisation avancée

**Comment visualiser:**
```bash
# Méthode 1: En ligne
# https://www.plantuml.com/plantuml/uml/

# Méthode 2: Installation locale
sudo apt install plantuml graphviz
plantuml peepefinder-database-uml.puml

# Méthode 3: VSCode
# Installer l'extension "PlantUML"
```

## 🎨 Prévisualisation rapide

### En ligne (sans installation)

**Pour Draw.io (RECOMMANDÉ):**
1. Ouvrir https://app.diagrams.net/
2. File > Open from > Device
3. Sélectionner le fichier peepefinder-database-uml.drawio
4. Éditer et exporter selon vos besoins

**Pour Mermaid:**
1. Ouvrir https://mermaid.live/
2. Copier le code du bloc ```mermaid``` depuis le fichier .md
3. Coller dans l'éditeur

**Pour PlantUML:**
1. Ouvrir https://www.plantuml.com/plantuml/uml/
2. Copier tout le contenu du fichier .puml
3. Coller dans l'éditeur

## 📊 Structure de la base de données

### Architecture en 3 niveaux

```
NIVEAU 1 (Indépendantes)          NIVEAU 2 (Simples)         NIVEAU 3 (Liaison)
┌─────────────────┐              ┌──────────────────┐       ┌────────────────┐
│     users       │──────────────→│ remember_tokens  │       │     avis       │
│                 │              └──────────────────┘       │ (users+toilet) │
│                 │              ┌──────────────────┐       └────────────────┘
│                 │──────────────→│  imports_logs    │       ┌────────────────┐
└─────────────────┘              └──────────────────┘       │   favorites    │
                                                             │ (users+toilet) │
┌─────────────────┐                                         └────────────────┘
│   toilettes     │                                         ┌────────────────┐
└─────────────────┘─────────────────────────────────────────→│    reports     │
                                                             │ (users+toilet) │
┌─────────────────┐                                         └────────────────┘
│ login_attempts  │
└─────────────────┘
```

### Tables principales

| Table | Rôle | Dépendances |
|-------|------|-------------|
| **users** | Utilisateurs et authentification | - |
| **toilettes** | Base de données des toilettes | - |
| **login_attempts** | Logs de sécurité | - |
| **remember_tokens** | Sessions persistantes | users |
| **imports_logs** | Historique imports CSV | users |
| **avis** | Notations et commentaires | users + toilettes |
| **favorites** | Liste des favoris | users + toilettes |
| **reports** | Signalements | users + toilettes |

## 🔧 Fonctionnalités avancées

### Triggers automatiques
La base de données maintient automatiquement les statistiques:

```sql
-- Recalcul automatique de la note moyenne
AFTER INSERT ON avis  → MAJ toilettes.note_moyenne
AFTER UPDATE ON avis  → MAJ toilettes.note_moyenne
AFTER DELETE ON avis  → MAJ toilettes.note_moyenne
```

### Vues statistiques
4 vues prêtes à l'emploi:

1. **stats_globales** - Vue d'ensemble du système
2. **toilettes_top_rated** - Top 20 des toilettes
3. **stats_par_commune** - Statistiques par ville
4. **user_activity** - Activité des utilisateurs

### Procédures de maintenance

```sql
CALL clean_old_login_attempts();  -- Nettoie logs > 30 jours
CALL clean_expired_tokens();      -- Supprime tokens expirés
```

## 🔒 Sécurité

### Contraintes d'intégrité
- **CASCADE**: Suppression en cascade (avis, favorites)
- **SET NULL**: Préservation de l'historique (reports)
- **UNIQUE**: username, email, tokens

### Index optimisés
- Recherche géographique: (latitude, longitude)
- Recherche multicritères: (commune, acces_pmr, payant, ouvert_24_7)
- Anti-brute-force: (ip_address, attempt_time)

## 📈 Cardinalités principales

```
users     1 ──── N  avis
users     1 ──── N  favorites
users     1 ──── N  reports (créateur)
users     1 ──── N  reports (résolveur admin)

toilettes 1 ──── N  avis
toilettes 1 ──── N  favorites
toilettes 1 ──── N  reports
```

## 🚀 Utilisation dans un projet

### Export d'images depuis Draw.io

**Depuis l'interface web (app.diagrams.net):**
1. Ouvrir le fichier .drawio
2. File > Export as > PNG/SVG/PDF/JPEG
3. Choisir la qualité et les options
4. Télécharger l'image

**Export PNG haute qualité:**
- Résolution: 300 DPI
- Zoom: 200-400%
- Background: Transparent ou blanc

**Export SVG (recommandé pour web):**
- Format vectoriel
- Scalable sans perte de qualité
- Petite taille de fichier

### Génération d'images avec PlantUML

**PNG haute résolution:**
```bash
plantuml -tpng peepefinder-database-uml.puml
```

**SVG vectoriel (recommandé pour web):**
```bash
plantuml -tsvg peepefinder-database-uml.puml
```

**Avec options de qualité:**
```bash
plantuml -DPLANTUML_LIMIT_SIZE=16384 -tpng peepefinder-database-uml.puml
```

### Intégration dans documentation

**Markdown:**
```markdown
![UML Database](peepefinder-database-uml.png)
```

**HTML:**
```html
<img src="peepefinder-database-uml.svg" alt="Database UML" />
```

**Intégration Draw.io dans GitHub:**
GitHub peut afficher les fichiers .drawio directement! Il suffit de cliquer dessus.

## 📝 Mise à jour des diagrammes

Lors de modifications de la structure:

1. **Modifier le SQL source** en premier
2. **Mettre à jour le fichier .drawio** (Draw.io) - PRINCIPAL
3. **Mettre à jour le fichier .md** (Mermaid) - optionnel
4. **Mettre à jour le fichier .puml** (PlantUML) - optionnel
5. **Exporter les images** si nécessaire
6. **Incrémenter la version** dans les commentaires

**Recommandation:** Utilisez Draw.io comme source principale, c'est le plus facile à éditer!

## 🔗 Ressources

- [Draw.io (Diagrams.net)](https://www.diagrams.net/) - **PRINCIPAL**
- [Draw.io Desktop](https://github.com/jgraph/drawio-desktop/releases)
- [Documentation Draw.io](https://www.diagrams.net/doc/)
- [Documentation Mermaid](https://mermaid.js.org/)
- [Documentation PlantUML](https://plantuml.com/)
- [PlantUML Online Editor](https://www.plantuml.com/plantuml/)
- [Mermaid Live Editor](https://mermaid.live/)

---

**Version:** 2.1
**Date:** 2025-11-08
**Auteur:** PeePeeFinder Team
**Charset:** UTF-8 (utf8mb4_unicode_ci)
