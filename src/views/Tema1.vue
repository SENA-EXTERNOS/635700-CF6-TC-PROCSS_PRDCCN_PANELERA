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
        p.mb-0 Este proceso puede tardar de 2 a 3 horas dependiendo del tipo de molino que es una máquina con tres rodillos acanalados (pequeños) para extraer y separar el jugo o guarapo y el bagazo. Hay molinos de martillos horizontales que funcionan con un motor eléctrico o fuerza hidráulica y molinos de martillos verticales que funcionan con tracción animal. Dependiendo de la rusticidad de la variedad de la caña de azúcar, debe ser picada y colocada en una licuadora de tres compartimientos para facilitar la extracción del jugo. El equipo mecánico debe contar con un motor de 5 caballos de fuerza, el cual también debe ser un motor de combustión interna a 2000 rpm.




    p.mb-5 A continuación, profundice en el proceso de concentración del jugo de caña:


    .row.justify-content-center(data-aos="fade-down").mt-5.mb-5
      .col-10.col-lg-4.w450
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure.img-100
              img.img-100(src="@/assets/curso/temas/T1/img-2.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                .h4.small-text.mt-sm-3.mt-md-0 Recepción de las materias primas
                p.mt-3.small-text La recepción de las diferentes materias primas se la efectúa en el puente grúa, el mismo que tiene una capacidad nominal de 2000 kg por cada levantamiento, lo que asegura un flujo másico de caña de azúcar de hasta 6000 kg por hora, este envía una señal a través de la celda de carga al computador que se encuentra en el laboratorio y así poder llevar un control de calidad de materias primas por proveedor y sin poder alterar la información de pesaje de las distintas materias primas, (Granja & Granja, 2013, p. 26).
      
      .col-10.col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure.img-100
              img.img-100(src="@/assets/curso/temas/T1/img-3.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-md-2
              .row.text-center.px-1.pt-1.mt-1.mt-md-4.mt-lg-3.mt-xl-4.pt-md-0
                .h4.small-text.mt-1.mt-md-0 Lavado y desfibrado de la caña de azúcar
                p.mt-3.small-text A través del tanque de lavado. El agua caliente para el enjuague proviene del circuito estanco de vacío y refrigeración del condensador barométrico, que aprovecha el calor residual de la evaporación del jugo claro. En el proceso de trituración de la caña de azúcar, hay dos aspectos básicos a distinguir: 1) que es la producción mediante la rotura de la estructura dura de la caña y trituración de las células; 2) la producción de azúcar en sí, lo que es muy importante para lograr un alto rendimiento de trituración, así como una mayor eficiencia de extracción. Cuando se trabaja con una astilladora, las cuchillas cortan el tronco en trozos cortos, lo que permite una molienda más eficiente.
      .col-10.col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure.img-100
              img.img-100(src="@/assets/curso/temas/T1/img-4.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-1.pt-1.mt-1.mt-md-4.mt-lg-3.mt-xl-4.pt-md-0
                .h4.small-text.mt-1.mt-md-0 Molienda de la caña de azúcar
                p.mt-3.small-text La caña molida se traslada a un exprimidor, donde se extrae el jugo en dos etapas con una capacidad nominal de 500 kg por hora y una relación de extracción del 60 %. Un buen ajuste del molino según el tipo de caña, contenido de fibra y velocidad de molienda es fundamental para el correcto funcionamiento de la máquina, sin atascos y alto rendimiento de extracción. La puesta a punto del molino consiste en determinar la posición relativa más favorable de los tres martillos y la cuchilla central para conseguir las mejores condiciones de trituración y obtener los mejores resultados en el proceso de extracción de jugo.
    
    ul.lista-ul--color.lista-ul--separador
      li 
        i.fas.fa-leaf
        | <b>Limpieza del jugo </b>


    .row.justify-content-center.align-items-center(titulo="").mb-5
      .col-md-5
        figure
          img(src='@/assets/curso/temas/T1/img-5.png', alt='Texto que describa la imagen')

      .col-md-7.mb-4.mb-md-0
        p.mb-4 El jugo extraído de la caña, por los molinos, es una solución compuesta por materiales de todos los tamaños, desde partículas gruesas como tierra, partículas de bagazo, ceras, hasta coloides y iones que pasan a un filtro decantador, para eliminación de materiales extraños e impurezas por los procesos unitarios de sedimentación y flotación. (Granja & Granja, 2013, p. 30-31)

        p.mb-3 El buen rendimiento de un filtro instalado se puede ver entre la entrada y la salida del jugo. 
        .cajon.color-acento-botones.p-4.mb-4.color-morado
          p.mb-0 Durante la limpieza en frío queda impurezas líquidas que deben ser removidas varias veces al día y devueltas al molino final para recuperar parte del jugo restante. Al realizar las dos operaciones unitarias en este proceso en frío, las impurezas del jugo y antes de iniciar el proceso químico, se logra evitar en un 97 % que ingresen a los procesos físico químicos posteriores, las sustancias precursoras del color que, por el efecto del calor, se liberen en el jugo logrando su acción negativa sobre la presentación del producto terminado, (Granja & Granja, 2013, p. 31).



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
          p.text-small <i>Datos promedios de pH jugo mixto y pH jugo mixto tomado a la salida de los molinos y jugo clarificado antes de ingresar a evaporación </i>
        .tabla-a.color-secundario.mb-5 
          table
            caption.mt-3 Nota. Tomada de Granja & Granja (2013).
            thead
              tr
                th Brix jugo mixto
                th PH jugo mixto
                th PH jugo clarificado
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
              p.mb-4 Terminada la clarificación de jugo en frío, el jugo mixto pasa a la paila de descachazado, con una capacidad nominal de 500 litros por hora, construidas completamente en acero inoxidable, para continuar con el proceso del proceso de clarificación en el cual continúa removiendo a los sólidos en suspensión y algunos compuestos colorantes presentes en el jugo durante la producción de panela, a través de la aglomeración de partículas, a una temperatura máxima 50-55ºC, (Granja & Granja, 2013).              
                

          .row.justify-content-around.align-items-center(titulo="Calentamiento ")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Que permite la coagulación o formación de partículas más grandes y densidad, misma que se separa fácilmente por medios físicos.
          

          .row.justify-content-around.align-items-center(titulo="Sustancias")
            .col-md-12.mb-4.mb-md-0
              p Algunas sustancias precursoras y generadoras de color e impurezas en el producto final, permanecen en solución y no se pueden separar por su tamaño; es por eso que es necesario añadir otras sustancias para lograr su eliminación manual. A las pailas de descachazado se les agregan clarificantes vegetales y sacarato de calcio para aumentar la coagulación de impurezas en el jugo, que depende de la variedad de caña de azúcar, de las condiciones climáticas o el estado del jugo, (Granja & Granja, 2013).

          .row.justify-content-around.align-items-center(titulo="Impurezas ")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Líquidas o cachaza se retiran manualmente con un colador y se colocan en recipientes llamados cachaceras. En estas se separan los jugos que pueden ser liberados en la separación de la cachaza quedando en el fondo del contenedor, que regresará más tarde a la paila clarificadora. La torta de filtración resultante es un producto apto para su uso como fertilizante y alimento para cerdos.

      .col-md-4
        figure
          img(src='@/assets/curso/temas/T1/img-7.png', alt='Texto que describa la imagen')

    
    ul.lista-ul--color.lista-ul--separador
      li 
        i.fas.fa-leaf
        | <b>Evaporación</b>

    p.mb-5 El proceso de evaporación en la producción panelera, presenta las siguientes generalidades:



    .row.justify-content-center.align-items-center(titulo="").mb-5

      .col-md-4
        figure
          img(src='@/assets/curso/temas/T1/img-8.png', alt='Texto que describa la imagen')

      .col-md-8.mb-4.mb-md-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="El jugo clarificado")
            .col-md-12.mb-4.mb-md-0
              p El propósito principal de evaporar el jugo clarificado es lograr la tasa de evaporación más alta, de la manera más eficiente y preservar el carácter natural, pero aumentando su concentración. Es decir, este proceso permite mejorar el contenido de azúcar en el jugo desde 20º Brix hasta 60º Brix, se hace al vacío, este proceso afecta directamente la textura del producto final, (Granja & Granja, 2013).
          .row(titulo="El jugo claro")
            .col-md-12.mb-4.mb-md-0
              p Es transportado hacia los evaporadores a temperatura de ebullición, para la separación del agua presente en el jugo a través de la ebullición al vacío en el primer cuerpo del evaporador se obtienen gases vegetales del jugo claro y libera calor, al  segundo efecto de evaporación, lográndose “que una gran parte del agua sea separada del jugo; la cual es apta para su utilización como agua esterilizada e ideal para su aplicación en el proceso de fabricación de pulpas de jugos”, (Granja & Granja, 2013, p. 36).


    ul.lista-ul--color.lista-ul--separador
      li 
        i.fas.fa-leaf
        | <b>Clarificación de jarabe </b>

    p.mb-5 En esta etapa del proceso, <b>el equipo está diseñado en tres opciones: </b>


    .tarjeta.tarjeta--slyder.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-md-8.mb-4.mb-md-0
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span a
                | Almacenamiento de jarabe procedente de la molienda de caña en la planta.
              li 
                .lista-ol--cuadro__vineta
                  span b
                | Formar Jarabe a partir de miel virgen.
              li 
                .lista-ol--cuadro__vineta
                  span c
                | El azúcar moreno es colado de un ingenio artesanal, pero como las dos últimas materias primas mencionadas contienen sólidos que se encuentran en estado coloidal, su eliminación es un trabajo en equipo en una sola operación de “clarificación por flotación, la capacidad de este equipo en acero inoxidable, que tiene doble fondo para el calentamiento controlado con vapores para 800 litros”, (Granja & Granja, 2013, p. 37).
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T1/img-9.png', alt='Texto que describa la imagen')

        
        .row.justify-content-around.align-items-center
          .col-md-8.mb-4.mb-md-0
            p.mb-5 <b>Este último tipo de material</b> no tiene afinidad por el agua, carecen de estabilidad en presencia de electrolitos y son relativamente fáciles de coagular.  Por el contrario, los hidrofílicos tienen una fuerte afinidad por el agua. Los coloides poseen carga eléctrica que se repelen impidiendo la coagulación y la flotación. Por esta razón, para obtener la coagulación deben neutralizarse primero las cargas eléctricas, (Granja & Granja, 2013). 
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T1/img-10.png', alt='Texto que describa la imagen')
 


        .row.justify-content-around.align-items-center
          .col-md-8.mb-4.mb-md-0
            p.mb-5 Los floculantes funcionan porque, aunque la carga neta de la partícula sea negativa, una carga positiva puede estar presente en la superficie de cualquier partícula y puede absorber radicales iónicos poliméricos.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T1/img-11.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-8.mb-4.mb-md-0
            p.mb-5 Además, siendo de alto peso molecular, la longitud de la cadena es mayor, lo que posibilita que se deba varios radicales aniónicos se absorban en las cargas positivas descritas y se establece un verdadero puente, que aumenta el tamaño de los flóculos, (Granja & Granja, 2013).
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T1/img-12.png', alt='Texto que describa la imagen')




        .row.justify-content-around.align-items-center
          .col-md-8.mb-4.mb-md-0
            p.mb-5 Durante la etapa de coagulación y la siguiente, otros sólidos son capturados en la etapa de flotación. Partículas extraídas de plantas suspendidas como bagazo, partículas mayores a 0.200 mm que son difíciles de capturar porque deben ser separadas por una malla metálica contra una charola y luego ser removidas manualmente.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T1/img-13.png', alt='Texto que describa la imagen')


        .row.justify-content-around.align-items-center
          .col-md-8.mb-4.mb-md-0
            p.mb-5 Usar ácido fosfórico al 85 % USP y sacarosa cálcica como agentes desecantes, implica la observación con cierto cuidado, dada la dificultad de la reacción entre los dos componentes.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T1/img-14.png', alt='Texto que describa la imagen')


    ul.lista-ul--color.lista-ul--separador
      li 
        i.fas.fa-leaf
        | <b>Concentración</b>

    p.mb-5 Esta es la manera en que la concentración y las altas temperaturas, permiten una mejor purificación del producto: 


    .tarjeta.tarjeta--slyder.p-4.mb-5
      LineaTiempoC.color-acento-botones(text-small)
        .row.justify-content-around.align-items-center(titulo="paso 1")
          .col-md-8.mb-4.mb-md-0
            p.mb-5 El jarabe clarificado suele pasar a la siguiente etapa con un Brix de 60 ° a 65 °; cuanto más puro sea el material, más rápido se cristaliza al agitar y enfriar.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T1/img-15.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="paso 2")
          .col-md-8.mb-4.mb-md-0
            p.mb-5 Este proceso constituye la etapa final del jarabe clarificado cuya temperatura registrada supera el punto de ebullición del agua.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T1/img-16.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="paso 3")
          .col-md-8.mb-4.mb-md-0
            p.mb-5 Mientras continúa este proceso, es importante verificar la conversión de sacarosa, que depende de la temperatura, el pH y el tiempo de residencia en la paila concentradora, especialmente si la temperatura supera los 100 ºC, la inversión se acelera significativamente.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T1/img-17.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="paso 4")
          .col-md-8.mb-4.mb-md-0
            p.mb-5 <b>“La paila de concentración tiene una capacidad nominal de 220 Kilogramos / hora”</b> (Granja & Granja, 2013, p. 43).
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T1/img-18.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="paso 5")
          .col-md-8.mb-4.mb-md-0
            p.mb-5 El <b>“punto”</b> del jarabe clarificado para la obtención de la panela granulada en la planta piloto prototipo corresponde a una concentración de sólidos de 88 º a 94 ºBrix, la velocidad de respuesta durante este proceso debe ser alta, porque los cambios de las características del material en proceso ocurren rápidamente en su punto final y estas pueden caramelizar fácilmente, caso contrario se dificultará la cristalización, (Granja, 2013, p. 44).
        
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
        p.mb-4 Cuando se llega al punto de almíbar y se detiene el calentamiento, la textura y estructura cambia, pierde pegajosidad, se introduce aire seco en la miel, crecen cristales de azúcar, adquiere porosidad y, a medida que se enfría, el azúcar almibarado adquiere una forma amorfa, densa, característica de los sólidos.
        p.mb-4 Los tiempos de mezclado y enfriamiento dependen de la calidad de los materiales utilizados y toman un promedio de 10 a 15 minutos por lote. 
        p.mb-5 La operación se realiza de forma simultánea y consiste en un enfriamiento rápido del jarabe concentrado permitiendo que se cristalice por medio del batido, utilizando en este proceso una paila construida en acero inoxidable, una batidora y un soplador de aire forzado, permitiendo variar la velocidad del batido a flujo constante de aire, este depende de la viscosidad del material a cristalizar y por lo tanto, da seguridad industrial al operador, al no permitir saltar de revoluciones por minuto y que haga salir el aspa de batido de su lugar; tiene un control automático para su apagado.



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
              p.mb-4 Es una forma de proteger la panela granulada para que permanezca en su lugar, mientras brinda amortiguación. Sin embargo, el control de temperatura y humedad del producto puede causar deterioro, acortando su vida útil.              
                

          .row.justify-content-around.align-items-center(titulo="El producto")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 En esta etapa es importante tener en cuenta que el producto obtenido en la etapa anterior esté libre de contaminación microbiológica. Se debe tener mucho cuidado de no contaminar la panela en la manipulación.
          

          .row.justify-content-around.align-items-center(titulo="El personal operativo ")
            .col-md-12.mb-4.mb-md-0
              p Equipos y utensilios están limpios y libres de contaminación, en todo el tiempo de operación de la planta, al igual que toda la infraestructura como pisos, paredes, etc.”, (Granja, 2013, p. 49).

          .row.justify-content-around.align-items-center(titulo="La higiene")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 En esta etapa, la higiene, presentación, pesaje y envasado, así como el sellado final del envase, juegan un papel importante para garantizar su longevidad, seguridad alimentaria e imagen.

          .row.justify-content-around.align-items-center(titulo="El almacenamiento ")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Se lo hace siguiendo las fechas de fabricación, tamaños de los lotes y sobre todo los parámetros de humedad de equilibrio en la panela (Chep), entre un valor mínimo de 7% y un máximo del 10 %; con una temperatura ambiente de bodega entre 13 a 34 ºC y humedad relativa entre 70 a 78 %,(Granja, 2013, p. 49).

      .col-md-4
        figure
          img(src='@/assets/curso/temas/T1/img-21.png', alt='Texto que describa la imagen')



    Separador

    h2 Trasiego de mieles

    p.mb-5 El trasiego de mieles tiene implicaciones y parámetros importantes que se deben tener muy en cuenta para la efectividad del proceso. Estos son:


    .tarjeta.tarjeta--slyder.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-md-8.mb-4.mb-md-0
            h3 Constitución de la miel
            p.mb-5 La miel cruda está constituida principalmente por sacarosa, glucosa y fructosa, producto natural, moderadamente húmedo, denso y viscoso, producto intermedio en la elaboración del producto, especialmente cuando el jugo de caña concentrado y clarificado, que aún no ha sido extraído, contiene algún tipo de azúcar. Al someter esta miel a un tratamiento químico o biológico, se puede evitar su cristalización, dando como resultado la llamada miel “modificada”, que es hidrolizada o enriquecida con fructosa y glucosa; La cantidad de inversión dependerá del tipo de agente de inversión utilizado, así como de la temperatura y el tiempo que el agente de inversión permanece en contacto con la sacarosa. El agente de inversión más común y útil es el ácido, (Narváez, 2002).

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
            p.mb-5 Los nutricionistas sugieren la miel como suplemento dietético humano porque tiene un alto valor nutricional y valor energético, tiene un poder edulcorante más fuerte que la sacarosa y es un producto de azúcar natural que se absorbe fácilmente. Caries porque es rico en hierro, calcio, aminoácidos, calorías, vitamina B6 y otras vitaminas B, y está catalogado como la fuente natural más rica de ácido pantoténico estimulante del crecimiento; propanol; por lo tanto, la miel de caña de azúcar es una materia prima ideal para la industria alimenticia, (Narváez, 2002).
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T1/img-24.png', alt='Texto que describa la imagen')



    p.mb-5 A continuación, se describen los pasos para el procesamiento de caña panelera para la obtención de miel:




    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/T1/img-25.svg', alt='Texto que describa la imagen')
        

      .tarjeta.fnd-1.p-3(x="12.2%" y="84%" tooltip="" numero="")
        h5 Extracción de jugos
        p La caña se somete a compresión en los rodillos o mazas del molino, que facilitan el drenaje del líquido de los tallos. Aquellos con 58 % a 63 % de recuperación se consideraron satisfactorios. Los productos finales en esta etapa son jugo crudo y bagazo; el primero, es la materia prima para hacer miel de caña de azúcar y el segundo, es el combustible que se utiliza para el quemador después del secado, (Osorio, 2007).

      .tarjeta.fnd-1.p-3(x="37.8%" y="84%" tooltip="" numero="")
        .h5.mb-2 Limpieza de jugos
        p En esta fase se retiran impurezas gruesas de carácter no nutricional por medios físicos (decantación y flotación en el prelimpiador), calientes (en las primeras pailas) y bioquímicos (con los aglutinantes). El jugo crudo (guarapo) y sin clarificar se limpia en frío utilizando un sistema de decantación natural, por efecto de la gravedad, desarrollado por el centro de investigación para el mejoramiento de la agroindustria panelera (CIMPA) y que se ha denominado prelimpiador. Este conector retiene por precipitación una importante proporción de los sólidos contenidos en el jugo de la caña, como partículas de tierra, lodo y arena; paralelamente, por flotación, el prelimpiador separa partículas livianas como bagacillo, hojas, insectos, etc., (Osorio, 2007).

      .tarjeta.fnd-1.p-3(x="63.8%" y="84%" tooltip="" numero="")
        .h5.mb-2 Clarificación
        p Esta fase se lleva a cabo en una paila recibidora o descachazadora y consiste en remover la torta de filtración de sólidos suspendidos como caña, hojas, arena, tierra, materia coloidal y sólidos solubles del jugo de caña. La limpieza de los jugos ocurre gracias a la acción combinada del calentamiento suministrado por la hornilla y la acción aglutinante de ciertos compuestos naturales como los cadillos, el balso, el guásimo, el juan blanco, el san Joaquín, entre otros. El control de esta operación debe ser preciso para la calidad del jugo si se desea producir miel, pues la presencia de precipitaciones no eliminados en este proceso afecta directamente la calidad del producto final, reflejada en una cristalización, (Osorio, 2007).

      .tarjeta.fnd-1.p-3(x="89.7%" y="84%" tooltip="" numero="")
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
