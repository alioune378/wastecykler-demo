// v2 additions & overrides (merged over the base dictionary)
export default {
  meta: { demoBanner: 'Private demo · prepared by Dalal Technologies' },
  status: { proposed: 'Proposed initiative', document: 'Official document', historical: 'Historical evidence', authentic: 'Authentic hardware' },
  alt: {
    'city-waterfront': 'Conceptual AI-generated image of a waterfront residential district at dusk',
    'city-dusk': 'Conceptual AI-generated image of a mixed-use waterfront promenade at sunset',
    'city-campus': 'Conceptual AI-generated image of modern buildings and landscaped paths',
    'city-plaza': 'Conceptual AI-generated image of a city skyline across the water at dusk',
    'city-towers': 'Conceptual AI-generated image of terraced green towers at blue hour'
  },
  v2: {
    facts: ['2–6 stream layouts documented', 'Stainless-steel building inlets', 'Dedicated used-oil collection', 'Examined Turkish patent document'],
    anatomyTitle: 'Anatomy of an installed inlet',
    anatomyIntro: 'An authentic Wastecykler unit. Select a point to see what each part does.',
    spots: [
      { t: 'Stainless-steel faceplate', d: 'A flush, wall-mounted frame that integrates the inlet into the building finish.' },
      { t: 'Inlet opening', d: 'Waste is deposited here after the stream has been selected.' },
      { t: 'System panel', d: 'Labelled “Atık ayrıştırma sistemi” (waste separation system), with a status indicator.' },
      { t: 'Stream buttons', d: 'One coloured button per stream: household waste, plastic-paper-metal, glass, and batteries & electronics.' },
      { t: 'Printed instructions', d: 'Step-by-step usage guidance printed directly on the panel.' }
    ],
    compareTitle: 'Mixed collection vs separation at source',
    mixed: { t: 'Mixed collection', list: ['All waste goes into one bin or chute', 'Recyclables mix with household waste', 'Any sorting happens later, elsewhere'] },
    source: { t: 'Separation at source', list: ['The user selects a stream at the inlet', 'Each stream stays in its own compartment', 'Collection is organised stream by stream'] },
    compareNote: 'Illustrative comparison of two approaches — not a measured result.',
    schematic: 'Schematic illustration',
    sectorsTitle: 'Built for the organisations that shape cities',
    evidenceTitle: 'Evidence, clearly labelled',
    evidenceIntro: 'Every item is marked as authentic hardware, historical evidence, an official document or a proposed initiative.',
    engTitle: 'Engineering capabilities demonstrated in historical hardware',
    eng: [
      { t: 'Stainless-steel fabrication', d: 'Flush faceplates and hinged inlet doors.' },
      { t: 'Control electronics', d: 'Controller board, relays and terminal wiring in a dedicated cabinet.' },
      { t: 'Multi-stream separator design', d: 'Documented 2-, 3-, 4- and 6-stream layouts.' },
      { t: 'User interface design', d: 'Colour-coded buttons, pictograms and printed instructions.' }
    ],
    expTitle: 'International expansion',
    exp: ['Manufacturing partnerships', 'Regional distribution', 'Technology integration — sensors and software', 'Pilot projects in new markets'],
    expNote: 'Proposed initiatives — not existing agreements.',
    problem: 'The infrastructure challenge', tech: 'Relevant Wastecykler technology', value: 'Potential operational value',
    valueNote: 'Potential value depends on each project. No results are claimed.',
    explore: 'Explore this sector',
    docOnRequest: 'Available on request',
    comingSoon: 'Coming soon',
    sectors: {
      municipalities: { problem: 'Household waste often reaches collection services unsorted, which makes recycling programmes harder to run.', value: ['Cleaner, pre-separated streams for collection services', 'A visible separation point inside every building', 'A pilot-ready route before wider rollout'] },
      residential: { problem: 'Residents carry waste to shared bins, and separation depends on available space and daily habits.', value: ['Separation on every floor, designed into the building', 'Fewer mixed bins in shared areas', 'Clear labels that make the right choice easy'] },
      commercial: { problem: 'Many tenants share one waste system, and food outlets add used cooking oil to the mix.', value: ['Separate streams within shared infrastructure', 'Dedicated used-oil collection for food outlets', 'Simpler cleaning and service routines'] },
      healthcare: { problem: 'Offices, kitchens and staff housing generate everyday waste alongside the hospital’s clinical activity.', value: ['Separated non-clinical streams in offices, kitchens and staff areas', 'Kitchen used oil kept out of drains', 'Everyday waste handled apart from clinical processes'] },
      universities: { problem: 'Residences and dining halls produce mixed waste across many buildings with high turnover of users.', value: ['Consistent separation points across residences and shared buildings', 'Used-oil collection from dining halls', 'Visible infrastructure for sustainability programmes'] }
    },
    wiz: {
      title: 'Start a qualified inquiry', intro: 'Three short steps. We route your request to the right team.',
      steps: ['You', 'Project', 'Contact'], step: 'Step', next: 'Continue', back: 'Back', pick: 'Please choose an option.',
      roles: {
        municipality: { t: 'Municipality or public authority', d: 'Housing, public buildings, districts' },
        developer: { t: 'Developer or property owner', d: 'Residential, commercial, mixed-use' },
        distributor: { t: 'Distributor', d: 'Regional sales and project support' },
        manufacturer: { t: 'Manufacturer', d: 'Fabrication, components, assembly' },
        partner: { t: 'Engineering or technology partner', d: 'Controls, IoT, software, smart city' }
      },
      q: {
        sites: 'How many buildings or sites?', sitesOpts: ['1', '2–10', 'More than 10', 'Not yet known'],
        stage: 'Project stage', stageOpts: ['Early idea', 'Planning / design', 'Tender or procurement', 'Under construction'],
        streams: 'Streams of interest', streamsOpts: ['Household waste', 'Packaging', 'Glass', 'Batteries / electronics', 'Used cooking oil'],
        territory: 'Territory you would cover', experience: 'Experience with building or waste products', expOpts: ['None yet', 'Some', 'Extensive'],
        capability: 'Main capability', capOpts: ['Stainless-steel fabrication', 'Electronics / controls', 'Assembly', 'Prototyping'],
        area: 'Area of expertise', areaOpts: ['Sensors / IoT', 'Control electronics', 'Software / data', 'Smart-city platforms']
      }
    }
  }
};
