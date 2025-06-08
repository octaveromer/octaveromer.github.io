import json
import csv
from datetime import datetime

# Charger le fichier JSON
input_json_file = "que-faire-a-paris-.json"
output_csv_file = "que-faire-a-paris-.csv"

# Fonction pour nettoyer les retours à la ligne dans les champs texte
def nettoyer_texte(texte):
    if isinstance(texte, str):
        return texte.replace("\n", " ").replace("\r", " ").strip()
    return texte

# Convertir une date ISO en format français (dd/mm/yyyy) + extraire l'heure
def convertir_date_et_heure(iso_date):
    if iso_date:
        date_obj = datetime.fromisoformat(iso_date.replace("Z", "+00:00"))
        return date_obj.strftime("%d/%m/%Y"), date_obj.strftime("%H:%M")
    return "", ""

# Charger les données JSON
with open(input_json_file, "r", encoding="utf-8") as json_file:
    data = json.load(json_file)

# Créer et ouvrir le fichier CSV avec l'encodage utf-8-sig
with open(output_csv_file, mode="w", newline="", encoding="utf-8-sig") as csv_file:
    writer = csv.writer(csv_file, delimiter=';', quotechar='"', quoting=csv.QUOTE_MINIMAL)

    # Écrire l'en-tête
    header = [
        "ID", "URL", "Titre", "Chapeau", "Description", "Mots clés", 
        "Date de début", "Heure de début", "Date de fin", "Heure de fin", 
        "Nom du lieu", "Adresse du lieu", "Code Postal", "Ville", 
        "Coordonnées géographiques", "Accès PMR", "Accès mal voyant", 
        "Accès mal entendant", "Transport", "Nom de contact", 
        "Téléphone de contact", "Email de contact", "Url de contact", 
        "Type d’accès", "Détail du prix", "URL de l’image de couverture"
    ]
    writer.writerow(header)

    # Parcourir les données JSON pour extraire les champs demandés
    for item in data:
        id_ = item.get("id", "Non renseigné")
        url = item.get("url", "Non renseigné")
        titre = item.get("title", "Non renseigné")
        chapeau = item.get("lead_text", "Non renseigné")
        description = item.get("description", "Non renseigné")


        # Gérer les mots clés
        tags = item.get("tags", [])
        mots_cles = ", ".join(tags) if isinstance(tags, list) else "Non renseigné"

        date_debut, heure_debut = convertir_date_et_heure(item.get("date_start"))
        date_fin, heure_fin = convertir_date_et_heure(item.get("date_end"))
        nom_lieu = item.get("address_name", "Non renseigné")
        adresse_lieu = item.get("address_street", "Non renseigné")
        code_postal = item.get("address_zipcode", "Non renseigné")
        ville = item.get("address_city", "Non renseigné")
        
        # Extraire les coordonnées géographiques (latitude et longitude)
        coord_geo = item.get("lat_lon", "Non renseignées")
        if isinstance(coord_geo, dict) and "lat" in coord_geo and "lon" in coord_geo:
            lat = coord_geo["lat"]
            lon = coord_geo["lon"]
            coord_geo = f"{lat}, {lon}"
        else:
            coord_geo = "Non renseignées"
        
        # Gérer l'accès PMR (Personnes à mobilité réduite)
        acces_pmr = "Oui" if item.get("pmr", 0) == 1 else "Non"
        acces_mal_voyant = "Oui" if item.get("blind", 0) == 1 else "Non"
        acces_mal_entendant = "Oui" if item.get("deaf", 0) == 1 else "Non"

        transport = item.get("transport", "Non renseigné")
        nom_contact = item.get("name", "Non renseigné")
        tel_contact = item.get("contact_phone", "Non renseigné")
        email_contact = item.get("contact_mail", "Non renseigné")
        url_contact = item.get("contact_url", "Non renseigné")
        type_acces = item.get("access_type", "Non renseigné")
        detail_prix = item.get("price_detail", "Non renseigné")
        url_image = item.get("image_couverture", "Non renseignée")

        # S'assurer qu'aucun retour à la ligne ou espace excessif n'est ajouté
        row = [ 
            nettoyer_texte(id_), nettoyer_texte(url), nettoyer_texte(titre), nettoyer_texte(chapeau),
            nettoyer_texte(description), nettoyer_texte(mots_cles), date_debut, heure_debut,
            date_fin, heure_fin, nettoyer_texte(nom_lieu), nettoyer_texte(adresse_lieu),
            nettoyer_texte(code_postal), nettoyer_texte(ville), nettoyer_texte(coord_geo),
            acces_pmr, acces_mal_voyant, acces_mal_entendant, nettoyer_texte(transport),
            nettoyer_texte(nom_contact), nettoyer_texte(tel_contact), nettoyer_texte(email_contact),
            nettoyer_texte(url_contact), nettoyer_texte(type_acces), nettoyer_texte(detail_prix),
            nettoyer_texte(url_image)
        ]
        
        # Écrire les données dans le fichier CSV
        writer.writerow(row)

print(f"Le fichier CSV a été généré avec succès : {output_csv_file}")
