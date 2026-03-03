<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Técnicas para tomar notas

    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema3/img-01.png', alt='Imagen decorativa')

    p El ejercicio de toma de notas es fundamental en distintos momentos del proceso formativo, ya sea en el ambiente de aprendizaje, durante la lectura de una publicación o en reuniones de trabajo colaborativo. Por ello, resulta indispensable contar con técnicas que permitan realizar esta tarea de manera consciente, estratégica y eficiente.
    p.mb-4 Las anotaciones facilitan la identificación de los tópicos más relevantes de lecturas, videos, charlas, clases y otros recursos, a través de:

    .BMG1.px-md-5.px-4
      .row.justify-content-center.mb-4
        .col-lg-3.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/tema3/img-02.svg', alt='Imagen decorativa')
        .col-lg-9       
          ol.lista-ol--cuadro.lista-ol--separador
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 1
              | El establecimiento de la idea principal del contenido. 
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 2
              | La omisión de detalles poco relevantes. 
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 3
              | El registro de lo que piensa sobre el contenido y como se relacionan las ideas secundarias con la idea principal. 
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 4
              | La precisión del énfasis del autor/instructor sobre el tema. 
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 5
              | La identificación de lo que aporta ese contenido a la construcción de su conocimiento sobre el tema. 

    p.mb-4.text-center Para que esto surta efecto en la próxima toma de notas, se sugiere tener en cuenta las siguientes estrategias:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img-03.svg' alt='AvatarTop')
          h4.text-center Datos clave
          p.mb-0 Registrar información básica como autor, fecha, título, editorial y tipo de publicación.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img-04.svg' alt='AvatarTop')
          h4.text-center Vinculación temática
          p.mb-0 Incluir notas que expliquen cómo el contenido consultado se relaciona con el tema de interés.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img-05.svg' alt='AvatarTop')
          h4.text-center Conexiones
          p.mb-0 Identificar relaciones y vínculos con otras publicaciones o fuentes consultadas.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img-06.svg' alt='AvatarTop')
          h4.text-center Claridad
          p.mb-0 Redactar apuntes autónomos y completos, de modo que puedan comprenderse fácilmente al ser revisados posteriormente.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img-07.svg' alt='AvatarTop')
          h4.text-center Contexto
          p.mb-0 Preferir el uso de frases completas que aporten un sentido claro e integral de lo que está aprendiendo.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img-08.svg' alt='AvatarTop')
          h4.text-center Lenguaje propio
          p.mb-0 Utilizar terminología familiar para facilitar la comprensión y la apropiación progresiva de los conceptos.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img-09.svg' alt='AvatarTop')
          h4.text-center Diferenciación
          p.mb-0 Distinguir los comentarios personales del contenido original, mediante colores, símbolos, esquemas u otros recursos visuales que permitan identificar claramente sus aportes.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C02.color-primario.row.align-items-center.m-0.style___box_1.p-4(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema3/img-10.svg', alt='').m-auto
          .col-xl
            p.mb-0 Se recomienda no anotar todo lo dicho por el expositor, pues el esfuerzo que requiere anotar a esa velocidad, impide la comprensión del tema.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 ¿Qué elementos intervienen para poder entender un texto? 
    
    p.mb-4 No todos los textos son iguales, ni en su contenido ni en su forma. Además, es importante considerar que la comprensión lectora no depende únicamente del texto, sino también de diversos factores asociados al lector y al contexto. A continuación, se presentan los elementos que deben tenerse en cuenta para lograr una comprensión más profunda y enriquecedora del texto:

    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-1.order-2.mb-lg-0.mb-4(data-aos="fade-right")
        AcordionA.color-secundario(tipo="b" clase-tarjeta="tarjeta tarjeta--C01" data-aos="zoom-in")
          .row.justify-content-center(titulo="El tipo de texto")
            .col-lg-12.order-lg-1.order-2
              p.mb-0 La complejidad del texto es uno de los factores que más influyen en su comprensión; sin embargo, las experiencias y los conocimientos previos del lector sobre el tema resultan determinantes para que la lectura se desarrolle con mayor fluidez. 
          .row.justify-content-center(titulo="La actitud hacia la lectura")
            .col-lg-12.order-lg-1.order-2
              p.mb-0 Este aspecto está estrechamente relacionado con el desempeño lector. Una actitud positiva y motivada frente a la lectura incrementa significativamente la capacidad de comprensión y el aprovechamiento de la experiencia lectora. 
          .row.justify-content-center(titulo="El propósito de la lectura")
            .col-lg-12.order-lg-1.order-2
              p.mb-0 El objetivo con el que se aborda un texto influye directamente en su comprensión. Por ello, es fundamental identificar el propósito de lectura y crear las condiciones adecuadas que favorezcan un proceso lector eficaz. 
          .row.justify-content-center(titulo="Estado físico y afectivo del lector")
            .col-lg-12.order-lg-1.order-2
              p.mb-0 La condición física y emocional del lector es clave para una experiencia lectora enriquecedora. Estar descansado, contar con buena visión, una adecuada nutrición y un estado de salud favorable, contribuye a mejorar la concentración y la comprensión del texto.

      .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img-11.png' alt="Imagen decorativa")

</template>

<script>
export default {
  name: 'Tema3',
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
