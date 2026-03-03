export default {
  global: {
    Name:
      'Estrategias para la búsqueda, evaluación y uso ético de la información',
    Description:
      'Este componente formativo desarrolla habilidades para el estudio, comprensión, evaluación y uso ético de la información en entornos digitales. Integra técnicas de lectura y toma de notas, estrategias de búsqueda con filtros y lenguajes controlados, evaluación de fuentes, seguridad digital y correcta citación, promoviendo prácticas académicas responsables y de calidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Espacios, elementos y condiciones para estudiar',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estructura de textos: concepto, tipos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Técnicas para tomar notas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Técnicas para comprensión lectora',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Técnicas para evaluar fuentes de información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Seguridad y privacidad en internet',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Plagio y propiedad intelectual',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Citas, referencias, conceptos y formatos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Actualidad',
      significado:
        'criterio que establece el grado de vigencia de la información según su fecha de publicación o actualización y su pertinencia frente al contexto académico o productivo.',
    },
    {
      termino: 'Autoridad',
      significado:
        'criterio que permite verificar la idoneidad y credibilidad de una fuente de información a partir de la identificación del autor, su formación, experiencia y respaldo institucional.',
    },
    {
      termino: 'Evaluación de fuentes',
      significado:
        'proceso sistemático mediante el cual se analiza la calidad, confiabilidad y pertinencia de las fuentes de información utilizadas.',
    },
    {
      termino: 'Filtros de búsqueda',
      significado:
        'herramientas que permiten delimitar y optimizar los resultados de una búsqueda de información mediante criterios específicos como fecha, tipo de fuente o idioma.',
    },
    {
      termino: 'Idea principal',
      significado:
        'concepto central que sintetiza el contenido esencial de un texto y orienta la comprensión de las ideas secundarias.',
    },
    {
      termino: 'Objetividad',
      significado:
        'principio que evalúa si la información se presenta de manera imparcial, sin influencias ideológicas, comerciales o personales que distorsionen su contenido.',
    },
    {
      termino: 'Plagio',
      significado:
        'práctica indebida que consiste en presentar como propios textos, ideas o producciones ajenas sin el debido reconocimiento del autor.',
    },
    {
      termino: 'Precisión',
      significado:
        'nivel de exactitud y confiabilidad de la información, evidenciado mediante datos verificables, referencias claras y adecuada redacción técnica.',
    },
    {
      termino: 'Propiedad intelectual',
      significado:
        'conjunto de derechos legales que protegen las creaciones del intelecto humano, garantizando el reconocimiento y uso adecuado de las obras.',
    },
    {
      termino: 'Relevancia',
      significado:
        'criterio que determina la correspondencia entre la información consultada y los objetivos de aprendizaje o necesidades del usuario.',
    },
    {
      termino: 'Seguridad digital',
      significado:
        'conjunto de prácticas orientadas a proteger la información personal, los dispositivos y las cuentas en entornos digitales.',
    },
    {
      termino: 'Uso ético de la información',
      significado:
        'aplicación responsable de la información que implica respeto por los derechos de autor, adecuada citación y prevención del plagio.',
    },
  ],
  referencias: [
    {
      referencia:
        'Caulfield, M. A. (2024). <em>Web Literacy for Student Fact-Checkers: The SIFT Method. Pressbooks.</em> (Este método es la evolución moderna para evaluar fuentes digitales más allá del CRAAP).',
      link: '',
    },
    {
      referencia:
        'Centro de Escritura Javeriano. (2024). <em>Normas APA, séptima edición: Guía de citación y referenciación.</em> Pontificia Universidad Javeriana.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (1982, 28 de enero). Ley 23 de 1982, artículo 37. Sobre derechos de autor.',
      link: '',
    },
    {
      referencia:
        'Dirección Nacional de Derechos de Autor. (s.f.). <em>Concepto de propiedad intelectual. Colombia.</em>',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura. (2023). <em>Alfabetización mediática e informacional: currículo para profesores y aprendices.</em> UNESCO.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de la Propiedad Intelectual. (s.f.). <em>¿Qué es la propiedad intelectual?</em> Recuperado de los materiales institucionales de la OMPI.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Omar Alexander Valderrama Espejo',
          cargo: 'Experto temático',
          centro: 'Dirección de Formación Profesional Integral',
        },
        {
          nombre: 'Martha Luz Gutiérrez',
          cargo: 'Experta temática',
          centro: 'Dirección de Formación Profesional Integral',
        },
        {
          nombre: 'Ofelia Corrales',
          cargo: 'Experta temática',
          centro: 'Regional Valle',
        },
        {
          nombre: 'Norma Buenaventura Gisela Alvis',
          cargo: 'Asesora pedagógica',
          centro: 'Centro de Industria y la Construcción - Regional Tolima',
        },
        {
          nombre: 'Solanlly Sánchez Melo',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
