<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/introduccion/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Apreciado aprendiz, bienvenido a este proceso de aprendizaje orientado a conocer qué es la cristalización y el procedimiento de ajustes en la producción panelera, aplicando todo el conocimiento a criterios de desempeño en diferentes campos como en el sector académico, productivo e investigativo. En el siguiente video se describe el contexto general de los contenidos desarrollados en este documento como lo son: el proceso de concentración del jugo de caña (cocinar jugo), el trasiego de mieles, las buenas prácticas de manufactura y las normas sanitarias para la fabricación de panela. 

    
    p.mb-5 <b>¡Muchos éxitos en este proceso de formación!</b>


    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video







    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
