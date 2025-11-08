# Diagramme UML des Cas d'Utilisation - PeePeeFinder

## 📋 Description

Ce diagramme UML représente les **cas d'utilisation** de l'application web PeePeeFinder, illustrant les interactions entre les différents acteurs (utilisateurs) et les fonctionnalités du système.

## 🎯 Fichier

**peepefinder-use-case-diagram.drawio** - Diagramme de cas d'utilisation au format Draw.io

### Comment visualiser/éditer

**En ligne (RECOMMANDÉ):**
1. Ouvrir https://app.diagrams.net/
2. File > Open from > Device
3. Sélectionner `peepefinder-use-case-diagram.drawio`
4. Visualiser et éditer

**VSCode:**
1. Installer l'extension "Draw.io Integration"
2. Ouvrir directement le fichier .drawio

**GitHub:**
Cliquer sur le fichier directement dans GitHub (rendu automatique)

## 👥 Acteurs (3 types d'utilisateurs)

### 1. **Visiteur** (non connecté)
Utilisateur anonyme qui peut consulter l'application sans créer de compte.

**Fonctionnalités accessibles:**
- ✅ Rechercher des toilettes
- ✅ Consulter la carte interactive
- ✅ Voir les détails d'une toilette
- ✅ Consulter les avis existants
- ✅ Filtrer par critères (PMR, gratuit, 24/7)
- ✅ S'inscrire
- ✅ Se connecter

### 2. **Utilisateur connecté**
Utilisateur ayant créé un compte et s'étant authentifié.

**Hérite de:** Toutes les fonctionnalités du Visiteur

**Fonctionnalités supplémentaires:**
- ⭐ Ajouter un avis
- ⭐ Noter une toilette (1-5 étoiles)
- ⭐ Gérer ses favoris (ajouter/retirer)
- ⭐ Signaler un problème
- ⭐ Modifier son profil
- ⭐ Activer le mode sombre
- ⭐ Modifier/Supprimer son avis
- ⭐ Voir ses statistiques personnelles

### 3. **Administrateur**
Utilisateur avec des privilèges d'administration pour gérer le système.

**Hérite de:** Toutes les fonctionnalités de l'Utilisateur connecté + Visiteur

**Fonctionnalités d'administration:**
- 🔧 Importer des données CSV (OpenData)
- 🔧 Modérer les avis
- 🔧 Traiter les signalements
- 🔧 Gérer les utilisateurs
- 🔧 Consulter statistiques globales
- 🔧 Modifier/Supprimer des toilettes
- 🔧 Consulter les logs d'import
- 🔧 Maintenance de la base de données

## 📊 Cas d'utilisation (23 fonctionnalités)

### Niveau Visiteur (7 cas)
1. Rechercher des toilettes
2. Consulter la carte
3. Voir détails d'une toilette
4. Consulter les avis
5. S'inscrire
6. Se connecter
7. Filtrer par critères (PMR, gratuit, 24/7)

### Niveau Utilisateur connecté (+8 cas)
8. Ajouter un avis
9. Noter une toilette
10. Gérer ses favoris
11. Signaler un problème
12. Modifier son profil
13. Activer mode sombre
14. Modifier/Supprimer son avis
15. Voir ses statistiques

### Niveau Administrateur (+8 cas)
16. Importer données CSV
17. Modérer les avis
18. Traiter les signalements
19. Gérer les utilisateurs
20. Consulter statistiques globales
21. Modifier/Supprimer toilettes
22. Consulter logs d'import
23. Maintenance base de données

## 🔗 Relations entre cas d'utilisation

### Relations d'héritage (Généralisation)
```
Visiteur
   ↑
   |
Utilisateur connecté
   ↑
   |
Administrateur
```

Chaque niveau hérite de toutes les fonctionnalités du niveau inférieur.

### Relations <<include>>
- **"Ajouter un avis"** inclut **"Noter une toilette"**
  - Pour ajouter un avis, il faut obligatoirement donner une note

- **"Rechercher des toilettes"** inclut **"Filtrer par critères"**
  - La recherche utilise le système de filtrage

## 🎨 Code couleur

- 🔵 **Bleu** : Fonctionnalités Visiteur (accès public)
- 🟢 **Vert** : Fonctionnalités Utilisateur connecté (authentification requise)
- 🟡 **Jaune** : Fonctionnalités Administrateur (privilèges admin requis)

## 💡 Fonctionnalités clés

### 🔍 Recherche et filtrage
- Recherche par localisation géographique
- Filtres multicritères:
  - ♿ Accessibilité PMR
  - 💰 Toilettes gratuites
  - 🕐 Ouvertes 24h/7j
  - 🏙️ Par commune

### ⭐ Système d'avis
- Notation de 1 à 5 étoiles
- Commentaires texte
- Critère de propreté
- Modération par les administrateurs
- Un utilisateur = un avis par toilette

### 💾 Favoris personnalisés
- Sauvegarde de toilettes favorites
- Accès rapide à ses favoris
- Gestion (ajout/suppression)

### 🚨 Signalements
- Signaler des problèmes:
  - Toilette fermée
  - Toilette sale
  - Équipement cassé
  - Informations incorrectes
  - Autre
- Traitement par les administrateurs

### 📊 Données OpenData
- Import de fichiers CSV
- Mise à jour automatique
- Logs d'import détaillés
- Statistiques d'import (réussite/échec)

## 🔒 Niveaux d'accès

| Fonctionnalité | Visiteur | Utilisateur | Admin |
|----------------|----------|-------------|-------|
| Rechercher | ✅ | ✅ | ✅ |
| Consulter détails | ✅ | ✅ | ✅ |
| Voir avis | ✅ | ✅ | ✅ |
| Ajouter avis | ❌ | ✅ | ✅ |
| Gérer favoris | ❌ | ✅ | ✅ |
| Signaler problème | ❌ | ✅ | ✅ |
| Importer CSV | ❌ | ❌ | ✅ |
| Modérer avis | ❌ | ❌ | ✅ |
| Gérer utilisateurs | ❌ | ❌ | ✅ |

## 🚀 Export et utilisation

### Exporter le diagramme

**Depuis Draw.io (app.diagrams.net):**
1. File > Export as > PNG/SVG/PDF
2. Choisir les options de qualité
3. Télécharger

**Formats recommandés:**
- **PNG** : Pour présentations (300 DPI, Zoom 200-400%)
- **SVG** : Pour documentation web (vectoriel, scalable)
- **PDF** : Pour rapports (haute qualité d'impression)

### Intégration dans documentation

```markdown
![Cas d'utilisation](peepefinder-use-case-diagram.png)
```

## 📝 Conformité TD3 DRAC

Ce diagramme respecte les consignes du TD3 DRAC:

✅ **Acteurs clairement identifiés** (3 types)
✅ **Fonctionnalités attendues** de l'application web
✅ **Limites du système** (rectangle englobant)
✅ **Relations entre acteurs** (héritage/généralisation)
✅ **Relations entre cas** (include/extend)
✅ **Format UML standard** (notation correcte)

## 🔧 Maintenance

### Mise à jour du diagramme

Lors de l'ajout de nouvelles fonctionnalités:

1. Ouvrir le fichier .drawio dans Draw.io
2. Ajouter le nouveau cas d'utilisation (ellipse)
3. Le relier aux acteurs concernés
4. Ajouter les relations include/extend si nécessaire
5. Mettre à jour la légende et les compteurs
6. Exporter en PNG/SVG
7. Mettre à jour cette documentation

## 📚 Ressources

- [UML Use Case Diagrams](https://www.uml-diagrams.org/use-case-diagrams.html)
- [Draw.io Documentation](https://www.diagrams.net/doc/)
- [Cours UML - Cas d'utilisation](https://laurent-audibert.developpez.com/Cours-UML/)

---

**Version:** 2.1
**Date:** 2025-11-08
**Auteur:** PeePeeFinder Team
**Conforme à:** TD3 DRAC - Diagramme de cas d'utilisation
