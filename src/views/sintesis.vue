<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo desarrolla habilidades integrales para la gestión responsable de la información, orientadas a la localización, análisis y aplicación ética de los contenidos en contextos académicos. Se enfoca en la optimización del entorno de aprendizaje, el dominio de la estructura y comprensión de los textos, así como en el uso de metodologías de lectura y síntesis que fortalecen el pensamiento crítico. Asimismo, aborda la validación de fuentes bajo criterios de confiabilidad, el manejo normativo de las citas bibliográficas y la protección de la identidad digital, con el propósito de prevenir el plagio y promover la autonomía intelectual, el razonamiento lógico y el rigor en la producción académica.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis del componente formativo Estrategias para la búsqueda, evaluación y uso ético de la información, aborda de manera integral la gestión responsable de la información, iniciando con el reconocimiento de las condiciones y herramientas que favorecen un aprendizaje efectivo. Se enfoca en la comprensión de la estructura de los textos y en el desarrollo de técnicas de lectura y síntesis para el análisis crítico de los contenidos. Asimismo, profundiza en la evaluación rigurosa de las fuentes de información, el uso adecuado de citas y referencias, así como la protección de la identidad digital, con el fin de prevenir el plagio y fortalecer la autonomía intelectual, el rigor académico y la producción ética del conocimiento.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
