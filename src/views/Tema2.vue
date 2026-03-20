<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Estructura de textos: concepto, tipos

    .row.mb-4
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img-01.png", data-aos="zoom-in")
      .col-lg-7
        .row.align-items-start.mb-4(data-aos="fade-left")
          .col-lg  
            .cajon.cajon.C02.color-primario.p-4.mb-3.p-3
              p.mb-0(data-aos="fade-down") Para interactuar eficazmente con el conocimiento, es necesario descifrar la manera en que se articulan los discursos escritos. Entender la configuración de un texto dota al aprendiz de herramientas para evaluar y producir contenidos con rigor profesional.
        .row.align-items-start.mb-4(data-aos="fade-left")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-1
              h3.mb-0.ms-3 Definición
        p.mb-3.mb-lg-5 Se define como la red de relaciones lógicas que articulan y sostienen las ideas de un autor. Aunque la mayoría de los textos siguen una estructura de apertura, desarrollo y cierre, esta organización puede variar según el propósito comunicativo. Reconocer este orden permite:
        .row.align-items-start.mb-0(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/introduccion/img-02.svg", style="max-width: 90px").mx-auto
          .col-lg
            ul.lista-ul.mb-0
              li.mb-0 
                <i class="fa-solid fa-life-ring bg-color-2"></i>
                | Diferenciar las tesis centrales de los argumentos secundarios.
              li.mb-0 
                <i class="fa-solid fa-life-ring bg-color-2"></i>
                | Mejorar la síntesis de información y la redacción de documentos técnicos.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Categorización según el propósito comunicativo

    p.mb-4 Los textos se agrupan según la función que desempeñan para el lector de la siguiente manera:

    .cajon.cajon.C01.p-5.mb-5
      SlyderB(:datos="datosSlyder")


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    indicadorTarjetaFlip: true,
    indicadorTarjetaSlide: true,
    datosSlyder: [
      {
        texto:
          '<b>Tipo de texto:</b> narrativo <br><br><b>Función principal:</b> relatar sucesos o experiencias en orden cronológico. <br><br><b>Contexto de uso:</b> bitácoras, crónicas y estudios de caso.',
        imagen: require('@/assets/curso/tema2/img-02.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Tipo de texto:</b> descriptivo <br><br><b>Función principal:</b> detallar rasgos, procesos o atributos de un objeto o situación. <br><br><b>Contexto de uso:</b> guías técnicas y catálogos.',
        imagen: require('@/assets/curso/tema2/img-03.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Tipo de texto:</b> expositivo <br><br><b>Función principal:</b> presentar datos de forma neutral y didáctica sobre un tema. <br><br><b>Contexto de uso:</b> artículos científicos y manuales escolares.',
        imagen: require('@/assets/curso/tema2/img-04.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Tipo de texto:</b> argumentativo <br><br><b>Función principal:</b> defender un punto de vista mediante pruebas y razonamiento. <br><br><b>Contexto de uso:</b> ensayos críticos y artículos de opinión.',
        imagen: require('@/assets/curso/tema2/img-05.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Tipo de texto:</b> instructivo <br><br><b>Función principal:</b> proporcionar una secuencia de comandos o pasos a seguir. <br><br><b>Contexto de uso:</b> protocolos técnicos y reglamentos operativos.',
        imagen: require('@/assets/curso/tema2/img-06.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
    ],
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
