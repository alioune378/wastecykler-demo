export default {
  v3: {
    consult: 'Begär teknisk rådgivning', consultShort: 'Begär rådgivning', specs: 'Begär tekniska specifikationer', feas: 'Diskutera projektets genomförbarhet', system: 'Utforska systemet',
    heroEyebrow: 'Byggnadsintegrerad avfallssortering',
    spec: [
      { v: '2–6', l: 'Dokumenterade fraktionsupplägg' },
      { v: 'Rostfritt stål', l: 'Väggintegrerade inkast' },
      { v: 'Använd olja', l: 'Egen insamlingspunkt' },
      { v: 'TR 2013 03567 B', l: 'Granskat turkiskt patent' }
    ],
    diagramTitle: 'Inkastet i detalj',
    diagramIntro: 'En autentisk installerad enhet. Välj en markering för att se vad varje del gör.',
    systemTitle: 'Så fungerar systemet',
    systemIntro: 'Sorteringen sker där avfallet slängs — inte efter insamlingen.',
    sys: [
      { t: 'Välj', d: 'Användaren trycker på fraktionens knapp vid det väggintegrerade inkastet.' },
      { t: 'Lämna', d: 'Avfallet läggs i inkastet av rostfritt stål på våningsplanet.' },
      { t: 'Transport', d: 'Det färdas ned genom byggnadens schakt.' },
      { t: 'Sortera', d: 'Längst ned leder separatorn det till facket för vald fraktion.' },
      { t: 'Hämta', d: 'Varje fack töms fraktion för fraktion.' }
    ],
    sysNote: 'Schema baserat på historiska tekniska ritningar. Mått, kapacitet och styrning bekräftas per projekt.',
    withoutT: 'Traditionellt enkelt schakt', without: 'Allt avfall blandas i ett kärl. Eventuell sortering sker efter insamlingen.',
    withT: 'Wastecyklers sortering vid källan', with: 'Fraktionen väljs vid inkastet och varje fraktion hamnar i ett eget fack.',
    buyerTitle: 'Det en seriös köpare behöver veta',
    buyerIntro: 'Raka svar. Där uppgifter ännu behöver verifieras säger vi det.',
    buyer: [
      { q: 'Vilket driftproblem löser det?', a: 'Blandat avfall är svårt att återvinna när det väl lämnat byggnaden. Wastecykler flyttar sorteringen till platsen där avfallet slängs, så varje fraktion hålls separat från första stund.' },
      { q: 'Hur integreras det i en byggnad?', a: 'Väggintegrerade inkast på varje våning ansluts till ett miljörum. Inkastens placering, elmatning, styrskåp och anslutning till schakt eller kärl samordnas med arkitekt och konsulter. Befintliga byggnader bedöms från fall till fall.' },
      { q: 'Vilka konfigurationer, kapaciteter och underhåll gäller?', a: 'Historiska ritningar dokumenterar upplägg med 2, 3, 4 och 6 fraktioner. Kapacitet, mått, underhållsplaner och elkrav lämnas vid en teknisk bedömning och publiceras inte förrän de verifierats.' },
      { q: 'Vad har visats?', a: 'Ett granskat turkiskt patent (TR 2013 03567 B), pilotinstallationer med märkta insamlingsschakt i Türkiye och installerade inkast i rostfritt stål. Varje objekt på webbplatsen är märkt efter typ av underlag.' },
      { q: 'Hur bedöms ett stort projekt eller ett kommunalt program?', a: 'Stegvis: rådgivning, granskning av ritningar och plats, ett konfigurationsförslag och därefter en förstudie eller pilot innan ett bredare åtagande.' }
    ],
    processTitle: 'Från första samtal till projektbeslut',
    processNote: 'Föreslagen arbetsprocess. Omfattning och leveranser avtalas per projekt.',
    outLabel: 'Leverans',
    process: [
      { t: 'Teknisk rådgivning', d: 'Byggnadstyp, våningar, fraktioner och projektfas.', o: 'Omfattningssammanfattning' },
      { t: 'Ritnings- och platsgranskning', d: 'Arkitektritningar, miljörum och installationer.', o: 'Integrationsanteckningar' },
      { t: 'Konfigurationsförslag', d: 'Fraktionsfördelning, inkastens placering och styrning.', o: 'Föreslagen konfiguration' },
      { t: 'Förstudie eller pilot', d: 'Utvärderingskriterier avtalas med kunden före installation.', o: 'Förstudierapport eller pilotplan' },
      { t: 'Leveransplanering', d: 'Tillverkning, installationsordning och underhåll.', o: 'Projektplan' }
    ],
    paths: [
      { k: 'consultation', t: 'Teknisk rådgivning', d: 'Diskutera din byggnad eller ditt program med en ingenjör.' },
      { k: 'specifications', t: 'Tekniska specifikationer', d: 'Begär ritningar och verifierade tekniska data för ditt projekt.' },
      { k: 'feasibility', t: 'Projektets genomförbarhet', d: 'Bedöm ett projekt, en stadsdel eller ett program med flera byggnader.' }
    ],
    intentLabel: 'Vad behöver du?',
    intents: { consultation: 'Teknisk rådgivning', specifications: 'Tekniska specifikationer', feasibility: 'Projektets genomförbarhet', partnership: 'Partnerskap' },
    heritageTitle: 'Teknisk historia',
    heritageIntro: 'Över ett decennium av utveckling, dokumenterad med originalmaterial.',
    heritageLink: 'Hela historien och patentet',
    integTitle: 'Så integreras det',
    sch: {
      municipalities: ['Bostadshus', 'Offentliga byggnader', 'Miljörum i varje byggnad', 'Insamlingsrutt per fraktion'],
      residential: ['Inkast på varje våning', 'Byggnadens schakt', 'Separator', 'Miljörum per fraktion'],
      commercial: ['Hyresgästernas våningar', 'Food court', 'Insamlingspunkt för använd olja', 'Gemensamt miljörum'],
      healthcare: ['Kontor och personalbostäder', 'Kök', 'Insamlingspunkt för använd olja', 'Kliniskt avfall — separat system, ingår inte'],
      universities: ['Studentbostäder', 'Matsal', 'Undervisningsbyggnader', 'Central insamling']
    },
    schNote: 'Schematisk illustration. Upplägg tas fram per projekt.',
    faqTitle: 'Frågor köpare ställer',
    sticky: 'Planerar du ett projekt?',
    legendTitle: 'Typer av underlag'
  }
};
