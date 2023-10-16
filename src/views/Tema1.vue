<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Cristalización y tipo de productos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/T1/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La cristalización es un proceso fundamental en la producción de panela, ya que permite transformar el jarabe de azúcar de caña en el producto final. Este proceso, que combina la ciencia y la tradición, implica una serie de cambios físicos y químicos que son esenciales para obtener la textura y el sabor característicos de la panela. Durante la cristalización, las moléculas de azúcar se organizan en estructuras cristalinas, generando un producto final sólido y granulado que es ampliamente utilizado en la gastronomía y la industria alimentaria. Es importante destacar que la calidad del producto final depende en gran medida del proceso de cristalización, así como de factores como la temperatura, el tiempo y la concentración de azúcar. 




    p.mb-5 A continuación, profundice en el proceso de concentración del jugo de caña:


    .row.justify-content-center(data-aos="fade-down").mt-5.mb-5
      .col-10.col-lg-4.w450.col-md-8
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure.img-100
              img.img-100(src="@/assets/curso/temas/T1/img-2.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                .h4.small-text.mt-sm-3.mt-md-0 Recepción de las materias primas
                p.mt-3.tsmall El proceso de recepción de materias primas es de vital importancia para garantizar la calidad del producto final. Durante esta etapa, se lleva a cabo una verificación exhaustiva de la calidad de la caña de azúcar, se eliminan impurezas y se determina su contenido de sacarosa. Además, se aplican rigurosas buenas prácticas de manipulación y almacenamiento para evitar la contaminación y asegurar la seguridad alimentaria. Es fundamental que el proceso de recepción sea eficiente y se cumplan las normas de calidad para obtener panela de alta calidad y satisfacer las demandas de los consumidores. La calidad de la materia prima es un factor determinante en el resultado final del producto, por lo que es necesario realizar una inspección minuciosa para asegurar que cumple con los estándares requeridos. 
      
      .col-10.col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure.img-100
              img.img-100(src="@/assets/curso/temas/T1/img-3.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-md-2
              .row.text-center.px-1.pt-1.mt-1.mt-md-4.mt-lg-3.mt-xl-4.pt-md-0
                .h4.small-text.mt-1.mt-md-0 Lavado y desfibrado de la caña de azúcar
                p.mt-3.tsmall El proceso de lavado y desfibrado de la caña de azúcar antes de la molienda es crucial en la producción de azúcar y panela granulada. El lavado se realiza con el objetivo de eliminar impurezas y residuos de tierra, mientras que el desfibrado busca exponer las fibras de la caña para extraer el jugo de manera más eficiente. Cabe destacar que el lavado puede influir en la calidad del producto final, afectando el contenido de azúcares reductores y el color de la panela granulada. En algunos ingenios, se está implementando una alternativa de limpieza en seco para reducir el consumo de agua y pérdidas de azúcar.
      .col-10.col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure.img-100
              img.img-100(src="@/assets/curso/temas/T1/img-4.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-1.pt-1.mt-1.mt-md-4.mt-lg-3.mt-xl-4.pt-md-0
                .h4.small-text.mt-1.mt-md-0 Molienda de la caña de azúcar
                p.mt-3.tsmall El proceso de extracción de jugo de caña molida es fundamental para obtener un alto rendimiento y evitar atascos en la maquinaria. Para lograr esto, es necesario realizar un ajuste adecuado del molino, teniendo en cuenta el tipo de caña que se está utilizando. La velocidad de molienda es un factor clave en el correcto funcionamiento de la máquina. Controlar esta velocidad garantiza que no se produzcan obstrucciones y permite obtener un mayor rendimiento de extracción. La puesta a punto del molino consiste en determinar la posición óptima de los martillos y la cuchilla central. Esta posición relativa es crucial para lograr las mejores condiciones de trituración y obtener los mejores resultados en el proceso de extracción de jugo. Es importante destacar que este ajuste debe ser realizado por personal capacitado, ya que requiere de conocimientos técnicos específicos. Además, se deben seguir las recomendaciones del fabricante para garantizar un funcionamiento seguro y eficiente de la maquinaria.
    
    ul.lista-ul--color.lista-ul--separador
      li 
        i.fas.fa-leaf
        | <b>Prelimpieza del jugo </b>


    .row.justify-content-center.align-items-center(titulo="").mb-5
      .col-md-5
        figure
          img(src='@/assets/curso/temas/T1/img-5.png', alt='Texto que describa la imagen')

      .col-md-7.mb-4.mb-md-0
        p.mb-4 La prelimpieza de los jugos de caña es una fase primordial en el proceso de clarificación, llevada a cabo con el propósito de eliminar de manera física y a temperatura ambiente el bagacillo, los lodos y cualquier tipo de partículas indeseables o impurezas presentes en el jugo de caña al salir del molino. La presencia de lodos en los jugos, si no son removidos previo al calentamiento en la hornilla, puede ocasionar la formación de costras en el fondo de las pailas recibidora y clarificadora. Durante la etapa de molienda, es necesario retirar varias veces al día las impurezas que flotan, siendo posible someter este material nuevamente al proceso de molienda con el objetivo de recuperar una parte del jugo retenido. 
        .cajon.color-acento-botones.p-4.mb-4.color-morado
          p.mb-0 Durante la limpieza en frío quedan impurezas líquidas que deben ser removidas varias veces al día y devueltas al molino final para recuperar parte del jugo restante. Al realizar las dos operaciones unitarias en este proceso en frío, las impurezas del jugo y antes de iniciar el proceso químico, se logra evitar en un 97 % que ingresen a los procesos fisicoquímicos posteriores, las sustancias precursoras del color que, por el efecto del calor, se liberen en el jugo logrando su acción negativa sobre la presentación del producto terminado, (Granja & Granja, 2013, p. 31).



    p.mb-5 Ventajas de las operaciones de limpieza de jugo frío.

    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/T1/img-6.svg', alt='Texto que describa la imagen')

      .tarjeta.color-morado.p-3(x="49.7%" y="20%" numero="1")
        p Se obtiene un producto final de alto valor nutricional, libre de aditivos químicos.

      .tarjeta.color-morado.p-3(x="77.9%" y="32.4%" numero="2")
        p Reduce los costos de producción, aumentando la rentabilidad.

      .tarjeta.color-morado.p-3(x="83%" y="66.5%" numero="3")
        p El jugo de caña clarificado es transparente y brillante.

      .tarjeta.color-morado.p-3(x="64.7%" y="89%" numero="4")
        p Previene la formación de incrustaciones en los vaporizadores.

      .tarjeta.color-morado.p-3(x="33%" y="89%" numero="5")
        p Reduce la cantidad de clarificante vegetal empleada.

      .tarjeta.color-morado.p-3(x="15.7%" y="66.5%" numero="6")
        p Facilita la clarificación.

      .tarjeta.color-morado.p-3(x="21.7%" y="32.4%" numero="7")
        p Excluye completamente el uso de blanqueadores como el clarol.


    ul.lista-ul--color.lista-ul--separador
      li 
        i.fas.fa-leaf
        | <b>Clarificación del jugo </b>

    p.mb-5 Ahora, se describen los pasos para la clarificación del jugo en los procesos paneleros:

    .row.mt-5
      .col-10.offset-1  
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1
          p.text-small <i>Datos promedios de Brix jugo mixto y pH jugo mixto tomado a la salida de los molinos y jugo clarificado antes de ingresar a evaporación.</i>
        .tabla-a.color-secundario.mb-5 
          table
            caption.mt-3 Nota. Tomada de Granja & Granja (2013).
            thead
              tr
                th Brix jugo mixto
                th pH jugo mixto
                th pH jugo clarificado
            tbody.text-center
              tr
                td 17.8
                td 5.41
                td 6.55
              tr
                td 17.9
                td 5.30
                td 6.40
              tr
                td 17.6
                td 5.32
                td 6.55
              tr
                td 17.4
                td 5.23
                td 6.40
              tr
                td 17.5
                td 5.26
                td 6.5
              tr
                td 18.1
                td 5.35
                td 6.35
              tr
                td 17.8
                td 5.45
                td 6.60
              tr
                td 17.9
                td 5.43
                td 6.65
              tr
                td 17.3
                td 5.35
                td 6.50
              tr
                td 17.4
                td 5.40
                td 6.45
              tr
                td 17.2
                td 5.40
                td 6.25
              


    .row.justify-content-center.align-items-center(titulo="")
      .col-md-8.mb-4.mb-md-0
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row.justify-content-around.align-items-center(titulo="Clarificación")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 El propósito de la clarificación de los jugos de caña es la eliminación de los sólidos en suspensión, las sustancias coloidales y ciertos compuestos colorantes presentes en dichos jugos. Estas impurezas pueden ser eliminadas a través de operaciones de flotación y/o sedimentación, las cuales son esencialmente diferentes. En el proceso de elaboración de la panela, la clarificación se realiza mediante la flotación, ya que la sedimentación resulta inviable debido a que los jugos se encuentran en ebullición en las pailas de la hornilla. La clarificación se lleva a cabo en las pailas recibidora y clarificadora de la hornilla, utilizando la floculación o aglutinamiento de las impurezas presentes en el jugo. Esto se logra gracias a un efecto combinado de temperatura, tiempo y la acción de agentes clarificantes, como los mucílagos vegetales y/o los polímeros químicos.            
                

          .row.justify-content-around.align-items-center(titulo="Calentamiento")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Una vez concluida la fase de prelimpieza, se obtiene el jugo sin clarificar o guarapo, el cual fluye directamente hacia el fondo o paila recibidora a una temperatura cercana a la ambiente (usualmente 2-3°C más alta) para dar inicio al proceso de calentamiento, el cual se extiende hasta alcanzar los 50-55°C. El calentamiento del jugo resulta en una aceleración en la formación de partículas de mayor tamaño y densidad, así como en un incremento en su velocidad de movimiento, lo que facilita su separación del líquido. 
          

          .row.justify-content-around.align-items-center(titulo="Sustancias")
            .col-md-12.mb-4.mb-md-0
              p En el proceso de producción de panelera, existen algunas sustancias precursoras y generadoras de color e impurezas que permanecen en solución y no pueden ser separadas por su tamaño. Por esta razón, se requiere la adición de otras sustancias para lograr su eliminación mediante procesos manuales. En las pailas de descachazado, se añaden clarificantes vegetales y sacarato de calcio con el fin de incrementar la coagulación de las impurezas presentes en el jugo. La efectividad de este proceso depende de factores como la variedad de caña de azúcar utilizada, las condiciones climáticas y el estado del jugo. Es importante destacar que la selección adecuada de los agentes clarificantes es fundamental para garantizar la calidad del producto final, ya que algunos de estos compuestos pueden afectar el sabor y el aroma de la panela. Por lo tanto, es necesario realizar pruebas previas para determinar la dosificación óptima de los clarificantes y asegurar una eliminación efectiva de las impurezas sin afectar las características organolépticas del producto final. 

          .row.justify-content-around.align-items-center(titulo="Impurezas")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Durante la etapa de clarificación se generan diversas impurezas que deben ser removidas para obtener un producto de alta calidad. Estas impurezas pueden incluir sólidos en suspensión, sustancias coloidales y compuestos colorantes que se encuentran presentes en los jugos de caña. Para lograr su eliminación, se utilizan técnicas como la flotación y la sedimentación, así como agentes clarificantes como mucílagos vegetales y polímeros químicos. La selección adecuada de estos agentes es fundamental para garantizar una eliminación efectiva de las impurezas sin afectar las características organolépticas del producto final. 
      .col-md-4
        figure
          img(src='@/assets/curso/temas/T1/img-7.png', alt='Texto que describa la imagen')

    
    ul.lista-ul--color.lista-ul--separador
      li 
        i.fas.fa-leaf
        | <b>Evaporación</b>


    .row.justify-content-center.align-items-center(titulo="").mb-5

      .col-md-4
        figure
          img(src='@/assets/curso/temas/T1/img-8.png', alt='Texto que describa la imagen')

      .col-md-8.mb-4.mb-md-0
          .row.tarjeta.tarjeta--gris.p-4
            .col-md-12.mb-4.mb-md-0
              p La etapa que sucede a la clarificación consiste en la utilización del calor suministrado para llevar a cabo principalmente el cambio de fase del agua, es decir, su transformación de líquido a vapor. Este proceso permite la eliminación de alrededor del 90% del agua originalmente presente en el jugo de caña, lo que a su vez aumenta la concentración de los sólidos solubles desde valores entre 16 y 21 grados Brix hasta alcanzar el punto de panela.
              p Durante esta fase, la temperatura promedio se eleva hasta los 120°C.



 

    ul.lista-ul--color.lista-ul--separador
      li 
        i.fas.fa-leaf
        | <b>Concentración</b>

    p.mb-5 Esta es la manera en que la concentración y las altas temperaturas, permiten una mejor purificación del producto: 


    .tarjeta.tarjeta--slyder.p-4.mb-5
      LineaTiempoC.color-acento-botones(text-small)
        .row.justify-content-around.align-items-center.px-5(titulo="paso 1")
          .col-md-8.mb-4.mb-md-0
            p.mb-5 La fase final del proceso de producción de panela se lleva a cabo en la paila punteadora o concentradora, a temperaturas superiores a los 100°C. Durante esta etapa, se agrega el agente antiespumante para evitar la formación de espuma en el líquido.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T1/img-15.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="paso 2")
          .col-md-8.mb-4.mb-md-0
            p.mb-5 La concentración es una etapa crítica en el proceso de producción de panela, ya que se registran las temperaturas más altas (entre 100 y 125°C). Durante este proceso, la inversión se acelera, lo que resulta en un incremento significativo del porcentaje de azúcares reductores iniciales. Por esta razón, es recomendable realizar la concentración en el menor tiempo posible y asegurarse de que las mieles tengan un pH de 5,8.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T1/img-16.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center.px-5(titulo="paso 3")
          .col-md-8.mb-4.mb-md-0
            p.mb-5 El punto de panela se alcanza a temperaturas entre 118 y 125°C, con un porcentaje de sólidos solubles entre 88 y 94 grados Brix. La consistencia, color y densidad de las mieles determinan el punto final de la panela.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T1/img-17.png', alt='Texto que describa la imagen')

      
        .row.justify-content-around.align-items-center.px-5(titulo="paso 4")
          .col-md-8.mb-4.mb-md-0
            p.mb-5 La temperatura final de punteo depende principalmente del Brix de las mieles, seguido de la altura sobre el nivel del mar del trapiche y la pureza de las mieles.

        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T1/img-18.png', alt='Texto que describa la imagen')
 
        .row.justify-content-around.align-items-center.px-5(titulo="paso 5")
          .col-md-8.mb-4.mb-md-0
            p.mb-5 Es fundamental tener precisión al determinar el punto de panela, ya que si se saca a una temperatura demasiado alta, se producirá una caramelización de los azúcares, lo que resultará en un oscurecimiento del producto final. Por otro lado, si se saca a una temperatura demasiado baja, se dificultará la solidificación.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T1/img-19.png', alt='Texto que describa la imagen')
 





    ul.lista-ul--color.lista-ul--separador.mb-5
      li 
        i.fas.fa-leaf
        | <b>Enfriamiento</b>


    .row.justify-content-center.align-items-center(titulo="").mb-5
      .col-md-5
        figure
          img(src='@/assets/curso/temas/T1/img-20.png', alt='Texto que describa la imagen')

      .col-md-7.mb-4.mb-md-0
        p.mb-4 Cuando se llega al punto de almíbar y se detiene el calentamiento, se producen una serie de cambios en la textura y estructura del producto.
        p.mb-4 Durante el enfriamiento, la panela pierde su pegajosidad y se introduce aire seco en la miel, lo que permite el crecimiento de cristales de azúcar y la adquisición de porosidad. A medida que se enfría, el azúcar almibarado adquiere una forma amorfa y densa, características de los sólidos.
        p.mb-4 Es importante tener en cuenta que los tiempos de mezclado y enfriamiento pueden variar dependiendo de la calidad de los materiales utilizados. En promedio, se recomienda un tiempo de enfriamiento de 10 a 15 minutos por lote para garantizar una adecuada cristalización del azúcar y una textura y estructura óptimas del producto final.
        p.mb-5 Para garantizar un enfriamiento adecuado, se recomienda utilizar equipos especializados que permitan un control preciso de la temperatura y la velocidad de enfriamiento. Además, se debe asegurar una adecuada ventilación del área de enfriamiento para evitar la acumulación de humedad y prevenir posibles problemas de contaminación.



    ul.lista-ul--color.lista-ul--separador
      li 
        i.fas.fa-leaf
        | <b>Empaque y especificación del producto</b>

    p.mb-3 En todo el sistema logístico, el empaque puede ser tanto una ayuda como un obstáculo para tener la más alta calidad y vida de almacenamiento.
    p.mb-5 Sobre el empaque y especificación del producto, tenga presente:



    .row.justify-content-center.align-items-center(titulo="")
      .col-md-8.mb-4.mb-md-0
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row.justify-content-around.align-items-center(titulo="El empaque")
            .col-md-12.mb-4.mb-md-0
              p El empaque es un elemento crucial en la industria panelera, no solo por su capacidad para preservar la calidad e inocuidad del producto, sino también por su papel en la identificación del mismo a través del rótulo o etiqueta.

              p La etiqueta, en particular, se refiere al material escrito, impreso o gráfico que se encuentra grabado, adherido o adjunto en el envase o empaque del producto y que proporciona información esencial para determinar su origen y las características más importantes de composición certificada. 

              p La inclusión de información precisa y completa en la etiqueta resulta fundamental para garantizar la seguridad alimentaria y para cumplir con las regulaciones y normativas establecidas en la industria. 

              p.mb-4 Además, la etiqueta puede ser utilizada como herramienta de marketing, ya que permite a los consumidores identificar rápidamente el producto y sus características, lo que puede influir en su decisión de compra. Por lo tanto, el diseño cuidadoso de la etiqueta y su correcta aplicación en el empaque son aspectos críticos en la producción y comercialización de panela.
             
        
          .row.justify-content-around.align-items-center(titulo="El personal operativo ")
            .col-md-12.mb-4.mb-md-0
              p El personal operativo y de logística de la industria panelera debe contar con los implementos de protección adecuados para cada zona de proceso, incluyendo guantes, overol, botas, tapabocas o máscara, casco, gafas y tapa oídos. Estos elementos son fundamentales para garantizar la seguridad y la salud del personal, así como para proteger la integridad del producto.

              p Es importante que el personal reciba capacitación sobre la correcta utilización de estos elementos, así como sobre las prácticas de higiene y seguridad necesarias para el manejo del producto. Además, se recomienda establecer protocolos de limpieza y desinfección de las áreas de trabajo y los equipos utilizados.

              p En cuanto al embalaje y empaque del producto, es fundamental utilizar materiales de calidad que garanticen la protección del producto durante el transporte y almacenamiento. Se recomienda el uso de empaques que eviten la contaminación del producto por agentes externos y que permitan su conservación en óptimas condiciones.

              p Por último, es importante que el personal encargado del manejo del producto tenga conocimientos sobre las características del mismo, incluyendo su composición, propiedades físicas y químicas, así como sobre las prácticas adecuadas para su almacenamiento y manipulación. De esta forma, se garantiza la calidad del producto y se minimizan los riesgos asociados a su manipulación y transporte.


          .row.justify-content-around.align-items-center(titulo="La higiene")
            .col-md-12.mb-4.mb-md-0
              p Es importante que el personal comprenda que la higiene va más allá de la simple limpieza, y se refiere a un conjunto de actividades destinadas a proteger la salud y prevenir la aparición de enfermedades.
              p Para asegurar una producción higiénica, se recomienda que el personal siga las siguientes pautas:
              p Mantener una adecuada higiene personal, incluyendo el lavado frecuente de manos con agua y jabón antes y después de manipular los alimentos.
              p Utilizar ropa y equipos de protección adecuados, como guantes, gorros, mandiles y calzado cerrado, para evitar la contaminación cruzada.
              p Mantener las áreas de trabajo limpias y ordenadas, realizando una limpieza regular de superficies, utensilios y equipos con productos desinfectantes.
              p Seguir los protocolos establecidos para cada tipo de producto.
              p En cuanto al embalaje y empaque del producto, utilizar materiales seguros e higiénicos que cumplan con las normativas vigentes. 
              p El personal operativo y de logística debe recibir capacitación periódica sobre buenas prácticas de manipulación de alimentos, higiene y seguridad alimentaria. Esto les permitirá comprender la importancia de su rol en la protección de la salud del consumidor y en la calidad del producto final.


          .row.justify-content-around.align-items-center(titulo="El almacenamiento ")
            .col-md-12.mb-4.mb-md-0
              p El almacenamiento adecuado de la panela es un aspecto crítico para garantizar la calidad e inocuidad del producto. Es importante tener en cuenta que la panela es un producto higroscópico, lo que significa que su contenido de humedad puede variar dependiendo del ambiente en el que se encuentre. 
              p Durante el almacenamiento de la panela, se deben considerar tres factores clave que pueden afectar la calidad del producto: el grado de higroscopicidad del producto, la temperatura del cuarto de almacenamiento y la humedad relativa del ambiente. 
              p Para evitar la absorción o liberación excesiva de humedad por parte de la panela, se recomienda almacenarla en cuartos cerrados a temperatura ambiente y sobre estibas para evitar el deterioro de los empaques por roedores e insectos. Además, se debe controlar cuidadosamente la temperatura y la humedad relativa del ambiente para evitar fluctuaciones que puedan afectar la calidad del producto. 
              p Es importante destacar que las condiciones de almacenamiento inadecuadas pueden permitir el ataque de microorganismos, especialmente hongos y levaduras, lo que puede afectar la calidad e inocuidad del producto. Por lo tanto, se recomienda realizar inspecciones periódicas del producto durante el almacenamiento para detectar posibles signos de deterioro o contaminación. 
              p El control cuidadoso de la temperatura y la humedad relativa del ambiente, así como la prevención del ataque de microorganismos, son factores clave para garantizar la calidad e inocuidad del producto final.


      .col-md-4
        figure
          img(src='@/assets/curso/temas/T1/img-21.png', alt='Texto que describa la imagen')



    Separador

    h2 Trasiego de mieles

    p.mb-5 El trasiego de mieles tiene implicaciones y parámetros importantes que se deben tener muy en cuenta para la efectividad del proceso. Estos son:


    .tarjeta.tarjeta--slyder.p-4.mb-5.fnd-1
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-md-8.mb-4.mb-md-0
            h3 Constitución de la miel
            p.mb-5 La miel cruda está constituida principalmente por sacarosa, glucosa y fructosa, producto natural, moderadamente húmedo, denso y viscoso, especialmente cuando el jugo de caña concentrado y clarificado, que aún no ha sido extraído, contiene algún tipo de azúcar. Al someter esta miel a un tratamiento químico o biológico, se puede evitar su cristalización, dando como resultado la llamada miel “modificada”, que es hidrolizada o enriquecida con fructosa y glucosa. La cantidad de inversión dependerá del tipo de agente de inversión utilizado, así como de la temperatura y el tiempo que el agente de inversión permanezca en contacto con la sacarosa. El agente de inversión más común y útil es el ácido, (Narváez, 2002).

          .col-md-4
            figure
              img(src='@/assets/curso/temas/T1/img-22.png', alt='Texto que describa la imagen')

        
        .row.justify-content-around.align-items-center
          .col-md-8.mb-4.mb-md-0
            h3 Calidad de la caña
            p.mb-5 Si se pretende producir miel se “recomienda utilizar cañas inmaduras o sobremaduras, con alto contenido de azúcares reductores, para disminuir su cristalización”. La miel de caña de buena calidad cumple con las siguientes características: buen suelo y su mejoramiento, diversidades de caña de azúcar adecuadas a la agroecología de cada región, fertilización adecuada, buena distribución de lluvia y/o riego durante todo el año, luz solar constante, proceso de transferencia de calor eficiente y excelentes condiciones sanitarias (Prada, 2002).
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T1/img-23.png', alt='Texto que describa la imagen')
 


        .row.justify-content-around.align-items-center
          .col-md-8.mb-4.mb-md-0
            h3 Aportes nutricionales
            p Entre los nutrientes que se encuentran en la panela destacan los hidratos de carbono, que proporcionan energía al organismo; las proteínas, que son fundamentales para el crecimiento y reparación de tejidos; y los minerales, como el hierro, el calcio y el magnesio, que intervienen en diversas funciones del cuerpo.
            p.mb-5 Además, la panela contiene vitaminas del complejo B, que son esenciales para el correcto funcionamiento del sistema nervioso y la producción de energía; y vitamina C, que actúa como antioxidante y refuerza el sistema inmunológico.


        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T1/img-24.png', alt='Texto que describa la imagen')



    p.mb-5 A continuación, se describen los pasos para el procesamiento de caña panelera para la obtención de miel:




    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/T1/img-25-.svg', alt='Texto que describa la imagen')
        

      .tarjeta.fnd-1.p-3(x="12.2%" y="78.5%" tooltip="" numero="")
        h5 Extracción de jugos
        p La caña se somete a compresión en los rodillos o mazas del molino, que facilitan el drenaje del líquido de los tallos. Aquellos con 58 % a 63 % de recuperación se consideraron satisfactorios. Los productos finales en esta etapa son jugo crudo y bagazo; el primero, es la materia prima para hacer miel de caña de azúcar y el segundo, es el combustible que se utiliza para el quemador después del secado, (Osorio, 2007).

      .tarjeta.fnd-1.p-3(x="37.8%" y="78.5%" tooltip="" numero="")
        .h5.mb-2 Limpieza de jugos
        p En esta fase se retiran impurezas gruesas de carácter no nutricional por medios físicos (decantación y flotación en el prelimpiador), calientes (en las primeras pailas) y bioquímicos (con los aglutinantes). El jugo crudo (guarapo) y sin clarificar se limpia en frío utilizando un sistema de decantación natural, por efecto de la gravedad, desarrollado por el centro de investigación para el mejoramiento de la agroindustria panelera (CIMPA) y que se ha denominado prelimpiador. Este conector retiene por precipitación una importante proporción de los sólidos contenidos en el jugo de la caña, como partículas de tierra, lodo y arena; paralelamente, por flotación, el prelimpiador separa partículas livianas como bagacillo, hojas, insectos, etc., (Osorio, 2007).

      .tarjeta.fnd-1.p-3(x="63.8%" y="78.5%" tooltip="" numero="")
        .h5.mb-2 Clarificación
        p Esta fase se lleva a cabo en una paila recibidora o descachazadora y consiste en remover la torta de filtración de sólidos suspendidos como caña, hojas, arena, tierra, materia coloidal y sólidos solubles del jugo de caña. La limpieza de los jugos ocurre gracias a la acción combinada del calentamiento suministrado por la hornilla y la acción aglutinante de ciertos compuestos naturales como los cadillos, el balso, el guásimo, el juan blanco, el san Joaquín, entre otros. El control de esta operación debe ser preciso para la calidad del jugo si se desea producir miel, pues la presencia de precipitaciones no eliminados en este proceso afecta directamente la calidad del producto final, reflejada en una cristalización, (Osorio, 2007).

      .tarjeta.fnd-1.p-3(x="89.7%" y="78.5%" tooltip="" numero="")
        .h5.mb-2 Evaporación y concentración
        p Una vez que se completa la clarificación, comienza la evaporación del agua, aumentando la concentración de azúcares en el jugo. La eficiencia térmica de la hornilla, y su efecto sobre los jugos, se cuentan entre el conjunto de factores que influyen en la calidad de la panela. Cuando los jugos alcanzan un contenido de sólidos solubles cercano a los 70 ºBrix adquieren el nombre de mieles, y se inicia la concentración, (Osorio, 2007).




      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
