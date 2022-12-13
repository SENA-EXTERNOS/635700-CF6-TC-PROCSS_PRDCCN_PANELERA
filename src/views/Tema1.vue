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


    Separador

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Proceso de concentración de jugo de caña (cocinar jugo)

    p.mb-5 A continuación, se muestra el proceso de concentración de jugo de caña. 
    
























      
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
