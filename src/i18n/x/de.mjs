export default {
  meta: { demoBanner: 'Private Demo · erstellt von Dalal Technologies' },
  status: { proposed: 'Vorgeschlagene Initiative', document: 'Offizielles Dokument', historical: 'Historischer Nachweis', authentic: 'Originale Hardware' },
  alt: {
    'city-waterfront': 'Konzeptionelles KI-generiertes Bild eines Wohnviertels am Wasser in der Abenddämmerung',
    'city-dusk': 'Konzeptionelles KI-generiertes Bild einer gemischt genutzten Uferpromenade bei Sonnenuntergang',
    'city-campus': 'Konzeptionelles KI-generiertes Bild moderner Gebäude und begrünter Wege',
    'city-plaza': 'Konzeptionelles KI-generiertes Bild einer Skyline über dem Wasser in der Abenddämmerung',
    'city-towers': 'Konzeptionelles KI-generiertes Bild terrassierter, begrünter Türme zur blauen Stunde'
  },
  v2: {
    facts: ['Dokumentierte Layouts mit 2–6 Fraktionen', 'Gebäudeeinwürfe aus Edelstahl', 'Separate Altölsammlung', 'Geprüftes türkisches Patentdokument'],
    anatomyTitle: 'Anatomie eines installierten Einwurfs',
    anatomyIntro: 'Eine originale Wastecykler-Einheit. Wählen Sie einen Punkt, um die Funktion jedes Teils zu sehen.',
    spots: [
      { t: 'Edelstahlfront', d: 'Ein flächenbündiger Wandrahmen, der den Einwurf in die Gebäudeoberfläche integriert.' },
      { t: 'Einwurföffnung', d: 'Hier wird der Abfall nach Auswahl der Fraktion eingeworfen.' },
      { t: 'Systempanel', d: 'Beschriftet mit „Atık ayrıştırma sistemi“ (Abfalltrennsystem), mit Statusanzeige.' },
      { t: 'Fraktionstasten', d: 'Eine farbige Taste je Fraktion: Restmüll, Kunststoff-Papier-Metall, Glas sowie Batterien & Elektronik.' },
      { t: 'Aufgedruckte Anleitung', d: 'Schritt-für-Schritt-Hinweise direkt auf dem Panel.' }
    ],
    compareTitle: 'Gemischte Sammlung vs. Trennung an der Quelle',
    mixed: { t: 'Gemischte Sammlung', list: ['Aller Abfall landet in einer Tonne oder einem Schacht', 'Wertstoffe vermischen sich mit Restmüll', 'Sortiert wird – wenn überhaupt – später, anderswo'] },
    source: { t: 'Trennung an der Quelle', list: ['Die Nutzer wählen die Fraktion am Einwurf', 'Jede Fraktion bleibt in ihrem eigenen Fach', 'Die Abholung erfolgt Fraktion für Fraktion'] },
    compareNote: 'Illustrativer Vergleich zweier Ansätze – kein gemessenes Ergebnis.',
    schematic: 'Schematische Darstellung',
    sectorsTitle: 'Für die Organisationen, die Städte gestalten',
    evidenceTitle: 'Nachweise, klar gekennzeichnet',
    evidenceIntro: 'Jedes Element ist als originale Hardware, historischer Nachweis, offizielles Dokument oder vorgeschlagene Initiative gekennzeichnet.',
    engTitle: 'Ingenieurkompetenzen, belegt durch historische Hardware',
    eng: [
      { t: 'Edelstahlfertigung', d: 'Flächenbündige Fronten und klappbare Einwurftüren.' },
      { t: 'Steuerungselektronik', d: 'Steuerplatine, Relais und Klemmenverdrahtung in einem eigenen Schaltschrank.' },
      { t: 'Mehrfraktionen-Trennerdesign', d: 'Dokumentierte Layouts mit 2, 3, 4 und 6 Fraktionen.' },
      { t: 'Bedienoberflächen-Design', d: 'Farbcodierte Tasten, Piktogramme und aufgedruckte Anleitungen.' }
    ],
    expTitle: 'Internationale Expansion',
    exp: ['Fertigungspartnerschaften', 'Regionaler Vertrieb', 'Technologieintegration – Sensorik und Software', 'Pilotprojekte in neuen Märkten'],
    expNote: 'Vorgeschlagene Initiativen – keine bestehenden Vereinbarungen.',
    problem: 'Die Infrastruktur-Herausforderung', tech: 'Relevante Wastecykler-Technologie', value: 'Möglicher betrieblicher Nutzen',
    valueNote: 'Der mögliche Nutzen hängt vom jeweiligen Projekt ab. Es werden keine Ergebnisse behauptet.',
    explore: 'Diesen Sektor entdecken',
    docOnRequest: 'Auf Anfrage',
    comingSoon: 'Demnächst',
    sectors: {
      municipalities: { problem: 'Haushaltsabfälle erreichen die Entsorgung oft unsortiert – das erschwert Recyclingprogramme.', value: ['Sauberere, vorgetrennte Fraktionen für die Entsorgung', 'Ein sichtbarer Trennpunkt in jedem Gebäude', 'Ein pilotfähiger Weg vor einem breiteren Rollout'] },
      residential: { problem: 'Bewohner tragen Abfall zu gemeinsamen Tonnen; die Trennung hängt von Platz und Alltagsgewohnheiten ab.', value: ['Trennung auf jeder Etage, ins Gebäude geplant', 'Weniger Mischtonnen in Gemeinschaftsbereichen', 'Klare Beschriftung, die die richtige Wahl leicht macht'] },
      commercial: { problem: 'Viele Mieter teilen ein Abfallsystem, und die Gastronomie bringt gebrauchtes Speiseöl hinzu.', value: ['Getrennte Fraktionen in gemeinsamer Infrastruktur', 'Eigene Altölsammlung für die Gastronomie', 'Einfachere Reinigungs- und Serviceabläufe'] },
      healthcare: { problem: 'Büros, Küchen und Personalwohnungen erzeugen Alltagsabfälle neben dem klinischen Betrieb.', value: ['Getrennte nicht-klinische Fraktionen in Büros, Küchen und Personalbereichen', 'Küchenaltöl bleibt aus dem Abwasser', 'Alltagsabfälle getrennt von klinischen Prozessen'] },
      universities: { problem: 'Wohnheime und Mensen erzeugen Mischabfall in vielen Gebäuden mit hoher Nutzerfluktuation.', value: ['Einheitliche Trennpunkte in Wohnheimen und gemeinsamen Gebäuden', 'Altölsammlung aus Mensen', 'Sichtbare Infrastruktur für Nachhaltigkeitsprogramme'] }
    },
    wiz: {
      title: 'Qualifizierte Anfrage starten', intro: 'Drei kurze Schritte. Wir leiten Ihre Anfrage an das richtige Team.',
      steps: ['Sie', 'Projekt', 'Kontakt'], step: 'Schritt', next: 'Weiter', back: 'Zurück', pick: 'Bitte wählen Sie eine Option.',
      roles: {
        municipality: { t: 'Kommune oder Behörde', d: 'Wohnungsbau, öffentliche Gebäude, Quartiere' },
        developer: { t: 'Projektentwickler oder Eigentümer', d: 'Wohnen, Gewerbe, gemischte Nutzung' },
        distributor: { t: 'Vertriebspartner', d: 'Regionaler Vertrieb und Projektunterstützung' },
        manufacturer: { t: 'Hersteller', d: 'Fertigung, Komponenten, Montage' },
        partner: { t: 'Engineering- oder Technologiepartner', d: 'Steuerung, IoT, Software, Smart City' }
      },
      q: {
        sites: 'Wie viele Gebäude oder Standorte?', sitesOpts: ['1', '2–10', 'Mehr als 10', 'Noch unbekannt'],
        stage: 'Projektphase', stageOpts: ['Erste Idee', 'Planung / Entwurf', 'Ausschreibung oder Beschaffung', 'Im Bau'],
        streams: 'Interessierende Fraktionen', streamsOpts: ['Restmüll', 'Verpackungen', 'Glas', 'Batterien / Elektronik', 'Gebrauchtes Speiseöl'],
        territory: 'Gebiet, das Sie abdecken würden', experience: 'Erfahrung mit Bau- oder Abfallprodukten', expOpts: ['Noch keine', 'Etwas', 'Umfangreich'],
        capability: 'Hauptkompetenz', capOpts: ['Edelstahlfertigung', 'Elektronik / Steuerung', 'Montage', 'Prototyping'],
        area: 'Fachgebiet', areaOpts: ['Sensorik / IoT', 'Steuerungselektronik', 'Software / Daten', 'Smart-City-Plattformen']
      }
    }
  }
};
