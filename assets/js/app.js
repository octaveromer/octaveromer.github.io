/* =====================================================
   Octave Romer — Portfolio interactions
   ===================================================== */
(function () {
  "use strict";

  /* ---------- PROJECT DATA (BUT SD1) ---------- */
  const PROJECTS = [
    {
      id: 1, sem: "s1", file: "assets/files/projects/but-sd1/eco.pdf", cover: "pojeteco.jpg",
      title: { fr: "Apprendre en situation la production de données en entreprise", en: "Learning data production in a business environment" },
      tag: { fr: "Économie · Excel", en: "Economics · Excel" },
      slides: [
        { img: "pojeteco.jpg", h: { fr: "1. Objectif du projet et méthode d'analyse", en: "1. Project objective and analysis method" }, p: { fr: "Ce projet vise à comprendre pourquoi le Nouveau Front Populaire (NFP) a remporté une large victoire dans les Hautes-Pyrénées lors des dernières élections législatives. Pour cela, nous avons mené une étude approfondie sur la population, l'emploi et le chômage dans ce département. Nous nous sommes appuyés sur les données du Recensement 2021 de l'INSEE, en sélectionnant un échantillon représentatif de 20 communes. Ces données ont été traitées et analysées via Excel afin d'identifier les dynamiques socio-économiques locales qui expliquent cette victoire électorale. Cette démarche permet de mieux cibler les actions politiques futures du NFP.", en: "This project aims to understand why the New Popular Front (NFP) won a large victory in the Hautes-Pyrénées during the last legislative elections. To do this, we conducted an in-depth study of the population, employment, and unemployment in this department. We relied on data from the 2021 INSEE Census, selecting a representative sample of 20 municipalities. This data was processed and analyzed via Excel to identify the local socio-economic dynamics that explain this electoral victory. This approach allows for better targeting of the NFP's future political actions." } },
        { img: "eco2.jpg", h: { fr: "2. Une population vieillissante et en stagnation", en: "2. An aging and stagnant population" }, p: { fr: "En 2021, les Hautes-Pyrénées comptaient environ 230 000 habitants, une légère hausse de 0,9 % en six ans. Cependant, la population vieillit nettement : près de 30 % ont plus de 60 ans, avec une forte proportion de plus de 75 ans, bien au-dessus de la moyenne nationale. La part des jeunes reste limitée, ce qui entraîne un faible renouvellement de la population active. Le ratio moyen est de 1,5 actif pour une personne âgée, mais certaines communes comme Caubous ont un ratio critique (0,68), indiquant un déséquilibre démographique qui fragilise l'économie locale.", en: "In 2021, the Hautes-Pyrénées had about 230,000 inhabitants, a slight increase of 0.9% in six years. However, the population is clearly aging: nearly 30% are over 60 years old, with a high proportion over 75, well above the national average. The share of young people remains limited, leading to low renewal of the working population. The average ratio is 1.5 workers per elderly person, but some municipalities like Caubous have a critical ratio (0.68), indicating a demographic imbalance that weakens the local economy." } },
        { img: "eco3.jpg", h: { fr: "3. Chômage élevé et lien avec le niveau d'études", en: "3. High unemployment and link with education level" }, p: { fr: "Le taux de chômage dans les Hautes-Pyrénées atteint 12 %, largement supérieur à la moyenne nationale de 7,3 %. Ce taux varie fortement selon les communes, avec des extrêmes allant de 0 % à 37 %. Par ailleurs, le chômage touche principalement les personnes peu ou pas diplômées : 83 % des chômeurs n'ont pas de diplôme post-bac, et les titulaires d'un CAP ou BEP sont les plus concernés. À l'inverse, les diplômés du supérieur sont nettement moins exposés au chômage. Ces résultats soulignent l'importance d'investir dans la formation et l'éducation pour améliorer l'emploi local.", en: "The unemployment rate in the Hautes-Pyrénées reaches 12%, significantly higher than the national average of 7.3%. This rate varies greatly between municipalities, with extremes ranging from 0% to 37%. Furthermore, unemployment mainly affects people with little or no education: 83% of the unemployed do not have a post-secondary diploma, and those with a CAP or BEP are the most affected. Conversely, higher education graduates are much less exposed to unemployment. These results highlight the importance of investing in training and education to improve local employment." } }
      ]
    },
    {
      id: 2, sem: "s1", file: "assets/files/projects/but-sd1/diapocom.pptx", cover: "projetcom.jpg",
      title: { fr: "Présentation en anglais d'un territoire économique et culturel", en: "English presentation of an economic and cultural territory" },
      tag: { fr: "Communication · Anglais", en: "Communication · English" },
      slides: [
        { img: "projetcom.jpg", h: { fr: "1. Présentation du projet et impact urbain des JO d'Athènes", en: "1. Project presentation and urban impact of the Athens Olympics" }, p: { fr: "Dans le cadre de ce projet de groupe, nous devions réaliser un PowerPoint et une présentation orale à trois, avec une partie en français et une partie en anglais. Le thème était : les Jeux Olympiques d'Athènes 2004, et notre objectif était d'analyser leurs conséquences sur la ville d'Athènes. Dans la première partie, nous avons étudié l'impact urbain des Jeux. Nous avons commencé par un rappel de l'histoire d'Athènes, en soulignant son rôle fondateur dans l'histoire des Jeux antiques, et son importance symbolique en tant que ville hôte des Jeux modernes de 2004. Ensuite, nous avons abordé les améliorations des infrastructures de transport : création de lignes de métro, modernisation de l'aéroport, développement du tramway et nouvelles autoroutes. Ces investissements ont permis de désengorger la ville et d'améliorer la circulation. Enfin, nous avons présenté les transformations architecturales et la revitalisation urbaine. De nombreux sites ont été construits ou rénovés (stades, piscines, village olympique), et des zones délaissées de la ville ont été réaménagées, avec des espaces verts et des installations modernes. Cela a changé durablement le visage de la ville, même si certains sites sont aujourd'hui à l'abandon.", en: "As part of this group project, we had to create a PowerPoint and an oral presentation in groups of three, with one part in French and one part in English. The theme was: the Athens 2004 Olympics, and our goal was to analyze their consequences on the city of Athens. In the first part, we studied the urban impact of the Games. We began with a reminder of the history of Athens, highlighting its founding role in the history of the ancient Games and its symbolic importance as the host city of the 2004 modern Games. Then, we discussed improvements in transport infrastructure: creation of metro lines, modernization of the airport, development of the tram, and new highways. These investments helped to decongest the city and improve traffic. Finally, we presented the architectural transformations and urban revitalization. Many sites were built or renovated (stadiums, pools, Olympic village), and neglected areas of the city were redeveloped, with green spaces and modern facilities. This has permanently changed the face of the city, even though some sites are now abandoned." } },
        { img: "projetcom2.jpg", h: { fr: "2. L'impact économique et géographique des Jeux", en: "2. The economic and geographical impact of the Games" }, p: { fr: "La deuxième partie de notre travail portait sur les aspects économiques et géographiques. D'abord, nous avons décrit la situation géographique et le climat d'Athènes. Située au bord de la mer Méditerranée, la ville bénéficie d'un climat chaud et sec en été, ce qui a eu des effets sur le déroulement des épreuves sportives et sur l'accueil des visiteurs. Nous avons ensuite étudié l'impact économique des Jeux. À court terme, ils ont apporté des bénéfices : hausse du tourisme, création d'emplois, dynamisme local. Mais à long terme, les coûts ont été très lourds pour l'économie grecque. L'organisation a coûté plus de 9 milliards d'euros, ce qui a contribué à la dette du pays, d'autant plus que plusieurs infrastructures sont aujourd'hui peu ou pas utilisées. Pour terminer, nous avons présenté quelques chiffres clés des Jeux Olympiques et Paralympiques : nombre de participants, de médailles, coûts, et comparaison entre les deux événements. Ces données ont permis d'illustrer l'ampleur des Jeux et l'importance croissante de l'inclusion à travers les Jeux Paralympiques.", en: "The second part of our work focused on the economic and geographical aspects. First, we described the geographical situation and climate of Athens. Located on the edge of the Mediterranean Sea, the city enjoys a hot and dry climate in summer, which had effects on the sporting events and the reception of visitors. We then studied the economic impact of the Games. In the short term, they brought benefits: an increase in tourism, job creation, and local dynamism. But in the long term, the costs were very high for the Greek economy. The organization cost more than 9 billion euros, which contributed to the country's debt, especially since several infrastructures are now little or not used. Finally, we presented some key figures of the Olympic and Paralympic Games: number of participants, medals, costs, and comparison between the two events. This data illustrated the scale of the Games and the growing importance of inclusion through the Paralympic Games." } }
      ]
    },
    {
      id: 3, sem: "s1", file: "assets/files/projects/but-sd1/TransformerJsonToCsv.py", cover: "projetgestiondefichier.jpg",
      title: { fr: "Écriture et lecture de fichiers de données", en: "Writing and reading data files" },
      tag: { fr: "Python · JSON/CSV", en: "Python · JSON/CSV" },
      slides: [
        { img: "projetgestiondefichier.jpg", h: { fr: "1. Objectif et préparation du projet", en: "1. Objective and project preparation" }, p: { fr: "Dans ce projet, l'objectif était de transformer un fichier JSON brut en un fichier CSV structuré, afin de rendre les données facilement exploitables. Le fichier JSON contenait des informations sur des événements culturels proposés à Paris, comme des expositions, spectacles, ateliers, etc. Pour cela, nous avons utilisé Python et les modules json, csv et datetime. Dans un premier temps, nous avons chargé les données JSON et préparé une structure d'en-tête pour le fichier CSV avec toutes les informations importantes à extraire : titres, descriptions, dates, lieux, accessibilité, contacts, etc. Nous avons aussi créé des fonctions pour nettoyer les champs texte (en supprimant les retours à la ligne et les espaces inutiles), ainsi qu'une fonction de conversion de date ISO en format français (jour/mois/année) avec l'extraction de l'heure.", en: "In this project, the goal was to transform a raw JSON file into a structured CSV file to make the data easily usable. The JSON file contained information about cultural events offered in Paris, such as exhibitions, shows, workshops, etc. For this, we used Python and the json, csv, and datetime modules. First, we loaded the JSON data and prepared a header structure for the CSV file with all the important information to extract: titles, descriptions, dates, locations, accessibility, contacts, etc. We also created functions to clean text fields (by removing line breaks and unnecessary spaces), as well as a function to convert ISO dates to French format (day/month/year) with the extraction of the time." } },
        { img: "gestiondefichier2.jpg", h: { fr: "2. Extraction des données et création du fichier CSV", en: "2. Data extraction and creation of the CSV file" }, p: { fr: "Une fois la structure prête, le script a parcouru chaque événement du fichier JSON pour extraire les données pertinentes : l'identifiant, le titre, l'URL, le lieu, les coordonnées GPS, les dates de début et de fin + heures, l'accessibilité pour les PMR, malvoyants et malentendants, les mots-clés, le transport, les contacts, les prix, etc. Chaque donnée a été nettoyée et formatée pour éviter les erreurs dans le fichier final. Les valeurs absentes ont été remplacées par « Non renseigné » pour garantir la cohérence. Enfin, toutes ces lignes ont été écrites dans un fichier CSV encodé en utf-8-sig, ce qui le rend directement lisible dans Excel. Le résultat est un tableau clair, bien organisé, permettant une analyse rapide des événements ou une importation dans un autre outil.", en: "Once the structure was ready, the script went through each event in the JSON file to extract the relevant data: the identifier, title, URL, location, GPS coordinates, start and end dates + times, accessibility for people with reduced mobility, the visually and hearing impaired, keywords, transport, contacts, prices, etc. Each piece of data was cleaned and formatted to avoid errors in the final file. Missing values were replaced with 'Not specified' to ensure consistency. Finally, all these lines were written into a CSV file encoded in utf-8-sig, making it directly readable in Excel. The result is a clear, well-organized table, allowing for quick analysis of events or importation into another tool." } }
      ]
    },
    {
      id: 4, sem: "s1", file: "assets/files/projects/but-sd1/projetvba.zip", cover: "projetvba.jpg",
      title: { fr: "Création d'un reporting", en: "Creating a report" },
      tag: { fr: "Excel · VBA", en: "Excel · VBA" },
      slides: [
        { img: "projetvba.jpg", h: { fr: "Objectif du projet", en: "Project Objective" }, p: { fr: "Ce projet avait pour but de concevoir un simulateur de moyenne personnalisé dans Excel, à destination des étudiants du BUT 1 en Science des Données. L'outil devait permettre une gestion complète des notes obtenues tout au long de l'année, en s'appuyant sur les ressources pédagogiques et les coefficients officiels (semestres, compétences, ressources, SAÉ).", en: "This project aimed to design a customized grade simulator in Excel for first-year students in Data Science. The tool was intended to provide comprehensive management of grades obtained throughout the year, based on educational resources and official coefficients (semesters, skills, resources, SAÉ)." } },
        { img: "vba1.jpg", h: { fr: "Fonctionnalités de l'application", en: "Application Features" }, p: { fr: "L'outil développé comprend plusieurs fonctionnalités interactives : Ajout et modification de notes à travers des listes déroulantes liées (semestre, compétence, ressource, SAÉ), avec stockage des données dans une feuille dédiée à l'historique des devoirs. Un tableau de bord dynamique permet de suivre les résultats par compétence, ressource, SAÉ ou semestre, incluant des graphiques clairs et obligatoires pour une meilleure visualisation. Une décision de jury automatique est intégrée, basée sur les règles pédagogiques : Passage en 2e année si : Moyenne annuelle ≥ 10 dans au moins 2 compétences, Moyenne ≥ 8 dans toutes les compétences. Le niveau 1 d'une compétence est considéré comme atteint si sa moyenne annuelle est ≥ 10.", en: "The developed tool includes several interactive features: Adding and modifying grades through linked drop-down lists (semester, skill, resource, SAÉ), with data storage in a dedicated worksheet for assignment history. A dynamic dashboard allows tracking results by skill, resource, SAÉ, or semester, including clear and mandatory charts for better visualization. An automatic jury decision is integrated, based on educational rules: Progression to the 2nd year if: Annual average ≥ 10 in at least 2 skills, Average ≥ 8 in all skills. Level 1 of a skill is considered achieved if its annual average is ≥ 10." } },
        { img: "vba2.jpg", h: { fr: "Utilisation et finalité", en: "Usage and Purpose" }, p: { fr: "L'outil a été conçu pour être simple d'utilisation avec un guide explicatif intégré, permettant à chaque étudiant de : Suivre en autonomie ses progrès académiques, Identifier ses points forts et faibles, Simuler différents scénarios de fin d'année, Et anticiper la validation de ses compétences ainsi que son passage en deuxième année.", en: "The tool was designed to be easy to use with an integrated explanatory guide, allowing each student to: Independently track their academic progress, Identify their strengths and weaknesses, Simulate different end-of-year scenarios, And anticipate the validation of their skills as well as their progression to the second year." } }
      ]
    },
    {
      id: 5, sem: "s2", file: "assets/files/projects/but-sd1/bdr.zip", cover: "projetbdr.jpg",
      title: { fr: "Conception et implémentation d'une base de données", en: "Design and implementation of a database" },
      tag: { fr: "Python · Tkinter", en: "Python · Tkinter" },
      slides: [
        { img: "projetbdr.jpg", h: { fr: "Contexte et objectifs du projet", en: "Context and project objectives" }, p: { fr: "Dans le cadre de ce projet, notre groupe a été chargé de développer une application de gestion pour la coopérative de sel marin de l'île de Ré, en utilisant Tkinter. Cette coopérative souhaite informatiser la gestion des approvisionnements et des ventes de deux types de sel : le gros sel et la fleur de sel, fournis par les sauniers pendant l'été. L'application devait permettre de gérer les entrées de stock (par produit, date et saunier), les traitements du sel, et les sorties de stock (par client, produit et date). Les prix d'achat et de vente hors taxes, fixés annuellement, devaient également être intégrés au système.", en: "As part of this project, our group was tasked with developing a management application for the Ré Island sea salt cooperative using Tkinter. This cooperative wanted to computerize the management of supplies and sales of two types of salt: coarse salt and fleur de sel, supplied by salt workers during the summer. The application had to manage stock entries (by product, date, and salt worker), salt processing, and stock exits (by customer, product, and date). The purchase and sale prices excluding taxes, set annually, also had to be integrated into the system." } },
        { img: "bdr2.jpg", h: { fr: "Réalisation de l'application et fonctionnalités", en: "Application development and features" }, p: { fr: "Nous avons développé une interface graphique avec Tkinter capable de gérer l'ensemble des données à l'aide de fichiers CSV. L'application propose un système de connexion avec deux profils d'utilisateurs : Admin : peut modifier, ajouter et supprimer les données (entrées, sorties, prix, etc.), Utilisateur simple : a un accès consultation uniquement, sans possibilité de modifier les informations. Ce système de rôles permet de sécuriser les données tout en rendant l'outil accessible. L'interface a été pensée pour être claire, intuitive et adaptée aux besoins de la coopérative, notamment pour des utilisateurs sans compétences techniques. L'ensemble du projet répond aux objectifs de traçabilité, de facilité de gestion et d'automatisation des processus internes de la coopérative.", en: "We developed a graphical interface with Tkinter capable of managing all the data using CSV files. The application offers a login system with two user profiles: Admin: can modify, add, and delete data (entries, exits, prices, etc.), Simple user: has read-only access, without the ability to modify information. This role system secures the data while making the tool accessible. The interface was designed to be clear, intuitive, and adapted to the needs of the cooperative, especially for users without technical skills. The entire project meets the objectives of traceability, ease of management, and automation of the cooperative's internal processes." } }
      ]
    },
    {
      id: 6, sem: "s2", file: "assets/files/projects/but-sd1/dataviz.pdf", cover: "projetdataviz.jpg",
      title: { fr: "Dataviz (concours)", en: "Dataviz (competition)" },
      tag: { fr: "Datavisualisation", en: "Data visualisation" },
      slides: [
        { img: "dataviz1.jpg", h: { fr: "Contexte du projet et démarche de réalisation", en: "Project context and approach" }, p: { fr: "Ce projet a été réalisé dans le cadre d'un concours national de datavisualisation, organisé sur une seule journée. Le thème imposé était : « Les jeunes et l'emploi en France ». Nous avons travaillé en groupe de 5, avec pour objectif de produire une affiche claire, visuelle et pertinente à partir de données fournies par l'INSEE. Pour répondre au sujet, nous avons d'abord sélectionné des données clés portant sur les 15-29 ans entre 2010 et 2021. À partir de là, nous avons trié, comparé et croisé les informations afin d'identifier les évolutions les plus significatives. Nous avons ensuite utilisé Excel pour créer des graphiques et des outils de design pour construire une affiche lisible et impactante. Notre but était de faire parler les chiffres à travers une mise en page structurée et visuelle, tout en respectant le thème imposé.", en: "This project was carried out as part of a national datavisualization competition, organized in a single day. The imposed theme was: 'Youth and employment in France.' We worked in a group of 5, with the objective of producing a clear, visual, and relevant poster from data provided by INSEE. To address the topic, we first selected key data on 15-29 year-olds between 2010 and 2021. From there, we sorted, compared, and cross-referenced the information to identify the most significant trends. We then used Excel to create charts and design tools to build a readable and impactful poster. Our goal was to make the numbers speak through a structured and visual layout, while respecting the imposed theme." } },
        { img: "dataviz2.jpg", h: { fr: "Contenu de notre dataviz et messages clés", en: "Content of our dataviz and key messages" }, p: { fr: "Notre datavisualisation met en évidence plusieurs tendances marquantes concernant les jeunes de 15 à 29 ans sur la période 2010-2021. Tout d'abord, on observe une élévation du niveau de diplôme : les jeunes sont plus nombreux à atteindre un Bac +3 ou plus, et les formations professionnelles comme le CAP ou Bac pro sont en baisse. Cette tendance s'accompagne d'une féminisation de l'enseignement supérieur, avec une majorité de femmes chez les diplômés Bac +5 en 2021. Paradoxalement, malgré ce meilleur niveau d'étude, on constate une baisse du nombre de jeunes en emploi entre 2010 et 2021 (environ 150 000 en moins chez les 25-29 ans), alors que le taux de chômage est resté stable, ce qui montre un blocage structurel dans l'accès à l'emploi pour cette génération. Enfin, notre affiche souligne que les formations longues se sont diffusées sur tout le territoire, alors qu'en 2010 elles étaient surtout concentrées dans les grandes villes.", en: "Our datavisualization highlights several significant trends concerning young people aged 15 to 29 over the period 2010-2021. Firstly, there is an increase in the level of education: more young people are reaching a Bac +3 level or higher, and vocational training such as CAP or Bac pro is declining. This trend is accompanied by a feminization of higher education, with a majority of women among Bac +5 graduates in 2021. Paradoxically, despite this higher level of education, there is a decrease in the number of young people in employment between 2010 and 2021 (about 150,000 fewer among 25-29 year-olds), while the unemployment rate has remained stable, showing a structural blockage in access to employment for this generation. Finally, our poster highlights that long-term training has spread throughout the territory, whereas in 2010 it was mainly concentrated in large cities." } }
      ]
    },
    {
      id: 7, sem: "s2", file: "assets/files/projects/but-sd1/indicateur.pdf", cover: "projetindicateur.jpg",
      title: { fr: "Construction et présentation d'indicateurs de performance", en: "Building and presenting performance indicators" },
      tag: { fr: "Finance · KPI", en: "Finance · KPI" },
      slides: [
        { img: "indicateur1.jpg", h: { fr: "Présentation du groupe Fleury-Michon et analyse financière", en: "Presentation of the Fleury-Michon group and financial analysis" }, p: { fr: "Ce projet porte sur le groupe Fleury-Michon, un acteur important dans l'industrie agroalimentaire. Nous avons d'abord présenté le groupe, son histoire, ses activités principales, ainsi que la filiale Fleury-Michon LS. Cette introduction permet de mieux comprendre le contexte économique et sectoriel dans lequel évolue l'entreprise. Ensuite, nous avons réalisé une analyse détaillée du chiffre d'affaires (CA) et du résultat du groupe. Nous avons étudié l'évolution de ces indicateurs financiers clés pour évaluer la santé économique de Fleury-Michon sur plusieurs années. Cette analyse financière a été complétée par un diagnostic global de la situation du groupe, mettant en lumière ses forces et ses faiblesses ainsi que les défis auxquels il doit faire face.", en: "This project focuses on the Fleury-Michon group, a major player in the agri-food industry. We first presented the group, its history, its main activities, as well as the subsidiary Fleury-Michon LS. This introduction helps to better understand the economic and sectoral context in which the company operates. Then, we conducted a detailed analysis of the turnover (CA) and the result of the group. We studied the evolution of these key financial indicators to assess the economic health of Fleury-Michon over several years. This financial analysis was complemented by an overall diagnosis of the group's situation, highlighting its strengths and weaknesses as well as the challenges it must face." } },
        { img: "indicateur2.jpg", h: { fr: "Construction et présentation des indicateurs de performance", en: "Construction and presentation of performance indicators" }, p: { fr: "La seconde partie du projet a consisté à construire un tableau de bord regroupant plusieurs indicateurs et ratios de performance essentiels. Ce tableau de bord, présenté à la page 8 du rapport, offre une vision synthétique et claire de la performance opérationnelle et financière du groupe Fleury-Michon. Ces indicateurs permettent de suivre l'évolution du groupe en termes de rentabilité, de gestion des coûts, de productivité, ainsi que d'autres aspects stratégiques. Grâce à cette démarche, nous avons pu proposer un outil de pilotage utile pour les décideurs afin d'optimiser la gestion et de soutenir la prise de décisions éclairées au sein de l'entreprise.", en: "The second part of the project consisted of building a dashboard bringing together several essential performance indicators and ratios. This dashboard, presented on page 8 of the report, offers a clear and synthetic view of the operational and financial performance of the Fleury-Michon group. These indicators make it possible to monitor the group's evolution in terms of profitability, cost management, productivity, as well as other strategic aspects. Thanks to this approach, we were able to propose a management tool useful for decision-makers to optimize management and support informed decision-making within the company." } }
      ]
    },
    {
      id: 8, sem: "s2", file: "assets/files/projects/but-sd1/projetfinal.zip", cover: "projetfinal.jpg",
      title: { fr: "Analyse de données, reporting et datavisualisation", en: "Data analysis, reporting and data visualisation" },
      tag: { fr: "Python · CustomTkinter", en: "Python · CustomTkinter" },
      slides: [
        { img: "final4.jpg", h: { fr: "Contexte et objectifs du projet", en: "Context and project objectives" }, p: { fr: "Dans ce projet de groupe, nous avons été chargés de concevoir un outil interactif pour analyser les accidents de la vie courante (AcVC) en France. Réalisé pour Mme Marion Dupuy de l'organisme Calyxis, en collaboration avec l'équipe enseignante du BUT SD, ce projet avait pour objectif principal de créer un tableau de bord automatisé. Cet outil devait permettre d'expliquer les causes des accidents domestiques, d'identifier les facteurs aggravants, et de comparer les données des volontaires avec celles de la population française.", en: "In this group project, we were tasked with designing an interactive tool to analyze everyday accidents (AcVC) in France. Carried out for Mrs. Marion Dupuy from the organization Calyxis, in collaboration with the teaching team of the BUT SD, this project had the main objective of creating an automated dashboard. This tool was to explain the causes of domestic accidents, identify aggravating factors, and compare the data of volunteers with that of the French population." } },
        { img: "projetfinal.jpg", h: { fr: "Mon rôle : conception de l'interface graphique", en: "My role: designing the graphical interface" }, p: { fr: "Ma responsabilité principale dans ce projet a été de concevoir toute l'interface graphique de l'application. J'ai utilisé le module customtkinter, une version plus moderne et esthétique que Tkinter classique. J'ai eu l'idée de rendre l'application adaptable à toutes les tailles d'écran et multilingue, avec un bouton permettant de passer du français à l'anglais. J'ai veillé à offrir une expérience utilisateur fluide, intuitive et agréable, quel que soit le support utilisé.", en: "My main responsibility in this project was to design the entire graphical interface of the application. I used the customtkinter module, a more modern and aesthetic version than classic Tkinter. I had the idea to make the application adaptable to all screen sizes and multilingual, with a button to switch from French to English. I made sure to offer a fluid, intuitive, and pleasant user experience, regardless of the device used." } },
        { img: "final2.jpg", h: { fr: "3. Intégration des scripts Python dans l'interface", en: "3. Integration of Python scripts into the interface" }, p: { fr: "Mes coéquipiers ont développé des scripts Python pour calculer des indicateurs statistiques et vérifier la représentativité des fichiers par rapport à la population française. Mon travail consistait à adapter ces scripts pour qu'ils s'intègrent parfaitement dans l'interface graphique. Par exemple, les entrées utilisateur sous forme de input() ont été remplacées par des menus déroulants intégrés. Cette étape a demandé une réécriture importante afin d'assurer la cohérence et le bon fonctionnement de tous les modules dans l'application.", en: "My teammates developed Python scripts to calculate statistical indicators and verify the representativeness of the files compared to the French population. My task was to adapt these scripts so that they integrate perfectly into the graphical interface. For example, user inputs in the form of input() were replaced with integrated drop-down menus. This step required significant rewriting to ensure the consistency and proper functioning of all modules in the application." } },
        { img: "final3.jpg", h: { fr: "Choix techniques, démarche personnelle et compétences acquises", en: "Technical choices, personal approach, and acquired skills" }, p: { fr: "J'ai choisi d'utiliser customtkinter car Tkinter de base me semblait limité en ergonomie et esthétique. Après avoir exploré plusieurs options, j'ai privilégié une structure claire du code, avec de nombreuses fonctions personnalisées pour faciliter l'organisation et la réutilisation du code. Cette expérience m'a permis de prendre conscience de l'importance et de la puissance de la programmation. J'ai découvert qu'avec Python, il est possible de créer des outils complets et interactifs : chargement et tri de données, génération de graphiques, traduction d'interface, automatisation de calculs complexes. Ce projet m'a donné envie d'approfondir mes connaissances et de continuer à développer mes compétences en programmation.", en: "I chose to use customtkinter because basic Tkinter seemed limited in terms of ergonomics and aesthetics. After exploring several options, I favored a clear code structure, with many custom functions to facilitate organization and code reuse. This experience made me realize the importance and power of programming. I discovered that with Python, it is possible to create complete and interactive tools: loading and sorting data, generating graphs, translating interfaces, automating complex calculations. This project gave me the desire to deepen my knowledge and continue to develop my programming skills." } }
      ]
    },
    {
      id: 9, sem: "s2", file: "assets/files/projects/but-sd1/estimation.pdf", cover: "projetestimation.jpg",
      title: { fr: "Estimation par échantillonnage", en: "Estimation by sampling" },
      tag: { fr: "Statistiques", en: "Statistics" },
      slides: [
        { img: "projetestimation.jpg", h: { fr: "Estimation de la population de la Nouvelle-Aquitaine par échantillonnage", en: "Estimation of the population of Nouvelle-Aquitaine by sampling" }, p: { fr: "La première partie du projet vise à estimer la population totale de la région Nouvelle-Aquitaine, qui compte officiellement environ 6,17 millions d'habitants. Pour cela, deux méthodes d'échantillonnage sont utilisées sur un échantillon de 100 communes : un échantillonnage aléatoire simple, puis un échantillonnage aléatoire stratifié. L'échantillonnage aléatoire simple montre des résultats assez variables, allant de 3,4 à 7 millions, en raison de la sélection parfois disproportionnée de petites communes. L'échantillonnage stratifié, qui divise la population en groupes selon la taille des communes, permet d'obtenir des estimations plus fiables et représentatives, réduisant ainsi la marge d'erreur. La méthode stratifiée est donc préférée pour sa précision, bien qu'elle nécessite un bon choix des strates pour améliorer encore la qualité des estimations.", en: "The first part of the project aims to estimate the total population of the Nouvelle-Aquitaine region, which officially has about 6.17 million inhabitants. For this, two sampling methods are used on a sample of 100 municipalities: simple random sampling, then stratified random sampling. Simple random sampling shows fairly variable results, ranging from 3.4 to 7 million, due to the sometimes disproportionate selection of small municipalities. Stratified random sampling, which divides the population into groups according to the size of the municipalities, provides more reliable and representative estimates, thus reducing the margin of error. The stratified method is therefore preferred for its accuracy, although it requires a good choice of strata to further improve the quality of the estimates." } },
        { img: "estimation1.jpg", h: { fr: "Analyse de données sur la pratique du sport chez les étudiants", en: "Data analysis on sports practice among students" }, p: { fr: "La deuxième partie analyse un fichier d'enquête (EnqueteSportEtudiant2024) portant sur 376 étudiants et leurs habitudes sportives. L'objectif est de déterminer si la pratique du sport est liée à certaines caractéristiques des étudiants, comme le sexe, le niveau d'étude, le statut de fumeur ou la santé. Pour cela, des tableaux croisés sont construits entre la variable « sport » et ces autres variables, puis un test du khi-deux d'indépendance est réalisé. Ce test permet de détecter des relations significatives, tandis que le V de Cramér mesure la force de ces relations.", en: "The second part analyzes a survey file (EnqueteSportEtudiant2024) concerning 376 students and their sporting habits. The objective is to determine if the practice of sports is linked to certain characteristics of the students, such as gender, level of study, smoking status, or health. For this, cross-tabulations are constructed between the 'sport' variable and these other variables, then a chi-square test of independence is performed. This test makes it possible to detect significant relationships, while Cramér's V measures the strength of these relationships." } },
        { img: "estimation2.jpg", h: { fr: "Résultats et conclusions des analyses statistiques", en: "Results and conclusions of statistical analyses" }, p: { fr: "Les résultats montrent plusieurs associations significatives entre la pratique du sport et d'autres variables. La relation la plus forte est observée entre le sport et le sexe, suggérant que les habitudes sportives varient notablement selon que l'étudiant est homme ou femme. Ces résultats soulignent l'importance de prendre en compte des différences démographiques pour mieux comprendre les comportements sportifs. Le test du khi-deux et le V de Cramér sont des outils essentiels pour identifier et mesurer ces liens, permettant ainsi une meilleure interprétation des données collectées.", en: "The results show several significant associations between sports practice and other variables. The strongest relationship is observed between sports and gender, suggesting that sports habits vary significantly depending on whether the student is male or female. These results highlight the importance of considering demographic differences to better understand sports behaviors. The chi-square test and Cramér's V are essential tools for identifying and measuring these links, thus allowing for better interpretation of the collected data." } }
      ]
    }
  ];

  /* ---------- HELPERS ---------- */
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const lang = () => document.body.dataset.lang;
  const t = (o) => (o && (o[lang()] || o.fr)) || "";

  /* ---------- YEAR ---------- */
  $("#year").textContent = new Date().getFullYear();

  /* ---------- LANGUAGE TOGGLE ---------- */
  function applyLang() {
    $$("[data-fr]").forEach((el) => {
      const v = el.dataset[lang()];
      if (v !== undefined) el.textContent = v;
    });
  }
  $("#langToggle").addEventListener("click", () => {
    document.body.dataset.lang = lang() === "fr" ? "en" : "fr";
    document.documentElement.lang = lang();
    applyLang();
    if (modalState.open) renderSlides();
  });

  /* ---------- HEADER on scroll + active nav ---------- */
  const header = $("#header");
  const navLinks = $$(".nav__link");
  const sections = ["accueil", "apropos", "alternance", "projets", "bilan", "contact"].map((id) => $("#" + id));
  const progressBar = $(".scroll-progress span");

  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 30);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";

    let cur = sections[0];
    sections.forEach((s) => { if (s && s.offsetTop - 140 <= y) cur = s; });
    navLinks.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === "#" + cur.id));
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- SMOOTH SCROLL ---------- */
  $$("[data-scroll]").forEach((a) =>
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id && id.startsWith("#")) {
        e.preventDefault();
        const el = $(id);
        if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: "smooth" });
      }
    })
  );

  /* ---------- REVEAL on scroll ---------- */
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
    { threshold: 0.15 }
  );
  $$(".reveal").forEach((el) => io.observe(el));

  /* ---------- COUNT-UP stats ---------- */
  const counters = $$("[data-count]");
  const cio = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target, end = +el.dataset.count;
      let n = 0; const step = Math.max(1, Math.round(end / 40));
      const tick = () => { n += step; if (n >= end) { el.textContent = end; } else { el.textContent = n; requestAnimationFrame(tick); } };
      tick(); cio.unobserve(el);
    });
  }, { threshold: 0.6 });
  counters.forEach((c) => cio.observe(c));

  /* ---------- ABOUT toggle ---------- */
  const aboutMore = $("#aboutMore"), aboutToggle = $("#aboutToggle");
  aboutToggle.addEventListener("click", () => {
    const open = aboutMore.hidden;
    aboutMore.hidden = !open;
    aboutToggle.classList.toggle("is-open", open);
    aboutToggle.querySelector("span").textContent =
      open ? (lang() === "fr" ? "Réduire" : "Show less") : (lang() === "fr" ? "En savoir plus" : "Read more");
  });

  /* ---------- TILT cards + magnetic + cursor ---------- */
  const fine = window.matchMedia("(hover:hover)").matches;
  if (fine) {
    const glow = $(".cursor-glow");
    window.addEventListener("mousemove", (e) => {
      glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px";
    });
    $$(".tilt-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const rx = ((e.clientY - r.top) / r.height - 0.5) * -6;
        const ry = ((e.clientX - r.left) / r.width - 0.5) * 6;
        card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      });
      card.addEventListener("mouseleave", () => { card.style.transform = ""; });
    });
    $$(".magnetic").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px, ${(e.clientY - r.top - r.height / 2) * 0.28}px)`;
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
  }

  /* ---------- BUILD PROJECT GRID ---------- */
  const IMG1 = "assets/img/projects/but-sd1/"; // base path for year-1 project images
  const grid = $("#projectGrid");
  grid.innerHTML = PROJECTS.map((p) => `
    <article class="project-card" data-sem="${p.sem}" data-id="${p.id}">
      <img src="${IMG1}${p.cover}" alt="" loading="lazy">
      <span class="project-card__plus">+</span>
      <div class="project-card__overlay">
        <span class="project-card__sem">${p.sem === "s1" ? "Semestre 1" : "Semestre 2"}</span>
        <span class="project-card__title">${t(p.title)}</span>
      </div>
    </article>`).join("");

  function refreshGridLang() {
    $$(".project-card").forEach((card) => {
      const p = PROJECTS.find((x) => x.id == card.dataset.id);
      card.querySelector(".project-card__title").textContent = t(p.title);
      card.querySelector(".project-card__sem").textContent =
        p.sem === "s1" ? (lang() === "fr" ? "Semestre 1" : "Semester 1") : (lang() === "fr" ? "Semestre 2" : "Semester 2");
    });
  }

  /* ---------- YEAR TABS (projects) ---------- */
  $$(".projects .year-tab").forEach((tab) =>
    tab.addEventListener("click", () => {
      $$(".projects .year-tab").forEach((b) => b.classList.remove("is-active"));
      tab.classList.add("is-active");
      $$(".projects .year-panel").forEach((p) => p.classList.toggle("is-active", p.dataset.year === tab.dataset.year));
    })
  );

  /* ---------- BILAN TABS ---------- */
  $$("#bilanTabs .year-tab").forEach((tab) =>
    tab.addEventListener("click", () => {
      $$("#bilanTabs .year-tab").forEach((b) => b.classList.remove("is-active"));
      tab.classList.add("is-active");
      $$(".bilan-panel").forEach((p) => p.classList.toggle("is-active", p.dataset.byear === tab.dataset.byear));
    })
  );

  /* ---------- FILTERS ---------- */
  $$(".chip").forEach((chip) =>
    chip.addEventListener("click", () => {
      $$(".chip").forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      const f = chip.dataset.filter;
      $$(".project-card").forEach((card) =>
        card.classList.toggle("hide", f !== "all" && card.dataset.sem !== f)
      );
    })
  );

  /* ---------- PROJECT MODAL ---------- */
  const modal = $("#projectModal");
  const modalState = { open: false, project: null, index: 0 };

  function openModal(id) {
    modalState.project = PROJECTS.find((p) => p.id == id);
    modalState.index = 0;
    modalState.open = true;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    renderSlides();
  }
  function closeModal() {
    modalState.open = false;
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
  function renderSlides() {
    const p = modalState.project; if (!p) return;
    $("#modalTag").textContent = t(p.tag);
    $("#modalTitle").textContent = t(p.title);
    $("#modalDownload").href = p.file;
    $("#modalSlides").innerHTML = p.slides.map((s, i) => `
      <div class="modal__slide ${i === modalState.index ? "active" : ""}">
        <a href="${p.file}" download><img src="${IMG1}${s.img}" alt=""></a>
        <div><h4>${t(s.h)}</h4><p>${t(s.p)}</p></div>
      </div>`).join("");
    $("#modalDots").innerHTML = p.slides.map((_, i) =>
      `<span class="${i === modalState.index ? "on" : ""}" data-i="${i}"></span>`).join("");
    $("#modalPrev").disabled = modalState.index === 0;
    $("#modalNext").disabled = modalState.index === p.slides.length - 1;
    $$("#modalDots span").forEach((d) => d.addEventListener("click", () => { modalState.index = +d.dataset.i; renderSlides(); }));
  }
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".project-card");
    if (card) openModal(card.dataset.id);
  });
  $("#modalPrev").addEventListener("click", () => { if (modalState.index > 0) { modalState.index--; renderSlides(); } });
  $("#modalNext").addEventListener("click", () => { if (modalState.index < modalState.project.slides.length - 1) { modalState.index++; renderSlides(); } });
  $$("[data-close]", modal).forEach((el) => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", (e) => {
    if (!modalState.open) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") $("#modalPrev").click();
    if (e.key === "ArrowRight") $("#modalNext").click();
  });

  /* keep language consistent on initial load + refresh dynamic grid on toggle */
  applyLang();
  $("#langToggle").addEventListener("click", refreshGridLang);

  /* =====================================================
     AI AGENT
     ===================================================== */
  const fab = $("#aiFab"), panel = $("#aiPanel"), body = $("#aiBody"),
        form = $("#aiForm"), input = $("#aiInput"), sendBtn = $("#aiSend");
  const history = []; // {role, content}
  // Modèles Gemini essayés dans l'ordre (repli auto si l'un est indisponible)
  const GEMINI_MODELS = ["gemini-2.5-flash", "gemini-2.0-flash"];

  // Knowledge base (sent as the system prompt to the free client-side AI)
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

  function togglePanel(open) {
    panel.classList.toggle("open", open);
    panel.setAttribute("aria-hidden", String(!open));
    if (open) setTimeout(() => input.focus(), 300);
  }
  fab.addEventListener("click", () => togglePanel(!panel.classList.contains("open")));
  $("#aiClose").addEventListener("click", () => togglePanel(false));

  function addMsg(text, who) {
    const div = document.createElement("div");
    div.className = "ai-msg ai-msg--" + who;
    div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
    return div;
  }
  function typing(on) {
    let el = $(".ai-typing", body);
    if (on && !el) {
      el = document.createElement("div");
      el.className = "ai-typing";
      el.innerHTML = "<span></span><span></span><span></span>";
      body.appendChild(el); body.scrollTop = body.scrollHeight;
    } else if (!on && el) el.remove();
  }

  async function ask(message) {
    addMsg(message, "user");
    history.push({ role: "user", content: message });
    input.value = ""; sendBtn.disabled = true; typing(true);
    try {
      const KEY = (window.GEMINI_API_KEY || "").trim();
      if (!KEY) throw new Error("NO_KEY");

      // Map history to Gemini format (assistant -> model)
      const contents = history.slice(-12).map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));
      const reqBody = {
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents,
        generationConfig: { maxOutputTokens: 600, temperature: 0.6 },
      };

      let reply = "", lastErr = "";
      for (const model of GEMINI_MODELS) {
        try {
          const res = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/" + model + ":generateContent",
            { method: "POST", headers: { "Content-Type": "application/json", "x-goog-api-key": KEY }, body: JSON.stringify(reqBody) }
          );
          if (!res.ok) { lastErr = "HTTP " + res.status; continue; }
          const data = await res.json();
          const parts = data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts;
          reply = Array.isArray(parts) ? parts.map((p) => p.text || "").join("") : "";
          if (reply) break;
        } catch (e) { lastErr = String(e && e.message || e); }
      }
      typing(false);
      if (!reply) throw new Error(lastErr || "empty");
      reply = reply.trim();

      history.push({ role: "assistant", content: reply });
      // typed effect
      const el = addMsg("", "bot");
      let i = 0;
      const speed = reply.length > 400 ? 6 : 14;
      (function type() {
        el.textContent = reply.slice(0, i);
        body.scrollTop = body.scrollHeight;
        if (i++ < reply.length) setTimeout(type, 1000 / speed);
      })();
    } catch (err) {
      typing(false);
      const noKey = String(err && err.message) === "NO_KEY";
      const msg = noKey
        ? (lang() === "fr"
            ? "🔧 L'assistant n'est pas encore activé : ajoute ta clé Gemini gratuite dans assets/js/config.js (voir README)."
            : "🔧 Assistant not enabled yet: add your free Gemini key in assets/js/config.js (see README).")
        : (lang() === "fr"
            ? "⚠️ L'assistant IA est momentanément indisponible. Réessaie dans un instant, ou écris-moi à romer.octave@gmail.com."
            : "⚠️ The AI assistant is momentarily unavailable. Try again shortly, or email me at romer.octave@gmail.com.");
      addMsg(msg, "err");
    } finally {
      sendBtn.disabled = false;
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const v = input.value.trim();
    if (v) ask(v);
  });
  $$("#aiSuggestions button").forEach((b) =>
    b.addEventListener("click", () => { if (!panel.classList.contains("open")) togglePanel(true); ask(b.dataset.q); })
  );

})();
