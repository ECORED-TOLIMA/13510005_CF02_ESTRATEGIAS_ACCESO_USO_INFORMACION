<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-4
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/introduccion/img-01.png", data-aos="zoom-in")
      .col-lg-8
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg
            p En este componente formativo se abordarán las habilidades académicas fundamentales para el estudio y la gestión responsable de la información, partiendo del reconocimiento de los espacios, elementos y condiciones que favorecen el aprendizaje. Se analizará la estructura de los textos, sus conceptos y tipos, junto con técnicas para tomar notas y estrategias de comprensión lectora que permitan organizar, interpretar y asimilar la información de manera efectiva en contextos educativos.  
            .cajon.cajon.C02.color-primario.p-4.mb-3.p-3
              p.mb-0(data-aos="fade-down") Asimismo, se profundizará en el uso adecuado de referencias y citas, abordando sus conceptos y formatos, así como en las técnicas y criterios para evaluar la calidad, confiabilidad y pertinencia de las fuentes de información. El componente también incluirá aspectos clave sobre seguridad y privacidad en internet, además del reconocimiento del plagio y la propiedad intelectual, promoviendo prácticas éticas en el uso de la información.
        .row.align-items-start.mb-10(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/introduccion/img-02.svg", style="max-width: 90px").mx-auto
          .col-lg
            p(data-aos="fade-left") Partiendo de lo anterior, se invita a acceder al siguiente contenido, el cual introduce y contextualiza los temas que se desarrollarán a lo largo de este componente formativo:

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/Ih0FYIMFzHY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
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
