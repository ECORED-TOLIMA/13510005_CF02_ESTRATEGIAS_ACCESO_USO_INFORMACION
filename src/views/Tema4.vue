<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Técnicas para comprensión lectora

    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema4/img-01.png', alt='')

    p.mb-4 Antes de abordar los distintos tipos de lectura y la comprensión de la estructura y secuencia de los textos, es importante reconocer que la comprensión lectora es una habilidad fundamental para el aprendizaje, la vida cotidiana y el desarrollo profesional. Comprender un texto no implica únicamente leer palabras, sino interpretar, analizar y relacionar la información con los conocimientos previos y el contexto en el que se produce la lectura.
    
    .row.justify-content-center.align-items-start.mb-4
      .col-12.col-md-3.col-10.mb-4.mb-md-0.order-1(data-aos="zoom-in")
        figure.mb-0
          img.img-fluid.img-responsive(src='@/assets/curso/tema4/img-02.png', alt='')
      .col-12.col-md-9.order-md-2.order-2
        .row.justify-content-center.align-items-start
          .col-12.col-md-7.order-2.order-md-2(data-aos="fade-left")
            .bloque-texto-c.color-primario-claro.caja-responsive.p-5.mb-2
              p.mb-0
                | Las técnicas de comprensión lectora permiten al lector interactuar de manera activa con el texto, identificar ideas principales y secundarias, reconocer la intención del autor, establecer relaciones lógicas y evaluar la información presentada. Estas técnicas varían según el tipo de texto, el propósito de la lectura y las características del lector, por lo que su aplicación consciente favorece una lectura más eficiente y significativa.
          .col-12.col-md-5.order-3.order-md-1.mb-2.mb-md-0(data-aos="zoom-in")
            figure.mb-0
              img.img-fluid.img-responsive(src='@/assets/curso/tema4/img-03.svg', alt='')

        p.mt-4 Desarrollar la comprensión lectora implica adoptar estrategias antes, durante y después de la lectura, como anticipar el contenido, formular preguntas, realizar inferencias y reflexionar sobre lo leído. A continuación, se presentan conceptos y tipos de lectura que permitirán profundizar en estas técnicas y fortalecer la capacidad de comprender textos de diversa complejidad en distintos contextos académicos y cotidianos.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Comprendiendo la estructura y secuencia de un texto 

    .row.justify-content-center.mb-4
      .col-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/introduccion/img-02.svg', alt='')
      .col-11
        p.mb-0(data-aos="fade-left") Comprender un texto desde su estructura y secuencia, implica un proceso intencional que requiere la aplicación de diversas técnicas y en el que intervienen múltiples elementos, tal como se expuso en el apartado anterior. Este enfoque permite reconocer cómo se organizan las ideas y cómo se articulan entre sí para construir el significado global del texto.

    .row.no-gutters.align-items-center.mb-4.style___box_1.m-0(data-aos="zoom-in")
      .col-xl-auto.px-0
        figure.d-none.d-xl-block
          img.img-hero(src='@/assets/curso/tema4/img-04.png', alt='').m-auto
      .col-xl.px-0
        .d-flex.align-items-start
          img.icon-inline.d-none.d-lg-block.me-3(src='@/assets/curso/tema4/img-05.png' alt="")
        p.mb-0 La comprensión textual no solo aporta herramientas esenciales para el proceso formativo, sino que también resulta clave en la vida cotidiana y en los distintos contextos en los que participa el lector. La lectura de un periódico, un contrato, un magacín u otros textos, tanto sencillos como complejos, se vuelve más consciente y efectiva cuando se cuenta con estrategias que facilitan la apropiación del contenido.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10.col-12
        p En este sentido, a continuación, se presentan algunas preguntas orientadoras que le permitirán analizar el cuerpo del texto, identificar su idea principal y comprender su estructura y secuencia de manera más clara y organizada:

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        ImagenInfografica.color-acento-botones.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema4/figura-1-1v.svg', alt='')
          .tarjeta.tarjeta--blanca.p-3(x="17.3%" y="12%" numero="+")(style="background-color:#FC9D83")
            p Identificar dónde se presenta la idea principal en el texto.
          .tarjeta.tarjeta--blanca.p-3(x="39%" y="12%" numero="+")(style="background-color:#FC9D83")
            p Comprender por qué la idea principal es significativa.
          .tarjeta.tarjeta--blanca.p-3(x="61%" y="12%" numero="+")(style="background-color:#FC9D83")
            p Encontrar dónde se presentan los detalles clave en el texto.
          .tarjeta.tarjeta--blanca.p-3(x="82.7%" y="12%" numero="+")(style="background-color:#FC9D83")
            p Verificar si la organización del texto es coherente.
          .tarjeta.tarjeta--blanca.p-3(x="28.3%" y="88%" numero="+")(style="background-color:#FC9D83")
            p Determinar la idea principal exacta del texto.
          .tarjeta.tarjeta--blanca.p-3(x="50%" y="88%" numero="+")(style="background-color:#FC9D83")
            p Reconocer los detalles más importantes que apoyan la idea principal.
          .tarjeta.tarjeta--blanca.p-3(x="71.8%" y="88%" numero="+")(style="background-color:#FC9D83")
            p Determinar el tipo de organización utilizada por el autor.
        figure.movil
          img(src='@/assets/curso/tema4/figura-1-2v.svg', alt='')

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C02.color-primario.p-4
          p.mb-0 Este tipo de lectura (comprensiva y metódica) aplica principalmente para leer textos técnicos y de tipo académico; además, resulta ideal para entender lo general y lo particular de cada tema.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 ¿Qué tipos de lectura hay?

    .row.justify-content-center.mb-4
      .col-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/introduccion/img-02.svg', alt='')
      .col-11
        p.mb-0(data-aos="fade-left") Más allá de que los soportes de lectura sean físicos o digitales, existen aspectos de mayor relevancia en la experiencia lectora, como las motivaciones para iniciar la lectura y el tipo de texto que se tiene frente a sí. Ante esta diversidad de situaciones, el lector puede adoptar distintos tipos de lectura que favorezcan una experiencia más adecuada y enriquecedora.

    p.mb-4 Por esta razón, se presentan algunos tipos de lectura para que, de manera consciente, se pueda identificar la postura y estrategia frente a cada texto:

    .tarjeta--BG01.p-4.px-md-5.mb-4
      .tarjeta.tarjeta--FBG01.p-4.my-4(data-aos="fade-left")
        PasosB.color-acento-botones
          .row
            .col-lg-6.order-2.order-lg-2
              h4(style="color:#000 !important") Lectura oral
              p.mb-0(style="color:#000 !important") La lectura oral o en voz alta se practica cuando el texto se articula de manera sonora para que pueda ser escuchado por otras personas. Aunque en la actualidad su uso es menos frecuente, cumple una función social relevante en distintos contextos, como la lectura en familia o en grupos de amigos, la promoción del hábito lector, el acceso a la literatura para personas con discapacidad visual, el aprendizaje de un nuevo idioma o incluso el disfrute personal del texto. 
            .col-lg-6.col-10.order-1.order-lg-1.mb-4 
              figure
                img(src='@/assets/curso/tema4/img-06.png', alt='')
          .row
            .col-lg-6.order-2.order-lg-2
              h4(style="color:#000 !important") Lectura silenciosa 
              p.mb-0(style="color:#000 !important") Consiste en recibir mentalmente el mensaje escrito sin pronunciar palabras, siguiendo con la vista las líneas del texto. Es el tipo de lectura más común y se realiza de manera individual. Aunque suele considerarse más beneficiosa que la lectura oral, la preferencia por una u otra depende de las características y necesidades de cada lector.
            .col-lg-6.col-10.order-1.order-lg-1.mb-4 
              figure
                img(src='@/assets/curso/tema4/img-07.png', alt='')
          .row
            .col-lg-6.order-2.order-lg-2
              h4(style="color:#000 !important") Lectura superficial 
              p.mb-0(style="color:#000 !important") Este tipo de lectura se caracteriza por realizarse de forma rápida, con el propósito de identificar de qué trata un texto. Su objetivo es captar la idea general y los contenidos fundamentales sin profundizar en los detalles. Se utiliza, por ejemplo, cuando se aborda un tema por primera vez y se busca obtener una visión global del mismo.
            .col-lg-6.col-10.order-1.order-lg-1.mb-4 
              figure
                img(src='@/assets/curso/tema4/img-08.png', alt='')
          .row
            .col-lg-6.order-2.order-lg-2
              h4(style="color:#000 !important") Lectura selectiva
              p(style="color:#000 !important") Permite localizar información específica de interés, dejando de lado el resto del contenido. Se trata de una lectura de búsqueda en la que la vista recorre el texto a velocidad media, sin leerlo por completo, hasta encontrar el dato requerido. Es común en situaciones como la consulta de fechas, nombres, fórmulas, capítulos o autores en guías, enciclopedias, libros de texto o tablas de contenido. 
              p.mb-0(style="color:#000 !important") Por ejemplo, se realiza una lectura selectiva cuando se busca el nombre de un hotel determinado en una guía turística, la fecha de nacimiento de un personaje en una enciclopedia, una fórmula en un libro de texto, el autor de una obra literaria concreta, un capítulo en una tabla de contenido, etc. 
            .col-lg-6.col-10.order-1.order-lg-1.mb-4 
              figure
                img(src='@/assets/curso/tema4/img-09.png', alt='')
          .row
            .col-lg-6.order-2.order-lg-2
              h4(style="color:#000 !important") Lectura comprensiva
              p.mb-0(style="color:#000 !important") En esta lectura, el lector busca entender completamente el mensaje del texto. Para ello, formula preguntas, analiza la información y verifica que ha captado correctamente las ideas planteadas. Suele realizarse a un ritmo moderado y, en muchos casos, se apoya en una lectura superficial previa y en técnicas como el subrayado o la toma de notas.
            .col-lg-6.col-10.order-1.order-lg-1.mb-4
              figure
                img(src='@/assets/curso/tema4/img-10.png', alt='')
          .row
            .col-lg-6.order-2.order-lg-2
              h4(style="color:#000 !important") Lectura reflexiva
              p.mb-0(style="color:#000 !important") A diferencia de la lectura comprensiva, la lectura reflexiva promueve la generación constante de ideas mientras se lee. El lector relaciona, organiza y amplía la información, dando lugar a nuevas interpretaciones, proyectos o conocimientos. Es un tipo de lectura profundo que estimula el pensamiento creativo y valora especialmente la riqueza de las reflexiones que surgen durante el proceso.
            .col-lg-6.col-10.order-1.order-lg-1.mb-4
              figure
                img(src='@/assets/curso/tema4/img-11.png', alt='')
          .row
            .col-lg-6.order-2.order-lg-2
              h4(style="color:#000 !important") Lectura crítica
              p.mb-0(style="color:#000 !important") Implica analizar y evaluar la relevancia y validez del contenido del texto. En este proceso, el lector identifica la intención del autor, examina la solidez de sus argumentos y detecta posibles vacíos, errores o inconsistencias. Además, contrasta lo leído con sus conocimientos y experiencias previas, lo que permite enriquecer y precisar las ideas. Este tipo de lectura requiere un ritmo lento y cuidadoso, que facilite la evaluación de las fuentes, conclusiones y propósitos del escrito.
            .col-lg-6.col-10.order-1.order-lg-1.mb-4
              figure
                img(src='@/assets/curso/tema4/img-12.png', alt='')
          .row
            .col-lg-6.order-2.order-lg-2
              h4(style="color:#000 !important") Lectura recreativa
              p.mb-0(style="color:#000 !important") Se realiza por placer y entretenimiento. En ella, el lector define libremente la velocidad y el tipo de texto que desea leer, permitiendo que la imaginación fluya. Generalmente se asocia con novelas, poemas, ensayos u otros escritos literarios, aunque cada lector decide qué lecturas disfruta y cuáles no.
            .col-lg-6.col-10.order-1.order-lg-1.mb-4
              figure
                img(src='@/assets/curso/tema4/img-13.png', alt='')

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-10.col-12
        .row.align-items-center(data-aos="zoom-in")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-1
              h3.mb-0.ms-3 Sugerencias para mejorar la competencia lectora

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C03.color-secundario.row.align-items-center.m-0.style___box_1.p-4(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema4/img-14.svg', alt='').m-auto
          .col-xl
            p.mb-0 Como seres humanos, resulta fundamental promover un desarrollo integral que abarque las dimensiones física, mental, artística, intelectual, espiritual, entre otras. En este proceso, la lectura desempeña un papel esencial, ya que fortalece diversas habilidades necesarias para la formación personal y social.

    .BMG1.px-md-5.px-4
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-10.col-12
          p.mb-4 A continuación, se presentan algunas sugerencias orientadas al fortalecimiento de una competencia transversal clave: la competencia lectora:
          ol.lista-ol--cuadro.lista-ol--separador
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 1
              | Leer lo más frecuentemente posible. 
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 2
              | No mover la cabeza cuando se lee.  
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 3
              | Convertir en un hábito buscar la idea principal de los escritos que consulta. 
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 4
              | Utilizar herramientas físicas o digitales para subrayar los aspectos más importantes de las lecturas.  
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 5
              | Enriquecer el vocabulario de los temas de interés hará que la lectura de distintos escritos especializados sea más fluida e interesante.

</template>

<script>
export default {
  name: 'Tema4',
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

<style lang="sass">
.caja-sin-espacio
  min-height: 0 !important
  height: auto !important
  padding: 16px !important

.caja-sin-espacio::before,
.caja-sin-espacio::after
  content: none !important
  display: none !important

.caja-sin-espacio *
  margin-bottom: 0 !important
</style>
