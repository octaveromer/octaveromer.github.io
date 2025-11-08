# Diagramme UML - Base de données PeePeeFinder

## Vue d'ensemble

Cette base de données gère une application de localisation de toilettes publiques avec système d'avis, de favoris et de signalements.

## Diagramme de classes UML

```mermaid
classDiagram
    %% ========================================
    %% NIVEAU 1 - Tables indépendantes
    %% ========================================

    class users {
        +INT id PK
        +VARCHAR(50) username UNIQUE
        +VARCHAR(100) email UNIQUE
        +VARCHAR(255) password_hash
        +ENUM role
        +BOOLEAN dark_mode
        +DATETIME created_at
        +DATETIME last_login
        +BOOLEAN is_active
        +BOOLEAN email_verified
    }

    class toilettes {
        +INT id PK
        +VARCHAR(255) Source
        +VARCHAR(50) Accessible_au_public
        +VARCHAR(50) Tarif
        +VARCHAR(50) Accessibilite_PMR
        +TEXT Indications_localisation
        +VARCHAR(100) Type
        +TEXT Horaires_ouverture
        +VARCHAR(50) Relais_bebe
        +VARCHAR(100) coord_geo
        +VARCHAR(100) osm_id
        +VARCHAR(100) nom_de_la_commune
        +VARCHAR(255) nom
        +VARCHAR(100) type_normalise
        +VARCHAR(255) adresse
        +VARCHAR(100) commune
        +VARCHAR(10) code_postal
        +BOOLEAN payant
        +BOOLEAN acces_pmr
        +BOOLEAN ouvert_24_7
        +DECIMAL(9,6) latitude
        +DECIMAL(9,6) longitude
        +VARCHAR(100) source_id UNIQUE
        +DATE date_maj
        +DECIMAL(3,2) note_moyenne
        +INT nombre_avis
        +TEXT horaires
        +TEXT description
        +VARCHAR(20) telephone
        +DATETIME created_at
        +DATETIME updated_at
    }

    class login_attempts {
        +INT id PK
        +VARCHAR(45) ip_address
        +VARCHAR(100) username
        +DATETIME attempt_time
        +BOOLEAN success
        +TEXT user_agent
    }

    %% ========================================
    %% NIVEAU 2 - Tables dépendantes simples
    %% ========================================

    class remember_tokens {
        +INT id PK
        +INT user_id FK
        +VARCHAR(64) token UNIQUE
        +DATETIME expiry
        +DATETIME created_at
        +DATETIME last_used
        +VARCHAR(45) ip_address
        +TEXT user_agent
    }

    class imports_logs {
        +INT id PK
        +INT user_id FK
        +VARCHAR(255) filename
        +TEXT source_url
        +INT rows_total
        +INT rows_imported
        +INT rows_updated
        +INT rows_failed
        +DATETIME import_date
        +INT duration_seconds
        +ENUM status
        +TEXT error_log
    }

    %% ========================================
    %% NIVEAU 3 - Tables de liaison
    %% ========================================

    class avis {
        +INT id PK
        +INT user_id FK
        +INT toilette_id FK
        +INT note
        +INT proprete
        +TEXT commentaire
        +DATETIME created_at
        +DATETIME updated_at
        +BOOLEAN is_moderated
        +BOOLEAN is_visible
    }

    class favorites {
        +INT id PK
        +INT user_id FK
        +INT toilette_id FK
        +DATETIME created_at
    }

    class reports {
        +INT id PK
        +INT toilette_id FK
        +INT user_id FK
        +ENUM type
        +TEXT description
        +ENUM status
        +DATETIME created_at
        +DATETIME resolved_at
        +INT resolved_by FK
        +TEXT admin_notes
    }

    %% ========================================
    %% RELATIONS
    %% ========================================

    %% Relations users
    users "1" --> "0..*" remember_tokens : possède
    users "1" --> "0..*" imports_logs : effectue
    users "1" --> "0..*" avis : écrit
    users "1" --> "0..*" favorites : sauvegarde
    users "1" --> "0..*" reports : signale
    users "1" --> "0..*" reports : résout (admin)

    %% Relations toilettes
    toilettes "1" --> "0..*" avis : reçoit
    toilettes "1" --> "0..*" favorites : est favori de
    toilettes "1" --> "0..*" reports : fait l'objet de

    %% Notes de style
    note for users "Table principale\nGestion authentification\nRôles: user, admin"
    note for toilettes "Données OpenData\nGéolocalisation\nNotations automatiques"
    note for avis "Trigger auto:\nMise à jour note_moyenne\net nombre_avis"
```

## Architecture en 3 niveaux

### Niveau 1 - Tables indépendantes (0 clé étrangère)
- **users**: Gestion des utilisateurs et authentification
- **toilettes**: Base de données des toilettes publiques (données OpenData)
- **login_attempts**: Logs de sécurité (anti-brute-force)

### Niveau 2 - Tables dépendantes simples (1 clé étrangère)
- **remember_tokens**: Tokens de session persistante (→ users)
- **imports_logs**: Historique des imports CSV (→ users)

### Niveau 3 - Tables de liaison (2+ clés étrangères)
- **avis**: Système de notation et commentaires (→ users + toilettes)
- **favorites**: Liste des favoris par utilisateur (→ users + toilettes)
- **reports**: Signalement de problèmes (→ users + toilettes + users.resolved_by)

## Triggers automatiques

La base de données inclut 3 triggers pour maintenir automatiquement les statistiques:

1. **update_note_moyenne_after_insert**: Recalcule la note moyenne après ajout d'un avis
2. **update_note_moyenne_after_update**: Recalcule la note moyenne après modification d'un avis
3. **update_note_moyenne_after_delete**: Recalcule la note moyenne après suppression d'un avis

## Vues statistiques

4 vues sont disponibles pour faciliter les requêtes:

- **stats_globales**: Statistiques générales du système
- **toilettes_top_rated**: Top 20 des toilettes les mieux notées
- **stats_par_commune**: Statistiques agrégées par commune
- **user_activity**: Activité des utilisateurs (avis, favoris, signalements)

## Procédures stockées

2 procédures de maintenance:

- **clean_old_login_attempts()**: Nettoie les logs de connexion > 30 jours
- **clean_expired_tokens()**: Supprime les tokens expirés

## Relations détaillées

| Table source | Table cible | Cardinalité | Type | Action CASCADE |
|--------------|-------------|-------------|------|----------------|
| users | remember_tokens | 1:N | possède | ON DELETE CASCADE |
| users | imports_logs | 1:N | effectue | - |
| users | avis | 1:N | écrit | ON DELETE CASCADE |
| users | favorites | 1:N | sauvegarde | ON DELETE CASCADE |
| users | reports (user_id) | 1:N | signale | ON DELETE SET NULL |
| users | reports (resolved_by) | 1:N | résout | ON DELETE SET NULL |
| toilettes | avis | 1:N | reçoit | ON DELETE CASCADE |
| toilettes | favorites | 1:N | est favori de | ON DELETE CASCADE |
| toilettes | reports | 1:N | fait l'objet de | ON DELETE CASCADE |

## Contraintes d'unicité

- **users**: username, email
- **toilettes**: source_id
- **remember_tokens**: token
- **avis**: (user_id, toilette_id) - Un utilisateur ne peut noter qu'une fois une toilette
- **favorites**: (user_id, toilette_id) - Un utilisateur ne peut favoriser qu'une fois une toilette

## Index pour performance

Tous les champs fréquemment recherchés sont indexés:
- Recherche géographique: (latitude, longitude)
- Recherche multicritères: (commune, acces_pmr, payant, ouvert_24_7)
- Tri par note: note_moyenne
- Sécurité: (ip_address, attempt_time)

---

**Version**: 2.1
**Date**: 2025-11-08
**Moteur**: InnoDB
**Charset**: utf8mb4_unicode_ci
