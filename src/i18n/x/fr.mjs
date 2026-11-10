export default {
  meta: { demoBanner: 'Démo privée · préparée par Dalal Technologies' },
  status: { proposed: 'Initiative proposée', document: 'Document officiel', historical: 'Preuve historique', authentic: 'Matériel authentique' },
  alt: {
    'city-waterfront': 'Image conceptuelle générée par IA d’un quartier résidentiel en bord de l’eau au crépuscule',
    'city-dusk': 'Image conceptuelle générée par IA d’une promenade mixte en bord de l’eau au coucher du soleil',
    'city-campus': 'Image conceptuelle générée par IA de bâtiments modernes et d’allées paysagées',
    'city-plaza': 'Image conceptuelle générée par IA d’une ligne d’horizon urbaine vue depuis l’eau au crépuscule',
    'city-towers': 'Image conceptuelle générée par IA de tours végétalisées en terrasses à l’heure bleue'
  },
  v2: {
    facts: ['Configurations de 2 à 6 flux documentées', 'Bornes d’apport en inox intégrées au bâtiment', 'Collecte dédiée des huiles usagées', 'Brevet turc examiné'],
    anatomyTitle: 'Anatomie d’une borne installée',
    anatomyIntro: 'Une unité Wastecykler authentique. Sélectionnez un point pour voir le rôle de chaque élément.',
    spots: [
      { t: 'Façade en acier inoxydable', d: 'Un cadre mural affleurant qui intègre la borne à la finition du bâtiment.' },
      { t: 'Ouverture de dépôt', d: 'Les déchets sont déposés ici après la sélection du flux.' },
      { t: 'Panneau du système', d: 'Marqué « Atık ayrıştırma sistemi » (système de tri des déchets), avec un voyant d’état.' },
      { t: 'Boutons de flux', d: 'Un bouton coloré par flux : ordures ménagères, plastique-papier-métal, verre, piles & électronique.' },
      { t: 'Instructions imprimées', d: 'Un mode d’emploi pas à pas imprimé directement sur le panneau.' }
    ],
    compareTitle: 'Collecte en mélange ou tri à la source',
    mixed: { t: 'Collecte en mélange', list: ['Tous les déchets vont dans un seul bac ou vide-ordures', 'Les recyclables se mêlent aux ordures ménagères', 'Le tri éventuel se fait plus tard, ailleurs'] },
    source: { t: 'Tri à la source', list: ['L’usager choisit un flux à la borne', 'Chaque flux reste dans son compartiment', 'La collecte s’organise flux par flux'] },
    compareNote: 'Comparaison illustrative de deux approches — pas un résultat mesuré.',
    schematic: 'Illustration schématique',
    sectorsTitle: 'Conçu pour les organisations qui façonnent les villes',
    evidenceTitle: 'Des preuves clairement identifiées',
    evidenceIntro: 'Chaque élément est signalé comme matériel authentique, preuve historique, document officiel ou initiative proposée.',
    engTitle: 'Compétences d’ingénierie visibles dans le matériel historique',
    eng: [
      { t: 'Fabrication en inox', d: 'Façades affleurantes et portes d’apport à charnière.' },
      { t: 'Électronique de commande', d: 'Carte de commande, relais et borniers dans une armoire dédiée.' },
      { t: 'Conception de séparateurs multi-flux', d: 'Configurations documentées à 2, 3, 4 et 6 flux.' },
      { t: 'Conception de l’interface', d: 'Boutons à code couleur, pictogrammes et instructions imprimées.' }
    ],
    expTitle: 'Développement international',
    exp: ['Partenariats de fabrication', 'Distribution régionale', 'Intégration technologique — capteurs et logiciels', 'Projets pilotes sur de nouveaux marchés'],
    expNote: 'Initiatives proposées — pas des accords existants.',
    problem: 'L’enjeu d’infrastructure', tech: 'Technologie Wastecykler concernée', value: 'Valeur opérationnelle potentielle',
    valueNote: 'La valeur potentielle dépend de chaque projet. Aucun résultat n’est revendiqué.',
    explore: 'Découvrir ce secteur',
    docOnRequest: 'Sur demande',
    comingSoon: 'Bientôt disponible',
    sectors: {
      municipalities: { problem: 'Les déchets ménagers arrivent souvent non triés aux services de collecte, ce qui complique les programmes de recyclage.', value: ['Des flux plus propres, triés en amont, pour la collecte', 'Un point de tri visible dans chaque bâtiment', 'Une démarche prête pour un pilote avant un déploiement plus large'] },
      residential: { problem: 'Les résidents portent leurs déchets jusqu’aux bacs communs ; le tri dépend de l’espace disponible et des habitudes.', value: ['Le tri à chaque étage, intégré à la conception', 'Moins de bacs en mélange dans les parties communes', 'Des repères clairs qui facilitent le bon geste'] },
      commercial: { problem: 'De nombreux occupants partagent un même système, et la restauration y ajoute des huiles de cuisson usagées.', value: ['Des flux séparés au sein d’une infrastructure partagée', 'Une collecte dédiée des huiles usagées pour la restauration', 'Des routines d’entretien et de service simplifiées'] },
      healthcare: { problem: 'Bureaux, cuisines et logements du personnel produisent des déchets courants en parallèle de l’activité clinique.', value: ['Des flux non cliniques séparés dans les bureaux, cuisines et espaces du personnel', 'Les huiles de cuisine tenues hors des canalisations', 'Les déchets courants gérés à part des processus cliniques'] },
      universities: { problem: 'Résidences et restaurants universitaires génèrent des déchets en mélange dans de nombreux bâtiments, avec un fort renouvellement des usagers.', value: ['Des points de tri homogènes dans les résidences et bâtiments communs', 'Collecte des huiles usagées des restaurants', 'Une infrastructure visible pour les programmes de développement durable'] }
    },
    wiz: {
      title: 'Lancer une demande qualifiée', intro: 'Trois étapes courtes. Nous transmettons votre demande à la bonne équipe.',
      steps: ['Vous', 'Projet', 'Contact'], step: 'Étape', next: 'Continuer', back: 'Retour', pick: 'Veuillez choisir une option.',
      roles: {
        municipality: { t: 'Collectivité ou autorité publique', d: 'Logement, bâtiments publics, quartiers' },
        developer: { t: 'Promoteur ou propriétaire', d: 'Résidentiel, tertiaire, mixte' },
        distributor: { t: 'Distributeur', d: 'Ventes régionales et soutien aux projets' },
        manufacturer: { t: 'Fabricant', d: 'Fabrication, composants, assemblage' },
        partner: { t: 'Partenaire d’ingénierie ou technologique', d: 'Commande, IoT, logiciel, ville intelligente' }
      },
      q: {
        sites: 'Combien de bâtiments ou de sites ?', sitesOpts: ['1', '2–10', 'Plus de 10', 'Pas encore connu'],
        stage: 'Stade du projet', stageOpts: ['Idée initiale', 'Programmation / conception', 'Appel d’offres ou achat', 'En construction'],
        streams: 'Flux concernés', streamsOpts: ['Ordures ménagères', 'Emballages', 'Verre', 'Piles / électronique', 'Huiles de cuisson usagées'],
        territory: 'Territoire que vous couvririez', experience: 'Expérience des produits du bâtiment ou des déchets', expOpts: ['Pas encore', 'Un peu', 'Importante'],
        capability: 'Compétence principale', capOpts: ['Fabrication en inox', 'Électronique / commande', 'Assemblage', 'Prototypage'],
        area: 'Domaine d’expertise', areaOpts: ['Capteurs / IoT', 'Électronique de commande', 'Logiciel / données', 'Plateformes de ville intelligente']
      }
    }
  }
};
