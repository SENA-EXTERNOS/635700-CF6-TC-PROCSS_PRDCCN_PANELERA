<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Procedimientos de ajuste

    .row.justify-content-around.align-items-center
      .col-md-2
        figure
          img(src='@/assets/curso/temas/T2/img-1.svg', alt='Texto que describa la imagen')
      .col-md-10.mb-4.mb-md-0
        p.mb-5 Durante la cristalización, el orden del sistema aumenta, partiendo de un sistema relativamente desordenado (solución) a un sistema más ordenado (cristal). La mayoría de las transiciones de esta fase, que se encuentran en la práctica, ocurren a presión constante, por lo que la energía de <i>Gibbs</i> se usa para describir un sistema en el que los períodos están en equilibrio. Por lo tanto, para que ocurra una transición de fase en un sistema, este efecto debe estar asociado con una disminución en la energía de <i>Gibbs</i> total del sistema, es decir ΔG<0 a presión y temperatura constantes. Por lo tanto, cuanto mayor sea la energía de<i> Gibbs</i>, mayor será la fuerza promotora de la cristalización, (Grases et al., 2000).

      
    p.mb-5 A continuación, se exponen las fases de cambio del producto para llegar a la cristalización: 


    .tarjeta.tarjeta--slyder.p-4.mb-5
      LineaTiempoC.color-acento-botones(text-small)
        .row.justify-content-around.align-items-center(titulo="paso 1")
          .col-md-8.mb-4.mb-md-0
            p.mb-5 En muchos sistemas, las transiciones de fase no ocurren cuando esto es termodinámicamente posible (cuando el sistema está sobresaturado), sino en condiciones que a menudo exceden el equilibrio. La estabilidad del sistema en condiciones alejadas del equilibrio se debe a que el inicio de las transiciones de fase depende de la formación de nuevas fases en el sistema, la llamada nucleación, (Grases et al., 2000).
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T2/img-2.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="paso 2")
          .col-md-8.mb-4.mb-md-0
            p.mb-5 El proceso de cristalización de la miel, se ve afectado por varios factores, entre ellos: sobresaturación, temperatura de almacenamiento, presencia de partículas.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T2/img-3.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="paso 3")
          .col-md-8.mb-4.mb-md-0
            p.mb-5 <b>Sobresaturación:</b> la reacción tiene una velocidad limitada en la superficie y todo el proceso consta de dos fases sucesivas, una fase de difusión y una fase interfacial, y ninguna de estas ocurre si la solución no está sobresaturada. Ambos procesos ayudan a determinar la tasa de crecimiento de los cristales, pero mientras que la resistencia al transporte molecular domina a la sobresaturación “normal” y a altas temperaturas (superiores a 50 oC), la resistencia de los enlaces moleculares, juega un papel importante a baja temperatura y sobresaturación. (García, 2001)

        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T2/img-4.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="paso 4")
          .col-md-8.mb-4.mb-md-0
            p.mb-5 <b>Temperatura de almacenamiento:</b> es bien sabido que la velocidad de cristalización, la forma y el tamaño de las partículas, dependen de la constitución de la miel y la temperatura de almacenamiento. Se observaron dos tendencias distintas: a medida que disminuye la temperatura, disminuye la solubilidad del azúcar, favoreciendo la granulación o cristalización; por el contrario, a bajas temperaturas, la viscosidad aumenta y la movilidad molecular se retrasa o se reduce, lo que da como resultado, velocidades de cristalización reducidas. (Lupano, 1997)
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T2/img-5.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center(titulo="paso 5")
          .col-md-8.mb-4.mb-md-0
            p.mb-5 <b>Presencia de partículas:</b> la presencia de impurezas crea defectos superficiales que favorecen el crecimiento de planos cristalinos (García, 2001).

        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/T2/img-6.png', alt='Texto que describa la imagen')


    h2 Buenas prácticas de manufactura


    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/T2/img-7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        
        p.mb-0 Se entiende por Buenas Prácticas de Manufactura BPM, aquellos principios básicos y prácticas generales de higiene en la manipulación, preparación, elaboración, envasado, almacenamiento, transporte y distribución de alimentos para consumo humano, con el objeto de garantizar que los productos se fabriquen en condiciones sanitarias adecuadas y se disminuyan los riesgos inherentes a la producción.



    ul.lista-ul--color.lista-ul--separador
      li 
        i.fas.fa-leaf
        | <b>¿Qué dice la resolución 779 de 2006, en relación con las BPM?</b>



    .row.mb-3
      .col-md-4
        figure
          img(src='@/assets/curso/temas/T2/img-8.png', alt='Texto que describa la imagen')
      .col-md-8.mb-4.mb-md-0
        p.mb-5 <b>Artículo 7°.</b> Requisitos para la producción de panela a partir de mieles vírgenes en las centrales de acopio y procesamiento. Para la elaboración de panela sólo se podrá utilizar como materia prima las mieles vírgenes procedentes de trapiches paneleros autorizados, siempre y cuando cumplan con los siguientes requisitos:
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span a
            | Que las centrales de acopio y procesamiento de mieles estén autorizadas por la entidad territorial de salud correspondiente.
          li 
            .lista-ol--cuadro__vineta
              span b
            | Que la miel virgen proceda de trapiches autorizados por la entidad territorial de salud correspondiente.
          li 
            .lista-ol--cuadro__vineta
              span c
            | Que la miel se transporte de los trapiches a las centrales de acopio y procesamiento en vehículos autorizados por la entidad territorial correspondiente.
          li 
            .lista-ol--cuadro__vineta
              span d
            | Las centrales de acopio y procesamiento de mieles deben garantizar la inocuidad de las mieles utilizadas en el procesamiento de la panela.
            
    p.mb-5 El siguiente video muestra las condiciones sanitarias para evaluar los trapiches paneleros, según se establecen en la Resolución 779/2006. Visualícelo con atención y procure tomar nota, en su libreta personal de apuntes, de los aspectos más destacados:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/gRdaPO5hG4M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      





    ul.lista-ul--color.lista-ul--separador.mb-5
      li 
        i.fas.fa-leaf
        | <b>Aseguramiento y control de calidad  </b>

    
    .row.justify-content-around.align-items-center.mb-5
      .col-md-2
        figure
          img(src='@/assets/curso/temas/T2/img-9.svg', alt='Texto que describa la imagen')
      .col-md-10.mb-4.mb-md-0
        p.mb-5 Todo procesamiento, empaque, almacenamiento, distribución, mercadeo y venta de panelas debe estar sujeto a controles de calidad y seguridad apropiados. Los programas de control de calidad y seguridad deben prevenir errores evitables y reducir los errores naturales o inevitables a un nivel que no represente un riesgo para la salud.


    ul.lista-ul--color.lista-ul--separador
      li 
        i.fas.fa-leaf
        | <b>Sistema de Control</b>

    p La implementación del procedimiento de control asegura la mejora continua en todas las fases de la fabricación de panela.
    p.mb-5 Entre muchos aspectos importantes del control, se pueden mencionar los siguientes:


    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.config-slyder-F.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/T2/img-10.svg' alt='AvatarTop')
        h2.text-center Sistema de Control
        p.text-center Un ingenio azucarero debe contar con un sistema preventivo de aseguramiento y control de calidad que abarque todas las etapas desde la compra de materias primas hasta la distribución de los productos terminados; incluye:
        ol.lista-ol
          li 
            span.text-bold 1. 
            | Descripciones sobre las materias primas y productos terminados. 
          li 
            span.text-bold 2. 
            | Protocolo sobre el trapiche, equipos y proceso.

      .tarjeta.config-slyder-F.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/T2/img-10.svg' alt='AvatarTop')
        h2.text-center Requisitos de exportación de la panela, registro y vigilancia sanitarios
        p.text-center Las panelas destinadas a la exportación deben cumplir con las buenas prácticas de fabricación. Las buenas prácticas deben ser aprobadas por la autoridad sanitaria competente. El certificado de conformidad BPM tiene una validez de seis meses a partir de la fecha de emisión, (Resolución 779 de 2006, Art. 15).

      .tarjeta.config-slyder-F.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/T2/img-10.svg' alt='AvatarTop')
        h2.text-center Registro Sanitario
        p.text-center Las panelas a las cuales durante el proceso de producción se les haya adicionado saborizantes, deben obtener el registro sanitario al tenor de lo dispuesto en el artículo 41 del Decreto 3075 de 1997 y las disposiciones que lo modifiquen, adicionen o sustituyan, (Resolución 779 de 2006, Art. 16).

      .tarjeta.config-slyder-F.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/T2/img-10.svg' alt='AvatarTop')
        h2.text-center Vigilancia y Control
        p.text-center La Administración Nacional de Alimentos y Medicamentos Invima, en coordinación con el Servicio Territorial de Salud, realiza las funciones de inspección, vigilancia y control previstas en la Ley 715 de 2001, por lo cual se pueden tomar medidas de seguridad y destinar las sanciones correspondientes.

      .tarjeta.config-slyder-F.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/T2/img-10.svg' alt='AvatarTop')
        h2.text-center Visitas de inspección
        p.text-center La autoridad sanitaria deberá realizar dos (2) inspecciones anuales a los ingenios azucareros para verificar las condiciones higiénicas especificadas en los reglamentos técnicos.

      .tarjeta.config-slyder-F.p-3
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/T2/img-10.svg' alt='AvatarTop')
        h2.text-center Certificado y evaluación de la conformidad
        p.text-center La evaluación de la conformidad debe ser realizada por la Administración Estatal de Alimentos y Medicamentos, el Invima y las unidades territoriales estructurales de salud con competencia técnica. El certificado de evaluación de la Conformidad podrá ser expedido por el Instituto Nacional de Atención de Medicamentos y Alimentos, Invima, o cuando sea del caso, por los organismos de certificación acreditados o reconocidos por dicha entidad.


    p.mb-5 En cuanto al procedimiento para el ingreso correcto del personal al trapiche panelero, se deben tener presentes los siguientes aspectos:

    .tarjeta.tarjeta--slyder.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.mb-3 <i>Disposiciones</i>
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span 1
                | Colocarse la dotación correspondiente según el área en la que se encuentre desempeñando sus labores. 
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Lavarse las manos con agua y jabón antes de ingresar al trapiche a desempeñar sus labores. 
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Las uñas deben estar cortas y limpias, además del uso prohibido de esmaltes para el ingreso al trapiche. 
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | No debe llevar relojes, collares, pulseras, pendientes u otros accesorios que puedan suponer un riesgo de contaminación. 
              li
                .lista-ol--cuadro__vineta
                  span 5
                | Mantener la esmerada limpieza e higiene personal. 
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | Mantener el cabello recogido y cubierto totalmente. 
              li 
                .lista-ol--cuadro__vineta
                  span 7
                | El personal que visite los sitios de producción debe seguir las medidas de protección e higiene prescritas.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-11.png', alt='Texto que describa la imagen')


        .row
          .col-md-6.mb-4.mb-md-0
            h4.mb-3 <i>Procedimiento para el uso adecuado de elementos de protección personal</i>
            p.mb-4 El uso correcto de protección personal responde a la seguridad de los empleados y la no contaminación de la panela.
            p.mb-4 Para evitar en lo posible la contaminación, el personal del trapiche debe cumplir con los siguientes requisitos: 
            p 
              i.fas.fa-circle.fas-circulo.me-2.text-small
              | Los uniformes deben estar limpios y en buen estado.  
            p 
              i.fas.fa-circle.fas-circulo.me-2.text-small
              | Se debe mantener la limpieza e higiene personal. 
            p 
              i.fas.fa-circle.fas-circulo.me-2.text-small
              | Aplicar buenas prácticas higiénicas en sus labores como lavarse las manos con agua y jabón y no usar joyas, ni comer ni fume, ni beber en las áreas de proceso. 
            p 
              i.fas.fa-circle.fas-circulo.me-2.text-small
              | Todas las personas que realizan actividades de manipulación de la panela deben tener capacitación en prácticas higiénicas de manipulación de alimentos. 
            p 
              i.fas.fa-circle.fas-circulo.me-2.text-small
              | El trapiche debe tener y realizar un plan de capacitación dirigido a operarios, para llevar a cabo las tareas que sean asignadas. 
            p 
              i.fas.fa-circle.fas-circulo.me-2.text-small
              | Cualquier persona que tenga una herida no podrá manipular la panela o tocar superficies que estén en contacto con la misma, hasta que la herida este totalmente curada.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-12.png', alt='Texto que describa la imagen')


        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.mb-2 <i>Disposiciones para el uso de elementos de protección personal:</i>
            p.mb-4 <i><b>Cabeza</b></i>
            p.mb-1 Se recomienda una cubierta superior o cofia, si se expone a la humedad o bacterias.
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span 1
                | Deberán ser de material que no sea fácilmente inflamable y durables para resistir el lavado y la desinfección. 
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Debe verificarse que no se encuentre en mal estado (Rota, sucia, rasgada).  
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Se debe suministrar al menos 2 por operario con el fin de ser lavadas luego de usarla.  
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Están mejor hechos de telas que sean fáciles de lavar y que absorban el sudor.
              li.mb-5
                .lista-ol--cuadro__vineta
                  span 5
                | <b>Forma de colocarse: </b>
            p.mb-0 Si es para mujeres, el cabello debe estar bien recogido.
            p.mb-5 La cofia debe sujetarse con ambas manos y luego colocarse sobre la cabeza para cubrir cierta parte de la frente para evitar la caída del cabello. Para cubrir toda la zona de la cabeza para que no se escape el pelo, átala, sujeta ambas tiras y ajusta al tamaño de la cabeza. Cubrir toda el área de la cabeza. 
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-13.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.mb-3 <i>Ojos</i>
            p.mb-2 Se recomienda el uso de gafas de protección: en caso de exposición a salpicaduras de productos químicos o en presencia de gases, vapores y humos.
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span 1
                | Debe verificarse que no se encuentren en mal estado, rayadas, partidas.  
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Se deben higienizar con frecuencia.  
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Usar solo en el área de proceso. 
              li
                .lista-ol--cuadro__vineta
                  span 4
                | <b>Forma de colocarse: </b>
                <br>
              |  Sostenga cada pata de las gafas con ambas manos y levántelas hacia su cara. Colócalos directamente sobre la nariz.
                 
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-14.png', alt='Texto que describa la imagen')


        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.mb-3 <i>Sistema Respiratorio</i>
            p.mb-2 Se sugiere usar una máscara facial si se encuentra en un entorno con partículas en el aire, como polvo de algodón o cemento y otras partículas de piezas pulidas.
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span 1
                | Se debe inspeccionar para verificar si están dañados (por ejemplo, quebraduras) y para verificar su integridad estructural.   
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Antes de ponerse una mascarilla o un respirador, lávese las manos por completo con agua y jabón. Utilice un desinfectante para mano a base de alcohol si no tiene agua y jabón.  
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | No se debe compartir. 
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Cambie el tapabocas con frecuencia.  
              li
                .lista-ol--cuadro__vineta
                  span 5
                | <b>Forma de colocarse: </b>
                <br>
              |  Retire la máscara de la bolsa y salga de la alianza. Primero, ate una cinta o elástico alrededor del centro de la cabeza y el cuello.
                 
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-15.png', alt='Texto que describa la imagen')

        
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.mb-3 <i>Oídos</i>
            p.mb-2 Se recomienda el uso de tapa oídos tipo Copa u Orejeras, los cuales atenúan el ruido 33 dB aproximadamente. Cubren la totalidad de la oreja. 
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span 1
                | Se debe inspeccionar verificar que no estén dañados.    
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Las almohadillas pueden lavarse con agua tibia y jabón, debiéndose enjuagar bien.   
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Normalmente es necesario cambiar las almohadillas dos o más veces al año, siempre que se vuelvan rígidas, se agrieten o no sean capaces de formar un cierre hermético.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | No estire ni abuse del arnés ya que esto reducirá la protección ofrecida.  
              li
                .lista-ol--cuadro__vineta
                  span 5
                | <b>Forma de colocarse: </b>
                <br>
              p.mb-4  Deben encerrar las orejas completamente formando un cierre hermético con la cabeza. Ajuste las copas para que las almohadillas se presionen uniformemente alrededor de la oreja para una reducción de ruido óptima.
              p.mb-0 Aparte el cabello para evitar que quede entre las almohadillas y la cabeza.
              p No use tapas u otros accesorios que puedan interferir con el sello.

                 
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-16.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.mb-3 <i>Manos </i>
            p.mb-2 Se recomienda el uso de guantes de carnaza.
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span 1
                | Se debe verificar que la talla sea la apropiada.    
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Los guantes que se encuentren en mal estado, rotos, rasgados, o impregnados no deben ser utilizados.  
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Se debe revisar que no haya ningún animal (insectos) dentro de los guantes. 
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | <b>Forma de colocarse: </b>
                <br>
              p 
                i.fas.fa-circle.fas-circulo.me-2.text-small
                | Introduce la mano dentro del guante. 
              p 
                i.fas.fa-circle.fas-circulo.me-2.text-small
                | Extienda los guantes para que cubran la parte del puño.

                 
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-17.png', alt='Texto que describa la imagen')


        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.mb-3 <i>Manos </i>
            p.mb-2 Guantes aislantes de altas temperaturas largas.
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span 1
                | Protección térmica hasta 150 °C    
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Interior y exterior del guante lavables para una mejor higiene 
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Aguante a aceites, grasas y a los principales productos detergentes. 
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Inspeccione los guantes en busca de grietas y rasgaduras antes de volver a utilizarlos. 
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | No utilice estos guantes cerca de maquinaria en movimiento.  
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | Ponga los guantes en manos secas y limpias.

                 
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-18.png', alt='Texto que describa la imagen')



        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.mb-3 <i>Píes </i>
            p.mb-2 Se recomienda el uso de botas de seguridad Impermeables: 
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span 1
                | El uso de las botas debe ser personal.     
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Los zapatos deben revisarse periódicamente. Si están en malas condiciones (por ejemplo: suelas rotas, punteras mal mantenidas, desgaste, deformación o partes superiores rotas), deben cambiarse. 
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Se debe utilizar la talla apropiada. 
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Luego de usarlas se debe hacer una limpieza y desinfección. 
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | <b>Forma de colocarse: </b>
                <br>
              p 
                i.fas.fa-circle.fas-circulo.me-2.text-small
                | Se deben colocar los calcetines.  
              p 
                i.fas.fa-circle.fas-circulo.me-2.text-small
                | Verificar que no haya ningún animal u objeto extraño dentro de las botas. 
              p 
                i.fas.fa-circle.fas-circulo.me-2.text-small
                | Introduzca cada uno de los pies dentro de la bota. 
              p 
                i.fas.fa-circle.fas-circulo.me-2.text-small
                | El pantalón o el overol debe quedar dentro de la bota.

                 
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-19.png', alt='Texto que describa la imagen')



        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.mb-3 <i>Cuerpo </i>
            p.mb-2 Se recomienda el uso del overol blanco o de colores claros con cierres o cremalleras. 
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span 1
                | Deben estar fabricados de tejidos que se lavan con facilidad y que absorban el sudor.     
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Preferiblemente debe ser de uso personal. 
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Se debe revisar que no se encuentre en mal estado (rotos, rasgados, manchados).  
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Se debe suministrar al menos 2 por operario, con el fin de lavarlos luego de ser usados. 
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | <b>Forma de colocarse: </b>
                <br>
              p 
                i.fas.fa-circle.fas-circulo.me-2.text-small
                | Verificar que sea la talla adecuada.  
              p 
                i.fas.fa-circle.fas-circulo.me-2.text-small
                | Se debe introducir las piernas en la parte del pantalón, posteriormente el tronco y los brazos de tal manera que cubra todo el cuerpo.  
              p 
                i.fas.fa-circle.fas-circulo.me-2.text-small
                | Cerrar cremalleras o broches. 

                 
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-20.png', alt='Texto que describa la imagen')




    h2 Normas sanitarias para la producción de panela 

    p Se trata de aquel conjunto de criterios y lineamientos que favorecerán la producción, a la vez que aseguran la salubridad del producto, la conservación de la salud y el bienestar de las personas implicadas en el proceso y la conservación de implementos e infraestructura, libres de agentes que puedan traer afectación. 
    p.mb-5 A continuación, las normas sanitarias que se deben cumplir en la producción panelera:

    .row.justify-content-center.align-items-center(titulo="")
      .col-md-8.mb-4.mb-md-0
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row.justify-content-around.align-items-center(titulo="Resolución 779 de 2006")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 [Ministerio de la Protección Social]. Establece los requisitos para la producción y venta de panela destinados al consumo humano.             
                

          .row.justify-content-around.align-items-center(titulo="Resolución 2674 de 2013")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Establece los requisitos y contextos bajo las cuales el Instituto nacional de medicamentos y alimentos – INVIMA Como autoridad de salud pública, debe emitir tarjetas, permisos o informes sanitarios.
          

          .row.justify-content-around.align-items-center(titulo="Decreto 3075 de 1997")
            .col-md-12.mb-4.mb-md-0
              p Contiene principios básicos y prácticas generales de higiene para la manipulación, preparación, procesamiento, envasado, almacenamiento, transporte y distribución de alimentos destinados al consumo humano para garantizar que los productos se produzcan en condiciones higiénicas apropiadas y minimizar los riesgos asociados con los diversos procesos de producción.

          .row.justify-content-around.align-items-center(titulo="Decreto 1774 de 2004")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Por el cual se crea la Comisión Nacional Intersectorial para la Vigilancia de la Calidad de la Panela.
          
          .row.justify-content-around.align-items-center(titulo="Resolución 333 de 2011")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Se determinan los requisitos para el etiquetado o declaración del valor nutritivo, que deben cumplir los alimentos envasados destinados al consumo humano.             
                

          .row.justify-content-around.align-items-center(titulo="Resolución 4121 de 2011")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Por el cual se modifica parcialmente la Resolución 779 de 2006, modificadas por las Resoluciones 3462 de 2008 y 3544 de 2009.
          

          .row.justify-content-around.align-items-center(titulo="Resolución 3544 de 2009")
            .col-md-12.mb-4.mb-md-0
              p Por el cual se cambia el artículo 11 y el artículo 13 de la Resolución 779 de 2006, sobre envase y rotulado respectivamente.

          .row.justify-content-around.align-items-center(titulo="Resolución 3462 de 2008")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Procedimiento de registro para la instalación de centros de acopio de miel virgen de ingenios.

      .col-md-4
        figure
          img(src='@/assets/curso/temas/T2/img-21.png', alt='Texto que describa la imagen')


    .row.justify-content-center.align-items-center.mb-5
      .col-8
        .cajon.color-acento-botones.p-4.mb-4.color-morado
          p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.





</template>

<script>
export default {
  name: 'Tema2',
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
