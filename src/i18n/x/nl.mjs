export default {
  meta: { demoBanner: 'Privédemo · opgesteld door Dalal Technologies' },
  status: { proposed: 'Voorgesteld initiatief', document: 'Officieel document', historical: 'Historisch bewijs', authentic: 'Authentieke hardware' },
  alt: {
    'city-waterfront': 'Conceptuele AI-gegenereerde afbeelding van een woonwijk aan het water bij schemering',
    'city-dusk': 'Conceptuele AI-gegenereerde afbeelding van een gemengde boulevard aan het water bij zonsondergang',
    'city-campus': 'Conceptuele AI-gegenereerde afbeelding van moderne gebouwen en aangelegde paden',
    'city-plaza': 'Conceptuele AI-gegenereerde afbeelding van een skyline over het water bij schemering',
    'city-towers': 'Conceptuele AI-gegenereerde afbeelding van groene terrastorens tijdens het blauwe uur'
  },
  v2: {
    facts: ['Gedocumenteerde opstellingen met 2–6 stromen', 'Roestvrijstalen inwerpopeningen in gebouwen', 'Aparte inzameling van gebruikte olie', 'Onderzocht Turks octrooidocument'],
    anatomyTitle: 'Anatomie van een geïnstalleerde inwerpopening',
    anatomyIntro: 'Een authentieke Wastecykler-unit. Kies een punt om te zien wat elk onderdeel doet.',
    spots: [
      { t: 'Roestvrijstalen frontplaat', d: 'Een vlak ingebouwd wandframe dat de inwerpopening in de afwerking van het gebouw opneemt.' },
      { t: 'Inwerpopening', d: 'Hier wordt het afval ingeworpen nadat de stroom is gekozen.' },
      { t: 'Systeempaneel', d: 'Met het opschrift “Atık ayrıştırma sistemi” (afvalscheidingssysteem) en een statuslampje.' },
      { t: 'Stroomknoppen', d: 'Eén gekleurde knop per stroom: huishoudelijk afval, plastic-papier-metaal, glas, en batterijen & elektronica.' },
      { t: 'Gedrukte instructies', d: 'Stapsgewijze gebruiksinstructies direct op het paneel gedrukt.' }
    ],
    compareTitle: 'Gemengde inzameling vs scheiding aan de bron',
    mixed: { t: 'Gemengde inzameling', list: ['Al het afval gaat in één bak of stortkoker', 'Recyclebaar materiaal raakt vermengd met restafval', 'Sorteren gebeurt later, elders'] },
    source: { t: 'Scheiding aan de bron', list: ['De gebruiker kiest een stroom bij de inwerpopening', 'Elke stroom blijft in een eigen compartiment', 'Inzameling wordt per stroom georganiseerd'] },
    compareNote: 'Illustratieve vergelijking van twee benaderingen — geen gemeten resultaat.',
    schematic: 'Schematische weergave',
    sectorsTitle: 'Gebouwd voor de organisaties die steden vormgeven',
    evidenceTitle: 'Bewijs, duidelijk gelabeld',
    evidenceIntro: 'Elk item is gemarkeerd als authentieke hardware, historisch bewijs, officieel document of voorgesteld initiatief.',
    engTitle: 'Technische vaardigheden zichtbaar in historische hardware',
    eng: [
      { t: 'Roestvrijstaalbewerking', d: 'Vlakke frontplaten en scharnierende inwerpdeuren.' },
      { t: 'Besturingselektronica', d: 'Besturingsprint, relais en klembedrading in een eigen kast.' },
      { t: 'Ontwerp voor meerdere stromen', d: 'Gedocumenteerde opstellingen met 2, 3, 4 en 6 stromen.' },
      { t: 'Ontwerp van de gebruikersinterface', d: 'Kleurgecodeerde knoppen, pictogrammen en gedrukte instructies.' }
    ],
    expTitle: 'Internationale groei',
    exp: ['Productiepartnerschappen', 'Regionale distributie', 'Technologie-integratie — sensoren en software', 'Pilotprojecten in nieuwe markten'],
    expNote: 'Voorgestelde initiatieven — geen bestaande overeenkomsten.',
    problem: 'De infrastructuuruitdaging', tech: 'Relevante Wastecykler-technologie', value: 'Mogelijke operationele waarde',
    valueNote: 'De mogelijke waarde hangt af van elk project. Er worden geen resultaten geclaimd.',
    explore: 'Bekijk deze sector',
    docOnRequest: 'Op aanvraag',
    comingSoon: 'Binnenkort',
    sectors: {
      municipalities: { problem: 'Huishoudelijk afval bereikt inzameldiensten vaak ongescheiden, wat recyclingprogramma’s lastiger maakt.', value: ['Schonere, vooraf gescheiden stromen voor inzameldiensten', 'Een zichtbaar scheidingspunt in elk gebouw', 'Een pilotklare route vóór bredere uitrol'] },
      residential: { problem: 'Bewoners brengen afval naar gedeelde bakken; scheiden hangt af van beschikbare ruimte en gewoonten.', value: ['Scheiding op elke verdieping, ingebouwd in het ontwerp', 'Minder gemengde bakken in gemeenschappelijke ruimtes', 'Duidelijke labels die de juiste keuze makkelijk maken'] },
      commercial: { problem: 'Veel huurders delen één afvalsysteem, en horeca voegt gebruikte frituurolie toe.', value: ['Gescheiden stromen binnen gedeelde infrastructuur', 'Aparte inzameling van gebruikte olie voor horeca', 'Eenvoudigere schoonmaak- en serviceroutines'] },
      healthcare: { problem: 'Kantoren, keukens en personeelshuisvesting produceren dagelijks afval naast de klinische activiteit.', value: ['Gescheiden niet-klinische stromen in kantoren, keukens en personeelsruimtes', 'Gebruikte keukenolie uit het riool houden', 'Dagelijks afval apart van klinische processen'] },
      universities: { problem: 'Studentenhuizen en mensa’s produceren gemengd afval in veel gebouwen met wisselende gebruikers.', value: ['Consistente scheidingspunten in studentenhuizen en gedeelde gebouwen', 'Inzameling van gebruikte olie uit mensa’s', 'Zichtbare infrastructuur voor duurzaamheidsprogramma’s'] }
    },
    wiz: {
      title: 'Start een gekwalificeerde aanvraag', intro: 'Drie korte stappen. Wij sturen uw aanvraag naar het juiste team.',
      steps: ['U', 'Project', 'Contact'], step: 'Stap', next: 'Verder', back: 'Terug', pick: 'Kies een optie.',
      roles: {
        municipality: { t: 'Gemeente of overheid', d: 'Woningbouw, openbare gebouwen, wijken' },
        developer: { t: 'Ontwikkelaar of vastgoedeigenaar', d: 'Wonen, commercieel, gemengd' },
        distributor: { t: 'Distributeur', d: 'Regionale verkoop en projectondersteuning' },
        manufacturer: { t: 'Fabrikant', d: 'Productie, componenten, assemblage' },
        partner: { t: 'Engineering- of technologiepartner', d: 'Besturing, IoT, software, smart city' }
      },
      q: {
        sites: 'Hoeveel gebouwen of locaties?', sitesOpts: ['1', '2–10', 'Meer dan 10', 'Nog onbekend'],
        stage: 'Projectfase', stageOpts: ['Eerste idee', 'Planning / ontwerp', 'Aanbesteding of inkoop', 'In aanbouw'],
        streams: 'Stromen van interesse', streamsOpts: ['Huishoudelijk afval', 'Verpakkingen', 'Glas', 'Batterijen / elektronica', 'Gebruikte frituurolie'],
        territory: 'Gebied dat u zou bedienen', experience: 'Ervaring met bouw- of afvalproducten', expOpts: ['Nog geen', 'Enige', 'Uitgebreid'],
        capability: 'Belangrijkste vaardigheid', capOpts: ['Roestvrijstaalbewerking', 'Elektronica / besturing', 'Assemblage', 'Prototyping'],
        area: 'Vakgebied', areaOpts: ['Sensoren / IoT', 'Besturingselektronica', 'Software / data', 'Smart-cityplatforms']
      }
    }
  }
};
