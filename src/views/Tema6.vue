<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Seguridad y privacidad en internet

    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema6/img-01.png', alt='')

    .row.justify-content-center.mb-4
      .col-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/introduccion/img-02.svg', alt='')
      .col-11
        p(data-aos="fade-left") La seguridad y la privacidad en internet se han consolidado progresivamente como temas de creciente interés y relevancia en el entorno digital, por lo que resulta indispensable que las personas cuenten con los conocimientos necesarios para que su interacción en este ámbito sea más segura y transparente.
        p(data-aos="fade-left") Algunos de estos aspectos son:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-7.order-2
        .row.align-items-center.mb-4(data-aos="zoom-in")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-1
              h3.mb-0.ms-3 A. Rastreando su uso de internet
        p.mb-4 Cuando se accede a determinados sitios #[i web], el servidor envía una #[i cookie] al navegador. En visitas posteriores, el servidor #[i web] lee dicha #[i cookie] con el fin de reconocer al usuario. Este archivo puede utilizarse con diversas finalidades, entre ellas:
        ul.lista-ul
          li 
            <i class="fa-solid fa-life-ring bg-color-2"></i>
            | Guardar la contraseña y usuario que se registró en el sitio. 
          li
            <i class="fa-solid fa-life-ring bg-color-2"></i>
            | Recordar las opciones que se seleccionaron en el sitio. 
          li 
            <i class="fa-solid fa-life-ring bg-color-2"></i>
            | Rastrear los movimientos en el sitio. 
      .col-lg-5.col-md-6.col-8.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema6/img-02.png', alt='')

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C02.color-primario.p-4
          p.mb-0 Muchos sitios #[i web] utilizan el rastreo de información con fines de mercadeo, a partir del cual se construyen perfiles de los usuarios según los enlaces consultados en visitas anteriores, permitiendo mostrar productos o contenidos potencialmente acordes con sus intereses. No obstante, si este tipo de seguimiento se percibe como una invasión a la privacidad, es posible desactivar las #[i cookies] desde las opciones de configuración del navegador #[i web].

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 B. Seguridad del nombre de usuario y la contraseña

    .row.no-gutters.align-items-center.mb-4.style___box_1.m-0(data-aos="zoom-in")
      .col-xl-auto.px-0
        figure.d-none.d-xl-block
          img.img-hero(src='@/assets/curso/tema6/img-03.png', alt='').m-auto
      .col-xl.px-0
        .d-flex.align-items-start
          img.icon-inline.d-none.d-lg-block.me-3(src='@/assets/curso/tema6/img-04.png' alt="")
        p.mb-0 Algunas personas buscan obtener información de equipos informáticos mediante el #[i hackeo], entendido como el acceso no autorizado a sistemas digitales. Una vez que el atacante logra ingresar al computador, puede identificar vulnerabilidades del sistema y utilizarlas para ampliar progresivamente el acceso a archivos y datos almacenados.

    .BMG1.px-md-5.px-4
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-10.col-12
          p.mb-4 Por esta razón, se recomienda tener en cuenta las siguientes orientaciones, las cuales contribuyen a fortalecer la seguridad del computador y de las cuentas digitales:
          ol.lista-ol--cuadro.lista-ol--separador
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 1
              | Escoger una contraseña que contenga mayúsculas, minúsculas, caracteres numéricos y alfabéticos, conformando una frase extensa. 
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 2
              | Definir distintas contraseñas para todas sus cuentas: Facebook, correo(s), X, etc. 
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 3
              | Mantener actualizados los programas (#[i software]) utilizados. 
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 4
              | Instalar un antivirus en el computador personal y activar el #[i firewall]. 
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 5
              | Asignar una clave para acceder al computador personal. 
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 6
              | Sospechar de los mensajes que solicitan detalles de las cuentas.  

    .tarjeta.color-acento-botones.p-4.p-md-5.mb-4(data-aos="fade-right")(style="background-color:#E1E4FF")
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-3.mb-4.mb-md-0
          img(src="@/assets/curso/tema6/img-05.svg")
        .col-md.col-lg-6
          #t_7_1.titulo-segundo.color-acento-contenido.mb-3
            h4(style="color:#000 !important") Manual interno de políticas, directrices y procedimientos para el uso de las TIC - SENA
          p.mb-4(style="color:#000 !important") Presenta un documento institucional que establece políticas, directrices y procedimientos para el uso adecuado de las TIC en el SENA, orientado a garantizar la disponibilidad, calidad y buen manejo de los servicios tecnológicos, fortaleciendo la infraestructura digital y apoyando el cumplimiento de la misión institucional.
          a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Manual_interno_de_politicas_directrices_y_procedimientos_para_el_uso_de_las_TIC.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        p Con el surgimiento y la expansión de las redes sociales en internet, también han emergido cuestionamientos relacionados con el uso de los datos personales por parte de plataformas como Facebook y servicios similares. En este contexto, resulta pertinente que las personas que utilizan estas redes, realicen ajustes en la configuración de privacidad, tales como: 

    .row.justify-content-center.mb-4
      .col-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/introduccion/img-02.svg', alt='')
      .col-9
        ol.lista-ol--cuadro.lista-ol--separador
          li(data-aos="fade-left") 
            .lista-ol--cuadro__vineta
              span 1
            | Establecer el perfil como privado, evitando su disponibilidad pública.
          li(data-aos="fade-left") 
            .lista-ol--cuadro__vineta
              span 2
            | Limitar las opciones de visualización, permitiendo el acceso únicamente a familiares, compañeros de estudio o de trabajo. 

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C02.color-primario.p-4
          p.mb-0 Dado que estas plataformas evolucionan de manera constante, los parámetros de seguridad también se actualizan con frecuencia. Por ello, se recomienda revisar periódicamente dichas configuraciones, a fin de garantizar que las cuentas mantengan niveles adecuados de seguridad y protección de la información personal.


</template>

<script>
export default {
  name: 'Tema6',
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
