<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Citas, referencias, conceptos y formatos 

    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema8/img-01.png', alt='Imagen decorativa')

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Citas

    p.mb-4 Las citas permiten reconocer y otorgar crédito a las ideas de otros autores incorporadas en un texto académico, lo cual fortalece la validez, la ética y la rigurosidad del trabajo. De acuerdo con las normas vigentes de la American Psychological Association (APA), existen diversas formas de citación, que varían según la manera en que la información se integra en el escrito:

    AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--C01" data-aos="zoom-in")
      .row.justify-content-center(titulo="Cita textual corta (menos de 40 palabras)")
        .col-lg-5.order-lg-1.order-2
          p Se utiliza cuando se transcriben exactamente las palabras del autor. El texto se incluye entre comillas y se indica el apellido del autor, el año de publicación y la página.
          p.mb-0 #[b Ejemplo:]
          p “La alfabetización informacional es fundamental para desenvolverse críticamente en la sociedad digital” (Area Moreira, 2012, p. 45).
        .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema8/img-02.png', alt="Imagen decorativa")
      .row.justify-content-center(titulo="Cita textual larga (40 palabras o más)")
        .col-lg-5.order-lg-1.order-2
          p Se presenta en un bloque independiente, sin comillas, con sangría izquierda y manteniendo el mismo interlineado del texto. Al final se incluye la referencia correspondiente.
          p.mb-0 #[b Ejemplo:]
          p La alfabetización informacional implica no solo saber buscar información, sino también evaluarla, organizarla y utilizarla de manera ética y responsable en distintos contextos sociales y educativos. Este proceso es clave para la formación de ciudadanos críticos en la era digital. (Area Moreira, 2012, p. 46)
          
        .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema8/img-03.png', alt="Imagen decorativa")
      .row.justify-content-center(titulo="Cita parafraseada")
        .col-lg-5.order-lg-1.order-2
          p Se emplea cuando se expresa con palabras propias la idea de un autor. No se utilizan comillas y no es obligatorio indicar la página, aunque se recomienda hacerlo.
          p.mb-0 #[b Ejemplo:]
          p La alfabetización informacional permite a las personas analizar críticamente la información y tomar decisiones informadas en entornos digitales (Área Moreira, 2012).
        .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema8/img-04.png', alt="Imagen decorativa")
      .row.justify-content-center(titulo="Cita narrativa")
        .col-lg-5.order-lg-1.order-2
          p El apellido del autor se integra dentro del texto y entre paréntesis se incluye el año (y la página, si aplica).
          p.mb-0 #[b Ejemplo:]
          p Según Area Moreira (2012), la alfabetización informacional es una competencia esencial en los procesos educativos actuales.
        .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema8/img-05.png', alt="Imagen decorativa")
      .row.justify-content-center(titulo="Cita parentética")
        .col-lg-5.order-lg-1.order-2
          p Toda la información de la fuente se incluye al final de la frase, entre paréntesis.
          p.mb-0 #[b Ejemplo:]
          p La gestión crítica de la información es clave para el aprendizaje autónomo (Area Moreira, 2012).
        .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema8/img-06.png', alt="Imagen decorativa")
  
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-7.order-2
        .row.align-items-center.mb-4(data-aos="zoom-in")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-1
              h3.mb-0.ms-3 Importancia de la citación
        p.mb-4 El uso adecuado de las citas:
        .cajon.cajon.C02.color-primario.row.align-items-center.m-0.style___box_1.p-4(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema8/img-08.svg', alt='').m-auto
          .col-xl
            ul.lista-ul
              li.mb-0 
                i.lista-ul__vineta
                | Previene el plagio académico.
              li.mb-0 
                i.lista-ul__vineta
                | Respeta la propiedad intelectual.
              li.mb-0 
                i.lista-ul__vineta
                | Fortalece la credibilidad del trabajo.
              li.mb-0 
                i.lista-ul__vineta
                | Permite a otros lectores localizar las fuentes originales.
      .col-lg-5.col-md-6.col-8.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema8/img-07.png', alt='Imagen decorativa')

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Parafraseo 

    .row.justify-content-center.mb-4
      .col-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/introduccion/img-02.svg', alt='Imagen decorativa')
      .col-11
        p(data-aos="fade-left") El parafraseo se emplea cuando se utilizan las ideas de otro autor, pero se expresan con palabras propias. No obstante, es indispensable incluir la cita correspondiente al autor al finalizar el parafraseo. Asimismo, cuando se realiza el resumen de una página específica de un libro, debe indicarse el número de página en la referencia bibliográfica.
        p.mb-4(data-aos="fade-left") Ejemplo: 

    .tarjeta--BG01.bg-fix-bleed.p-4.px-md-5.mb-4
      .tarjeta.tarjeta--FBG01.p-4.p-lg-5.slider-fix-bleed
        SlyderA(tipo="b" data-aos="zoom-in")
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              h4(style="color:#000 !important") Texto original
              p.mb-0(style="color:#000 !important") El reconocimiento óptico de caracteres es el proceso mediante el que, a partir de la imagen de un documento, se reconocen los caracteres en él contenidos. El proceso de OCR no siempre es capaz de leer la totalidad del contenido de los documentos, algunas palabras pueden estar mal interpretadas o algunos caracteres pueden ser erróneos. La tasa de errores dependerá de la calidad y el tipo de original que se maneje. No obstante, el OCR puede ahorrar mucho trabajo de introducción de datos. 
            .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4 
              figure
                img(src='@/assets/curso/tema8/img-09.png', style="width: 500px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              h4(style="color:#000 !important") Parafraseo 
              p.mb-0(style="color:#000 !important") El reconocimiento óptico de caracteres (OCR) es un proceso en el cual se reconocen los caracteres de la imagen de un documento. Este proceso ahorra mucho trabajo de registro de datos a pesar de que algunas palabras pueden estar mal interpretadas o tomar erróneamente algunos caracteres. (Aedo, Díaz, Losada, 2004, p. 50) 
            .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4 
              figure
                img(src='@/assets/curso/tema8/img-10.png', style="width: 500px" ,alt='').m-auto
          
    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Referencias

    p Las referencias corresponden a la lista ordenada de todas las fuentes citadas en el texto académico y se ubican al final del documento. Su finalidad es permitir la identificación y localización precisa de los materiales consultados, garantizando la transparencia, la rigurosidad académica y el respeto por la propiedad intelectual. De acuerdo con las normas APA, solo deben incluirse en esta lista las fuentes que hayan sido citadas previamente en el texto.
    p.mb-4 Dentro de los tipos de referencias más comunes se encuentran:
    
    .tarjeta--BG01.p-4.px-md-5.mb-4
      .tarjeta.tarjeta--FBG01.p-4.my-4(data-aos="fade-left")
        PasosB.color-acento-botones
          .row
            .col-lg-6.order-2.order-lg-2
              h4(style="color:#000 !important") Referencia de libro
              p(style="color:#000 !important") Se utiliza cuando la fuente consultada es una obra completa en formato impreso o digital.
              p.mb-0(style="color:#000 !important") #[b Ejemplo:]
              p(style="color:#000 !important") Area Moreira, M. (2012). #[i Alfabetización informacional y digital.] Síntesis.
            .col-lg-6.col-10.order-1.order-lg-1.mb-4 
              figure
                img(src='@/assets/curso/tema8/img-11.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-2
              h4(style="color:#000 !important") Referencia de capítulo de libro
              p(style="color:#000 !important") Aplica cuando se consulta un capítulo específico dentro de un libro editado.
              p.mb-0(style="color:#000 !important") #[b Ejemplo:]
              p(style="color:#000 !important") García Aretio, L. (2014). La educación a distancia en la sociedad del conocimiento. En L. García Aretio (Ed.), #[i Bases, mediaciones y futuro de la educación a distancia] (pp. 35–58). Síntesis.
            .col-lg-6.col-10.order-1.order-lg-1.mb-4
              figure
                img(src='@/assets/curso/tema8/img-12.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-2
              h4(style="color:#000 !important") Referencia de artículo científico
              p(style="color:#000 !important") Se emplea para artículos publicados en revistas académicas arbitradas.
              p.mb-0(style="color:#000 !important") #[b Ejemplo:]
              p(style="color:#000 !important") Cabero Almenara, J. (2015). Reflexiones educativas sobre las tecnologías de la información y la comunicación. #[i Tecnología, Ciencia y Educación, 1](1), 19–27.
            .col-lg-6.col-10.order-1.order-lg-1.mb-4
              figure
                img(src='@/assets/curso/tema8/img-13.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-2
              h4(style="color:#000 !important") Referencia de página #[i web]
              p(style="color:#000 !important") Se utiliza para contenidos disponibles en línea, elaborados por autores o entidades identificables.
              p.mb-0(style="color:#000 !important") #[b Ejemplo:]
              p(style="color:#000 !important") Organización Mundial de la Propiedad Intelectual. (s.f.). #[i ¿Qué es la propiedad intelectual?] https://www.wipo.int/about-ip/es/ 
            .col-lg-6.col-10.order-1.order-lg-1.mb-4
              figure
                img(src='@/assets/curso/tema8/img-14.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-2
              h4(style="color:#000 !important") Referencia de documento institucional
              p(style="color:#000 !important") Corresponde a informes, manuales, normas o guías elaboradas por entidades oficiales.
              p.mb-0(style="color:#000 !important") #[b Ejemplo:]
              p(style="color:#000 !important") Dirección Nacional de Derechos de Autor. (s.f.). #[i Conceptos básicos sobre derecho de autor y derechos conexos.] https://www.derechodeautor.gov.co 
            .col-lg-6.col-10.order-1.order-lg-1.mb-4
              figure
                img(src='@/assets/curso/tema8/img-15.png', alt='Imagen decorativa')

</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    mostrarIndicador: true,
    indicadorTarjetaFlip: true,
    indicadorTarjetaSlide: true,
    modal1: false,
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

<style lang="sass">
// Recorta todo lo que se salga del slider (evita que se vea el anterior)
.slider-fix-bleed
  position: relative
  overflow: hidden
  background: #fff !important
  border-radius: 24px
  isolation: isolate

  // Corta el track/contendedor del componente (clases típicas del SlyderA)
  .slyder-a,
  .slyder-a__contenedor,
  .slyder-a__slides,
  .slyder-a__slide
    overflow: hidden !important
    background: #fff !important

  // Evita el z-index negativo global en figure que “mete” cosas detrás
  figure
    position: relative
    z-index: 2 !important

  img
    max-width: 100%
    height: auto

// SOLO en este bloque: en móvil quita el margin-inline negativo que deja ver bordes
@media (max-width: 576px)
  .bg-fix-bleed
    margin-inline: 0 !important
    overflow: hidden !important
</style>
