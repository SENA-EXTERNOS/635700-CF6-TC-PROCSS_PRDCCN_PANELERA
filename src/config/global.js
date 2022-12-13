export default {
  global: {
    componenteFormativo: 'Cristalización y procedimiento de ajustes',
    descripcionCurso:
      'Se identifican las principales variables que afectan la calidad fisicoquímica, microbiológica y organoléptica de la panela, como producto y proceso que depende de variables adicionales, las cuales algunas requieren control inicial, mientras que otras durante todo el proceso. Asimismo, se aborda la normativa vigente y las medidas consideradas como de las buenas prácticas agrícolas (BPA) y la mejora de equipos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal-1.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Cristalización y tipo de productos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Proceso de concentración de jugo de caña (cocinar jugo)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Trasiego de mieles',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Procedimientos de ajuste',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Cristalización',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Buenas prácticas de manufactura',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Normas sanitarias para la producción de panela',
            hash: 't_2_3',
          },
        ],
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  complementario: [
    {
      tema: 'Trasiego de mieles',
      referencia:
        'Naranjo, J. (2013). Estudio de prefactibilidad para el establecimiento de una planta móvil para panela granulada en el cantón San Miguel, Provincia Bolívar [Proyecto de grado]. Universidad Central del Ecuador.',
      tipo: 'Proyecto de grado',
      link: 'http://www.dspace.uce.edu.ec/handle/25000/2035',
    },
    {
      tema: 'BPM',
      referencia:
        'Ramírez, R., Lucumi, I. & Carbonero, J. (2020). Propuesta de mejora en el proceso de panela aplicando BPM (Buenas prácticas de manufactura) en el Trapiche Cabañita [Proyecto de grado]. Institución Universitaria Antonio José Camacho.',
      tipo: 'Artículo',
      link: 'https://repositorio.uniajc.edu.co/handle/uniajc/305',
    },
  ],
  glosario: [
    {
      termino: 'BPM',
      significado:
        'Conjunto de principios básicos cuyo objetivo es garantizar que los productos se fabriquen en condiciones sanitarias adecuadas y se disminuyan los riesgos inherentes en la producción y distribución.',
    },
    {
      termino: 'Brix',
      significado:
        'Los grados Brix (símbolo °Bx) miden el resultado total de sacarosa diluida en un líquido.',
    },
    {
      termino: 'Decreto',
      significado:
        'Norma jurídica que se publica para regular o sancionar alguna actividad; tiene rango menor que una Ley. ',
    },
    {
      termino: 'Jugo de caña',
      significado:
        'Solución compuesta por materiales de todos los tamaños, desde partículas gruesas como tierra, partículas de bagazo, ceras hasta coloides e iones que pasan a un filtro decantador por gravedad, para la eliminación de materiales extraños e impurezas por los procesos unitarios de sedimentación y flotación.',
    },
    {
      termino: 'Miel hidrolizada',
      significado:
        'Producto natural, de humedad intermedia, denso y viscoso, intermedio en la elaboración de panela, específicamente en la concentración del jugo clarificado de la caña del que no se ha extraído todavía ninguna forma de azúcar. Mediante el tratamiento químico o biológico de esta miel se puede evitar su cristalización, dando lugar a la llamada miel "invertida" que se hidroliza o enriquece con fructosa y glucosa.',
    },
    {
      termino: 'Organoléptica',
      significado:
        'Hace referencia a cualquier propiedad de un alimento u otro producto percibida mediante los sentidos, incluidos su sabor, color, olor y textura.',
    },
    {
      termino: 'Punteo',
      significado:
        'Fase final donde las mieles alcanzan temperaturas superiores a los 100 °C y culmina con el proceso de moldeo donde es necesario contar con un cuarto aislado a los demás procesos, manteniendo al máximo su cuidado con el fin de evitar cualquier contaminación del producto y con ello disminuir su vida útil,  esta área debe estar libre de la presencia de insectos y animales, el agua donde se lavan los utensilios debe cambiarse mínimo cada cuatro horas y se le agrega cal para disminuir la fermentación causada por los residuos orgánicos.',
    },
    {
      termino: 'Sobresaturación',
      significado:
        'La reacción ocurre en la superficie con una velocidad finita y el proceso global consta de dos etapas en serie, la difusional y la interfacial, ninguna de las dos etapas ocurre si la disolución no está sobresaturada.',
    },
    {
      termino: 'Temperatura de almacenamiento',
      significado:
        'Temperatura de almacenamiento: magnitud para medir la energía cinética a la que se mantiene el almacenamiento de la panela, cuando la temperatura llega a 30C se acelera los cambios de color y dureza de las panelas y favorece el crecimiento de hongos en productos de higroscopicidad alta.',
    },
    {
      termino: 'Trasiego',
      significado: 'Cambio de un líquido de un recipiente a otro.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bravo, Á. M. (2018). <i>Implementación de buenas prácticas de manufactura (BPM) en la producción de panela en la empresa Mercafé</i> [Proyecto de grado]. Universidad Autónoma de Occidente. ',
      link: 'https://red.uao.edu.co/bitstream/handle/10614/10142/T07802.pdf',
    },
    {
      referencia:
        'Decreto 1774 de 2004, Por el cual se crea la Comisión Nacional Intersectorial para la Vigilancia de la Calidad de la Panela. 2 de junio de 2004.',
      link: '',
    },
    {
      referencia:
        'Decreto 3075 de 1997. Por la cual se reglamenta parcialmente la Ley 09 de 1979 y se dictan otras disposiciones, en materia de salud. 23 de diciembre de 1997.',
      link: '',
    },
    {
      referencia: 'Díaz, D. (s.f.). Producción de panela. Agrosavia. ',
      link:
        'https://repository.agrosavia.co/bitstream/handle/20.500.12324/29472/26899_14367.pdf?sequence=1',
    },
    {
      referencia:
        'Fiestas, K., Santos, I., Banda, S., Valdiviezo, W. & Arellano, K. (2015). Diseño de una línea de producción de panela granulada. Universidad de Pirhua. ',
      link:
        'https://pirhua.udep.edu.pe/bitstream/handle/11042/2344/4._PYT__Informe_Final__Panela.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Gómez, M., Mesías, M., Delgado, C., Contreras, J., Ubillús, F., Cruz, G. & Morales, F. (2019). Occurrence of acrylamide and other heat-induced compounds in panela: Relationship with physicochemical and antioxidant parameters. <i>Food Chemistry, 301, 125256</i>.',
      link: 'https://doi.org/10.1016/j.foodchem.2019.125256.',
    },
    {
      referencia:
        'García, H. R., Albarracín, L. C., Toscano LaTorre, A., Santana, N., & Insuasty, O. (2007). Guía tecnológica para el manejo integral del sistema productivo de la caña panelera.',
      link: '',
    },
    {
      referencia:
        'Granja, M. & Granja, J. (2013). Producción de panela granulada. San Gerónimo de los Andes Ecuatorianos.',
      link: '',
    },
    {
      referencia:
        'Mendieta, O., García, M., Peña, A. & Rodríguez, J. (2016). <i>Las buenas prácticas de manufactura en la producción de panela</i>. Corpoica. ',
      link: 'http://hdl.handle.net/20.500.12324/34303',
    },
    {
      referencia:
        'Montenegro, D. (2015). <i>Manual de buenas prácticas de manufactura en la producción de panela de caña, en la vereda Yumbito, municipio el Tambo Cauca</i> [Proyecto de grado]. Universidad de San Buenaventura. ',
      link:
        'https://bibliotecadigital.usb.edu.co/entities/publication/cb76b3b0-e078-4398-be79-f9bc724462a2',
    },
    {
      referencia:
        'Osorio, G. (2007). <i>Buenas prácticas agrícolas -BPA- y buenas prácticas de manufactura en la producción de caña y panela -BPM</i>. Corpoica ',
      link:
        'https://www.unipamplona.edu.co/unipamplona/portalIG/home_4/mod_virtuales/modulo1/Manual.pdf',
    },
    {
      referencia:
        'Prada, L. (2002). <i>Mejoramiento en la calidad de miel y panela</i>. Corpoica, Regional 7',
      link:
        'https://repository.agrosavia.co/bitstream/handle/20.500.12324/17691/42264_46021.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Resolución 779 de 2006. [Ministerio de la Protección Social]. Por la cual se establece el reglamento técnico sobre los requisitos sanitarios que se deben cumplir en la producción y comercialización de la panela para consumo humano y se dictan otras disposiciones. Marzo 17 de 2006.',
      link: '',
    },
    {
      referencia:
        'Resolución 2674 de 2013. [Ministerio de Salud y Protección Social]. Por la cual se establecen los requisitos sanitarios que deben cumplir las personas naturales y/o jurídicas que ejercen actividades de fabricación, procesamiento, preparación, envase, almacenamiento, transporte, distribución y comercialización de alimentos y materias primas de alimentos y los requisitos para la notificación, permiso o registro sanitario de los alimentos, según el riesgo en salud pública, con el fin de proteger la vida y la salud de las personas.',
      link: '',
    },
    {
      referencia:
        'Suárez, J. & Vidal, L. (2013). <i>Hidrólisis ácida y concentración por vaporación de jugo de caña panelera (variedad cc 8592) para la elaboración de miel invertida</i> [Proyecto de grado]. Universidad del Valle. ',
      link:
        'ibliotecadigital.univalle.edu.co/bitstream/handle/10893/17660/0478121.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Suárez Guevara, J. A., & Vidal Hurtado, L. J. (2013). Hidrólisis ácida y concentración por vaporación de jugo de caña panelera (variedad cc 8592) para la eleboración de miel invertida.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
