export default {
  v3: {
    consult: 'Demander une consultation technique', consultShort: 'Demander une consultation', specs: 'Demander les spécifications techniques', feas: 'Étudier la faisabilité du projet', system: 'Découvrir le système',
    heroEyebrow: 'Tri des déchets intégré au bâtiment',
    spec: [
      { v: '2–6', l: 'Configurations de flux documentées' },
      { v: 'Acier inoxydable', l: 'Bornes intégrées au mur' },
      { v: 'Huile usagée', l: 'Point de collecte dédié' },
      { v: 'TR 2013 03567 B', l: 'Brevet turc examiné' }
    ],
    diagramTitle: 'La borne, annotée',
    diagramIntro: 'Une unité authentique installée. Sélectionnez un repère pour voir le rôle de chaque élément.',
    systemTitle: 'Fonctionnement du système',
    systemIntro: 'Le tri se fait là où l’on jette — pas après la collecte.',
    sys: [
      { t: 'Sélection', d: 'L’usager appuie sur le bouton du flux à la borne intégrée au mur.' },
      { t: 'Dépôt', d: 'Le déchet est déposé dans la borne en inox de l’étage.' },
      { t: 'Transfert', d: 'Il descend par la colonne du bâtiment.' },
      { t: 'Séparation', d: 'À la base, le séparateur le dirige vers le compartiment du flux choisi.' },
      { t: 'Collecte', d: 'Chaque compartiment est vidé flux par flux.' }
    ],
    sysNote: 'Schéma établi d’après des dessins techniques historiques. Dimensions, capacités et commandes sont confirmées pour chaque projet.',
    withoutT: 'Vide-ordures classique', without: 'Tous les déchets se mélangent dans un seul conteneur. Le tri éventuel a lieu après la collecte.',
    withT: 'Tri à la source Wastecykler', with: 'Le flux est choisi à la borne et chaque flux rejoint son propre compartiment.',
    buyerTitle: 'Ce qu’un acheteur exigeant doit savoir',
    buyerIntro: 'Des réponses directes. Lorsque des informations restent à vérifier, nous le disons.',
    buyer: [
      { q: 'Quel problème opérationnel résout-il ?', a: 'Les déchets mélangés sont difficiles à recycler une fois sortis du bâtiment. Wastecykler déplace le tri au point de dépôt : chaque flux reste séparé dès qu’il est jeté.' },
      { q: 'Comment s’intègre-t-il au bâtiment ?', a: 'Des bornes intégrées au mur à chaque étage sont reliées à un local de collecte. Emplacements des bornes, alimentation électrique, armoire de commande et interface colonne ou conteneur sont coordonnés avec l’architecte et les ingénieurs. Les bâtiments existants sont étudiés au cas par cas.' },
      { q: 'Quelles configurations, capacités et maintenance ?', a: 'Les dessins historiques documentent des configurations à 2, 3, 4 et 6 flux. Capacité, dimensions, plans de maintenance et besoins électriques sont fournis lors d’une évaluation technique et ne sont pas publiés avant vérification.' },
      { q: 'Qu’est-ce qui a été démontré ?', a: 'Un brevet turc examiné (TR 2013 03567 B), des installations pilotes avec colonnes de collecte étiquetées en Türkiye et des bornes en inox installées. Chaque élément du site est identifié par type de preuve.' },
      { q: 'Comment évaluer un grand projet ou un programme municipal ?', a: 'Par une démarche par étapes : consultation, revue des plans et du site, proposition de configuration, puis étude de faisabilité ou pilote avant tout engagement plus large.' }
    ],
    processTitle: 'Du premier échange à la décision de projet',
    processNote: 'Démarche d’accompagnement proposée. Périmètre et livrables sont convenus pour chaque projet.',
    outLabel: 'Livrable',
    process: [
      { t: 'Consultation technique', d: 'Type de bâtiment, étages, flux et stade du projet.', o: 'Note de cadrage' },
      { t: 'Revue des plans et du site', d: 'Plans d’architecte, locaux de collecte et réseaux du bâtiment.', o: 'Notes d’intégration' },
      { t: 'Proposition de configuration', d: 'Répartition des flux, emplacement des bornes et commandes.', o: 'Configuration proposée' },
      { t: 'Faisabilité ou pilote', d: 'Critères d’évaluation convenus avec le client avant installation.', o: 'Rapport de faisabilité ou plan pilote' },
      { t: 'Planification de la réalisation', d: 'Fabrication, séquence d’installation et maintenance.', o: 'Plan de projet' }
    ],
    paths: [
      { k: 'consultation', t: 'Consultation technique', d: 'Échangez avec un ingénieur sur votre bâtiment ou programme.' },
      { k: 'specifications', t: 'Spécifications techniques', d: 'Demandez des plans et des données techniques vérifiées.' },
      { k: 'feasibility', t: 'Faisabilité du projet', d: 'Évaluez une opération, un quartier ou un programme multi-bâtiments.' }
    ],
    intentLabel: 'De quoi avez-vous besoin ?',
    intents: { consultation: 'Consultation technique', specifications: 'Spécifications techniques', feasibility: 'Faisabilité du projet', partnership: 'Partenariat' },
    heritageTitle: 'Héritage technique',
    heritageIntro: 'Plus de dix ans de développement, documentés par des pièces d’origine.',
    heritageLink: 'Historique complet et brevet',
    integTitle: 'Intégration au bâtiment',
    sch: {
      municipalities: ['Immeubles d’habitation', 'Bâtiments publics', 'Local de collecte par bâtiment', 'Tournée de collecte par flux'],
      residential: ['Borne à chaque étage', 'Colonne du bâtiment', 'Séparateur', 'Local de collecte par flux'],
      commercial: ['Étages des occupants', 'Espace restauration', 'Point de collecte d’huile usagée', 'Local de collecte partagé'],
      healthcare: ['Bureaux et logements du personnel', 'Cuisines', 'Point de collecte d’huile usagée', 'Déchets cliniques — filière séparée, non incluse'],
      universities: ['Résidences étudiantes', 'Restaurant universitaire', 'Bâtiments d’enseignement', 'Collecte centralisée']
    },
    schNote: 'Illustration schématique. Les implantations sont définies pour chaque projet.',
    faqTitle: 'Les questions des acheteurs',
    sticky: 'Un projet en préparation ?',
    legendTitle: 'Types de preuves'
  }
};
