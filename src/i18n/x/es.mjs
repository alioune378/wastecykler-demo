export default {
  meta: { demoBanner: 'Demo privada · preparada por Dalal Technologies' },
  status: { proposed: 'Iniciativa propuesta', document: 'Documento oficial', historical: 'Evidencia histórica', authentic: 'Equipo auténtico' },
  alt: {
    'city-waterfront': 'Imagen conceptual generada con IA de un barrio residencial junto al agua al anochecer',
    'city-dusk': 'Imagen conceptual generada con IA de un paseo marítimo de uso mixto al atardecer',
    'city-campus': 'Imagen conceptual generada con IA de edificios modernos y senderos ajardinados',
    'city-plaza': 'Imagen conceptual generada con IA del perfil de una ciudad sobre el agua al anochecer',
    'city-towers': 'Imagen conceptual generada con IA de torres verdes escalonadas en la hora azul'
  },
  v2: {
    facts: ['Configuraciones de 2 a 6 fracciones documentadas', 'Bocas de vertido de acero inoxidable', 'Recogida específica de aceite usado', 'Documento de patente turca examinado'],
    anatomyTitle: 'Anatomía de una boca de vertido instalada',
    anatomyIntro: 'Una unidad Wastecykler auténtica. Seleccione un punto para ver qué hace cada parte.',
    spots: [
      { t: 'Frontal de acero inoxidable', d: 'Un marco empotrado en la pared que integra la boca en el acabado del edificio.' },
      { t: 'Abertura de vertido', d: 'Aquí se deposita el residuo tras seleccionar la fracción.' },
      { t: 'Panel del sistema', d: 'Rotulado «Atık ayrıştırma sistemi» (sistema de separación de residuos), con un indicador de estado.' },
      { t: 'Botones de fracción', d: 'Un botón de color por fracción: residuo doméstico, plástico-papel-metal, vidrio, y pilas y electrónica.' },
      { t: 'Instrucciones impresas', d: 'Guía de uso paso a paso impresa directamente en el panel.' }
    ],
    compareTitle: 'Recogida mezclada frente a separación en origen',
    mixed: { t: 'Recogida mezclada', list: ['Todo el residuo va a un solo contenedor o bajante', 'Los reciclables se mezclan con el residuo doméstico', 'La clasificación, si la hay, se hace después y en otro lugar'] },
    source: { t: 'Separación en origen', list: ['El usuario elige la fracción en la boca de vertido', 'Cada fracción permanece en su compartimento', 'La recogida se organiza fracción por fracción'] },
    compareNote: 'Comparación ilustrativa de dos enfoques — no es un resultado medido.',
    schematic: 'Ilustración esquemática',
    sectorsTitle: 'Pensado para las organizaciones que dan forma a las ciudades',
    evidenceTitle: 'Evidencias, claramente identificadas',
    evidenceIntro: 'Cada elemento está marcado como equipo auténtico, evidencia histórica, documento oficial o iniciativa propuesta.',
    engTitle: 'Capacidades de ingeniería demostradas en equipos históricos',
    eng: [
      { t: 'Fabricación en acero inoxidable', d: 'Frontales empotrados y compuertas de vertido con bisagra.' },
      { t: 'Electrónica de control', d: 'Placa de control, relés y cableado de bornes en un armario dedicado.' },
      { t: 'Diseño de separador multifracción', d: 'Configuraciones documentadas de 2, 3, 4 y 6 fracciones.' },
      { t: 'Diseño de la interfaz de usuario', d: 'Botones con código de color, pictogramas e instrucciones impresas.' }
    ],
    expTitle: 'Expansión internacional',
    exp: ['Alianzas de fabricación', 'Distribución regional', 'Integración tecnológica — sensores y software', 'Proyectos piloto en nuevos mercados'],
    expNote: 'Iniciativas propuestas — no acuerdos existentes.',
    problem: 'El reto de infraestructura', tech: 'Tecnología Wastecykler relacionada', value: 'Valor operativo potencial',
    valueNote: 'El valor potencial depende de cada proyecto. No se afirman resultados.',
    explore: 'Explorar este sector',
    docOnRequest: 'Disponible bajo petición',
    comingSoon: 'Próximamente',
    sectors: {
      municipalities: { problem: 'El residuo doméstico suele llegar sin separar a los servicios de recogida, lo que dificulta los programas de reciclaje.', value: ['Fracciones más limpias y separadas en origen para la recogida', 'Un punto de separación visible en cada edificio', 'Una vía lista para piloto antes de un despliegue amplio'] },
      residential: { problem: 'Los vecinos llevan el residuo a contenedores comunes; la separación depende del espacio y de los hábitos.', value: ['Separación en cada planta, integrada en el edificio', 'Menos contenedores mezclados en zonas comunes', 'Señalización clara que facilita la elección correcta'] },
      commercial: { problem: 'Muchos inquilinos comparten un mismo sistema de residuos y la restauración añade aceite de cocina usado.', value: ['Fracciones separadas dentro de una infraestructura compartida', 'Recogida específica de aceite usado para restauración', 'Rutinas de limpieza y servicio más sencillas'] },
      healthcare: { problem: 'Oficinas, cocinas y residencias del personal generan residuos cotidianos junto a la actividad clínica del hospital.', value: ['Fracciones no clínicas separadas en oficinas, cocinas y zonas del personal', 'El aceite de cocina usado fuera de los desagües', 'Residuo cotidiano gestionado aparte de los procesos clínicos'] },
      universities: { problem: 'Residencias y comedores generan residuo mezclado en muchos edificios con gran rotación de usuarios.', value: ['Puntos de separación homogéneos en residencias y edificios comunes', 'Recogida de aceite usado de los comedores', 'Infraestructura visible para los programas de sostenibilidad'] }
    },
    wiz: {
      title: 'Iniciar una consulta cualificada', intro: 'Tres pasos breves. Dirigimos su solicitud al equipo adecuado.',
      steps: ['Usted', 'Proyecto', 'Contacto'], step: 'Paso', next: 'Continuar', back: 'Atrás', pick: 'Elija una opción.',
      roles: {
        municipality: { t: 'Ayuntamiento o administración pública', d: 'Vivienda, edificios públicos, distritos' },
        developer: { t: 'Promotor o propietario', d: 'Residencial, comercial, uso mixto' },
        distributor: { t: 'Distribuidor', d: 'Ventas regionales y apoyo a proyectos' },
        manufacturer: { t: 'Fabricante', d: 'Fabricación, componentes, montaje' },
        partner: { t: 'Socio de ingeniería o tecnología', d: 'Control, IoT, software, ciudad inteligente' }
      },
      q: {
        sites: '¿Cuántos edificios o emplazamientos?', sitesOpts: ['1', '2–10', 'Más de 10', 'Aún no se sabe'],
        stage: 'Fase del proyecto', stageOpts: ['Idea inicial', 'Planificación / diseño', 'Licitación o compra', 'En construcción'],
        streams: 'Fracciones de interés', streamsOpts: ['Residuo doméstico', 'Envases', 'Vidrio', 'Pilas / electrónica', 'Aceite de cocina usado'],
        territory: 'Territorio que cubriría', experience: 'Experiencia con productos de construcción o residuos', expOpts: ['Ninguna aún', 'Algo', 'Amplia'],
        capability: 'Capacidad principal', capOpts: ['Fabricación en acero inoxidable', 'Electrónica / control', 'Montaje', 'Prototipado'],
        area: 'Área de especialidad', areaOpts: ['Sensores / IoT', 'Electrónica de control', 'Software / datos', 'Plataformas de ciudad inteligente']
      }
    }
  }
};
