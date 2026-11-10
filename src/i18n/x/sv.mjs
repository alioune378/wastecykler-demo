export default {
  meta: { demoBanner: 'Privat demo · framtagen av Dalal Technologies' },
  status: { proposed: 'Föreslaget initiativ', document: 'Officiellt dokument', historical: 'Historiskt underlag', authentic: 'Autentisk hårdvara' },
  alt: {
    'city-waterfront': 'Konceptuell AI-genererad bild av ett bostadsområde vid vattnet i skymningen',
    'city-dusk': 'Konceptuell AI-genererad bild av en strandpromenad med blandad bebyggelse i solnedgången',
    'city-campus': 'Konceptuell AI-genererad bild av moderna byggnader och anlagda gångvägar',
    'city-plaza': 'Konceptuell AI-genererad bild av en stadssilhuett över vattnet i skymningen',
    'city-towers': 'Konceptuell AI-genererad bild av gröna terrasserade torn under blå timmen'
  },
  v2: {
    facts: ['Dokumenterade upplägg med 2–6 fraktioner', 'Inkast i rostfritt stål för byggnader', 'Separat insamling av använd olja', 'Granskat turkiskt patentdokument'],
    anatomyTitle: 'Anatomin hos ett installerat inkast',
    anatomyIntro: 'En autentisk Wastecykler-enhet. Välj en punkt för att se vad varje del gör.',
    spots: [
      { t: 'Front i rostfritt stål', d: 'En plant väggmonterad ram som integrerar inkastet i byggnadens ytskikt.' },
      { t: 'Inkastöppning', d: 'Här lämnas avfallet efter att fraktionen valts.' },
      { t: 'Systempanel', d: 'Märkt ”Atık ayrıştırma sistemi” (avfallssorteringssystem), med en statusindikator.' },
      { t: 'Fraktionsknappar', d: 'En färgad knapp per fraktion: hushållsavfall, plast-papper-metall, glas samt batterier & elektronik.' },
      { t: 'Tryckta instruktioner', d: 'Steg-för-steg-anvisningar tryckta direkt på panelen.' }
    ],
    compareTitle: 'Blandad insamling eller sortering vid källan',
    mixed: { t: 'Blandad insamling', list: ['Allt avfall hamnar i ett kärl eller schakt', 'Återvinningsbart blandas med hushållsavfall', 'Eventuell sortering sker senare, någon annanstans'] },
    source: { t: 'Sortering vid källan', list: ['Användaren väljer fraktion vid inkastet', 'Varje fraktion hålls i ett eget fack', 'Insamlingen organiseras fraktion för fraktion'] },
    compareNote: 'Illustrativ jämförelse av två arbetssätt — inte ett uppmätt resultat.',
    schematic: 'Schematisk illustration',
    sectorsTitle: 'Byggt för organisationerna som formar städer',
    evidenceTitle: 'Underlag, tydligt märkt',
    evidenceIntro: 'Varje objekt är märkt som autentisk hårdvara, historiskt underlag, officiellt dokument eller föreslaget initiativ.',
    engTitle: 'Teknisk kompetens som syns i historisk hårdvara',
    eng: [
      { t: 'Tillverkning i rostfritt stål', d: 'Plana fronter och gångjärnsförsedda inkastluckor.' },
      { t: 'Styrelektronik', d: 'Styrkort, reläer och plintkoppling i ett eget skåp.' },
      { t: 'Design för flera fraktioner', d: 'Dokumenterade upplägg med 2, 3, 4 och 6 fraktioner.' },
      { t: 'Design av användargränssnitt', d: 'Färgkodade knappar, piktogram och tryckta instruktioner.' }
    ],
    expTitle: 'Internationell expansion',
    exp: ['Tillverkningspartnerskap', 'Regional distribution', 'Teknikintegration — sensorer och mjukvara', 'Pilotprojekt på nya marknader'],
    expNote: 'Föreslagna initiativ — inte befintliga avtal.',
    problem: 'Infrastrukturutmaningen', tech: 'Relevant Wastecykler-teknik', value: 'Möjligt operativt värde',
    valueNote: 'Det möjliga värdet beror på varje projekt. Inga resultat påstås.',
    explore: 'Utforska sektorn',
    docOnRequest: 'På begäran',
    comingSoon: 'Kommer snart',
    sectors: {
      municipalities: { problem: 'Hushållsavfall når ofta insamlingen osorterat, vilket gör återvinningsprogram svårare att driva.', value: ['Renare, försorterade fraktioner för insamlingen', 'En synlig sorteringspunkt i varje byggnad', 'En pilotklar väg före bredare utrullning'] },
      residential: { problem: 'Boende bär avfall till gemensamma kärl, och sorteringen beror på utrymme och vanor.', value: ['Sortering på varje våningsplan, inbyggd i huset', 'Färre blandade kärl i gemensamma utrymmen', 'Tydlig märkning som gör rätt val enkelt'] },
      commercial: { problem: 'Många hyresgäster delar ett avfallssystem, och restauranger tillför använd frityrolja.', value: ['Separata fraktioner i gemensam infrastruktur', 'Egen insamling av använd olja för restauranger', 'Enklare städ- och servicerutiner'] },
      healthcare: { problem: 'Kontor, kök och personalbostäder ger vardagsavfall vid sidan av sjukhusets kliniska verksamhet.', value: ['Separerade icke-kliniska fraktioner i kontor, kök och personalutrymmen', 'Använd köksolja hålls borta från avloppet', 'Vardagsavfall hanteras skilt från kliniska processer'] },
      universities: { problem: 'Studentboenden och matsalar ger blandat avfall i många byggnader med hög omsättning av användare.', value: ['Enhetliga sorteringspunkter i boenden och gemensamma byggnader', 'Insamling av använd olja från matsalar', 'Synlig infrastruktur för hållbarhetsprogram'] }
    },
    wiz: {
      title: 'Starta en kvalificerad förfrågan', intro: 'Tre korta steg. Vi skickar din förfrågan till rätt team.',
      steps: ['Du', 'Projekt', 'Kontakt'], step: 'Steg', next: 'Fortsätt', back: 'Tillbaka', pick: 'Välj ett alternativ.',
      roles: {
        municipality: { t: 'Kommun eller myndighet', d: 'Bostäder, offentliga byggnader, stadsdelar' },
        developer: { t: 'Byggherre eller fastighetsägare', d: 'Bostäder, kommersiellt, blandat' },
        distributor: { t: 'Distributör', d: 'Regional försäljning och projektstöd' },
        manufacturer: { t: 'Tillverkare', d: 'Tillverkning, komponenter, montering' },
        partner: { t: 'Teknik- eller ingenjörspartner', d: 'Styrning, IoT, mjukvara, smart stad' }
      },
      q: {
        sites: 'Hur många byggnader eller platser?', sitesOpts: ['1', '2–10', 'Fler än 10', 'Ännu okänt'],
        stage: 'Projektfas', stageOpts: ['Tidig idé', 'Planering / projektering', 'Upphandling', 'Under byggnation'],
        streams: 'Fraktioner av intresse', streamsOpts: ['Hushållsavfall', 'Förpackningar', 'Glas', 'Batterier / elektronik', 'Använd frityrolja'],
        territory: 'Område du skulle täcka', experience: 'Erfarenhet av bygg- eller avfallsprodukter', expOpts: ['Ingen ännu', 'Viss', 'Omfattande'],
        capability: 'Huvudsaklig kompetens', capOpts: ['Tillverkning i rostfritt stål', 'Elektronik / styrning', 'Montering', 'Prototyper'],
        area: 'Expertområde', areaOpts: ['Sensorer / IoT', 'Styrelektronik', 'Mjukvara / data', 'Smart stad-plattformar']
      }
    }
  }
};
