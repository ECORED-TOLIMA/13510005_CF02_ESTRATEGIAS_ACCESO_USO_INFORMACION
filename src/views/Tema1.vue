<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Espacios, elementos y condiciones para estudiar
    
    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema1/img-01.png', alt='')

    p.mb-4 El éxito en la formación no depende únicamente del esfuerzo individual, sino de la armonización entre el individuo y su contexto. Establecer entornos, medios y estados óptimos, es fundamental para potenciar la asimilación de datos, la capacidad de análisis y el enfoque cognitivo.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 El escenario de trabajo

    .row.justify-content-center.mb-4
      .col-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/introduccion/img-02.svg', alt='')
      .col-11
        p.mb-0(data-aos="fade-left") Es fundamental designar un lugar fijo y específico para las tareas intelectuales, diferenciándolo claramente de los espacios destinados al descanso. Este puede ser un entorno físico (como una sala de estudio o una biblioteca) o un ecosistema virtual, siempre que asegure una organización adecuada y una gestión ordenada de los contenidos.

    p.mb-4 Un ambiente propicio debe cumplir con:

    .row.justify-content-center.mb-4
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img-02.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Aislamiento de interferencias
            h5.t2.mb-2 Aislamiento de interferencias
            p Neutralización de ruidos y elementos visuales que fragmenten la atención.
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img-03.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Ergonomía y salud
            h5.t2.mb-2 Ergonomía y salud
            p Una infraestructura que permita una postura adecuada, junto con aireación y luminosidad suficientes.
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img-04.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Disponibilidad de herramientas
            h5.t2.mb-2 Disponibilidad de herramientas
            p Conectividad y cercanía a las fuentes de consulta necesarias.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Herramientas de apoyo educativo

    p.mb-4 Se consideran recursos de estudio todos aquellos instrumentos que facilitan el procesamiento de la información. Se dividen principalmente en:

    .row.justify-content-center.mb-4
      .col-lg-6.col-10.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema1/img-05.png', alt='')
      .col-lg-6       
        LineaTiempoD.color-acento-botones
          .row.justify-content-center(numero="1" titulo="Soportes analógicos")
            .col-12.order-lg-2.order-3
              p.mb-0 Útiles tradicionales como libretas, textos impresos, marcadores y material de escritura.
          .row.justify-content-center(numero="2" titulo="Tecnología y conectividad")
            .col-12.order-lg-2.order-3
              p.mb-0 #[i Hardware] (computadoras, tabletas) y #[i software] especializado que agilice la labor académica.
          .row.justify-content-center(numero="3" titulo="Fuentes de información digital")
            .col-12.order-lg-2.order-3
              p.mb-0 Repositorios, bases de datos científicas y plataformas de gestión bibliográfica.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Variables para un aprendizaje eficaz

    p.mb-4 El rendimiento académico está influenciado por un conjunto de factores internos y externos, encontrando:

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img-06.svg' alt="")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FED2C7;")
            h4.text-center.mt-5(style="color:#12263F") Ámbito biológico
            p.text-center.mb-0(style="color:#12263F") Un descanso reparador y una nutrición equilibrada para mantener la energía mental.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img-07.svg' alt="")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FED2C7;")
            h4.text-center.mt-5(style="color:#12263F") Ámbito cognitivo y emocional
            p.text-center.mb-0(style="color:#12263F") Mantener la motivación, definir objetivos claros y gestionar el estrés con una actitud resiliente.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img-08.svg' alt="")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FED2C7;")
            h4.text-center.mt-5(style="color:#12263F") Gestión cronológica
            p.text-center.mb-0(style="color:#12263F") La implementación de calendarios y hábitos de estudio disciplinados para optimizar el uso del tiempo.

    p.mb-4.text-center La siguiente imagen, detalla un poco lo ideal para un espacio de trabajo:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Espacio ideal para el estudio  

      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema1/figura-1-1v.svg', alt='Figura 1 que representa los espacios para el estudio y los ambientes necesarios para un aprendizaje efectivo, ilustrando el espacio en el hogar, la biblioteca y el espacio virtual, junto con condiciones clave como la ausencia de distracciones, una postura cómoda, adecuada iluminación y ventilación, y la disponibilidad de recursos necesarios para el estudio.', style="width: 1043px").m-auto
      .col-12
        figure.movil
          img(src='@/assets/curso/tema1/figura-1-2v.svg', alt='Figura 1 que representa los espacios para el estudio y los ambientes necesarios para un aprendizaje efectivo, ilustrando el espacio en el hogar, la biblioteca y el espacio virtual, junto con condiciones clave como la ausencia de distracciones, una postura cómoda, adecuada iluminación y ventilación, y la disponibilidad de recursos necesarios para el estudio.', style="width: 1043px").m-auto


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
