<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Técnicas para evaluar fuentes de información

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-8.order-2
        p.mb-4 Para profundizar en el valor de las fuentes de información en los procesos de aprendizaje y en la toma de decisiones cotidianas, se presenta el siguiente pódcast. Este espacio propone una reflexión sobre cómo identificar, analizar y evaluar las fuentes de manera crítica, resaltando la importancia de un uso ético y responsable de la información en contextos académicos y digitales:
        .bg-color-1.tarjeta
          .p-4.p-md-3
            .row.justify-content-center.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema5/img-02.svg", data-aos="zoom-in")
              .col-lg.mb-3.mb-lg-0
                h4(data-aos="fade-left").mb-4(style="color:#FF955E") Pódcast
                p.text-white Lo invitamos a escuchar el siguiente Pódcast:
        
                TarjetaAudio.color-secundario.bg-color-white.mb-3(
                  texto="Pódcast"
                  tiempo
                  :audio="require('../assets/curso/podcast/podcast1.mp3')"
                )
      .col-lg-4.col-md-6.col-8.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema5/img-01.png', alt='Imagen decorativa')

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img-03.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Basado en lo reflexionado en el pódcast, se abordarán herramientas y modelos de análisis que facilitan este proceso evaluativo, los cuales ofrecen una guía estructurada para examinar la calidad de los recursos informativos, antes de incorporarlos a trabajos académicos o investigativos. Su aplicación contribuye al desarrollo del pensamiento crítico y al uso responsable de la información en entornos académicos y profesionales.

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-10.col-12
        .row.align-items-center.mb-3(data-aos="zoom-in")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-1
              h3.mb-0.ms-3 Sugerencias para mejorar la competencia lectora

        p.mb-0 El sistema CRAAP constituye una metodología de análisis profundo diseñada para verificar la validez, integridad y utilidad de los recursos informativos. Su implementación es vital en el ámbito investigativo y digital, ya que facilita una gestión ética de los datos y asegura que las conclusiones de un estudio se basen en evidencia sólida. 

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C03.color-secundario.row.align-items-center.m-0.style___box_1.p-4(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema5/img-04.svg', alt='').m-auto
          .col-xl
            p.mb-0 Esta herramienta propone una hoja de ruta basada en 5 pilares esenciales que todo investigador debe considerar, antes de integrar una referencia en su producción académica.

    p.mb-4.text-center Para determinar si una fuente es legítima, se deben filtrar los contenidos a través de las siguientes dimensiones:

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        ImagenInfografica.color-acento-botones.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema5/figura-1-1v.svg', alt='Imagen decorativa')
          .tarjeta.tarjeta--blanca.p-3(x="60%" y="11%" numero="+")(style="background-color:#FC9D83")
            p.mb-0 Se centra en la fecha de publicación y si el contenido permanece válido o ha quedado obsoleto ante nuevos descubrimientos.
          .tarjeta.tarjeta--blanca.p-3(x="88.5%" y="43.5%" numero="+")(style="background-color:#FC9D83")
            p.mb-0 Examina el grado de conexión entre la información hallada y los objetivos específicos del estudio, asegurando que el nivel de profundidad sea el adecuado.
          .tarjeta.tarjeta--blanca.p-3(x="95%" y="75%" numero="+")(style="background-color:#FC9D83")
            p.mb-0 Investiga el perfil del creador o la entidad editorial, buscando respaldos profesionales, trayectoria y prestigio en el área del conocimiento.
          .tarjeta.tarjeta--blanca.p-3(x="5%" y="75%" numero="+")(style="background-color:#FC9D83")
            p.mb-0 Consiste en contrastar los datos, verificar la existencia de bibliografía de apoyo y confirmar que el discurso sea coherente y libre de errores graves.
          .tarjeta.tarjeta--blanca.p-3(x="11.5%" y="43.5%" numero="+")(style="background-color:#FC9D83")
            p.mb-0 Analiza el "porqué" de la información. Determina si el texto busca instruir con objetividad o si intenta manipular, vender o promover una postura sesgada. 
        figure.movil
          img(src='@/assets/curso/tema5/figura-1-2v.svg', alt='Imagen decorativa')

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 ¿Cuál es el valor estratégico del método?

    p.mb-4 Adoptar el modelo CRAAP no solo optimiza la calidad de los entregables académicos, sino que también desarrolla el juicio crítico del aprendiz. Entre sus beneficios principales destacan:

    .row.justify-content-center.mb-4
      .col-lg-6.col-10.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema5/img-05.png', alt='Imagen decorativa')
      .col-lg-6       
        LineaTiempoD.color-acento-botones
          .row.justify-content-center(numero="1" titulo="Filtrado de calidad")
            .col-12.order-lg-2.order-3
              p.mb-0 Distinguir entre portales de confianza y sitios con desinformación o sesgos marcados.
          .row.justify-content-center(numero="2" titulo="Excelencia investigativa")
            .col-12.order-lg-2.order-3
              p.mb-0 Elevar el rigor científico de los proyectos mediante el uso de datos validados.
          .row.justify-content-center(numero="3" titulo="Integridad ética")
            .col-12.order-lg-2.order-3
              p.mb-0 Mitigar riesgos relacionados con el plagio y asegurar un manejo transparente de la propiedad intelectual.
          .row.justify-content-center(numero="3" titulo="Autoridad")
            .col-12.order-lg-2.order-3
              p.mb-0 Rastreando la huella del experto.
    
    p No es suficiente que un artículo esté firmado; es indispensable verificar qué respalda la voz de quien lo escribe. La autoridad se sustenta en la formación académica, la experiencia profesional y el reconocimiento dentro de una comunidad especializada. En entornos digitales, donde la apariencia puede generar una falsa sensación de experticia, resulta necesario asumir una actitud crítica y analítica, actuando como verdaderos investigadores de las credenciales y la trayectoria de las fuentes.
    p.mb-4 #[i Checklist] de autoridad:

    .BMG1.px-md-5.px-4
      .row.justify-content-center.mb-4
        .col-lg-3.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/tema5/img-06.svg', alt='Imagen decorativa')
        .col-lg-9       
          ol.lista-ol--cuadro.lista-ol--separador
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 1
              | [  ] ¿Aparece el nombre completo del autor o de una institución responsable?
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 2
              | [  ] Si se busca al autor en la #[i web], ¿aparece vinculado a universidades, centros de investigación o libros publicados?
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 3
              | [  ] ¿La institución que respalda el sitio tiene prestigio en este campo específico? (Ej. La OMS en salud).
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 4
              | [  ] ¿Se proporciona un método de contacto (correo, redes profesionales, dirección)?
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 5
              | [  ] ¿El dominio de la página web es confiable? (Prioriza .edu, .org, o .gob).

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Relevancia: ¿Es oro o solo distracción?

    .row.justify-content-center.mb-4
      .col-lg-4.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema5/img-07.png', alt='Imagen decorativa')
      .col-lg-8       
        .cajon.cajon.C02.color-primario.p-4.mb-3.p-3
          p.mb-0(data-aos="fade-down") La relevancia es un criterio relativo, ya que depende directamente de la necesidad informativa. Un artículo puede ser de alta calidad, pero resulta inadecuado si no responde al tema específico de estudio; por ejemplo, un texto sobre la historia del fútbol no es pertinente cuando se investiga la biomecánica del golpeo del balón. Por ello, este criterio permite valorar si la información se ajusta al enfoque, los objetivos y el nivel de profundidad requeridos en el trabajo académico.
        p Preguntas guía:
        ul.lista-ul
          li 
            <i class="fa-solid fa-life-ring bg-color-2"></i>
            | ¿Este contenido resuelve directamente una de las preguntas de investigación?
          li
            <i class="fa-solid fa-life-ring bg-color-2"></i>
            | ¿El lenguaje es demasiado técnico (fuera del alcance) o demasiado básico (no aporta nada nuevo)?
          li 
            <i class="fa-solid fa-life-ring bg-color-2"></i>
            | ¿Cubre el tema de manera integral o solo toca aspectos superficiales?
          li 
            <i class="fa-solid fa-life-ring bg-color-2"></i>
            | ¿A quién va dirigido el texto? (Si es para niños, probablemente te falte profundidad académica).

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Actualidad: el factor tiempo
    
    p En campos como la medicina, la tecnología o el derecho, la información "caduca". Una fuente de hace 10 años puede ser históricamente interesante, pero tácticamente peligrosa. Se debe diferenciar entre un clásico (un libro base que no pasa de moda) y una actualización (datos recientes).
    p.mb-4 #[i Checklist] de actualidad:

    .BMG1.px-md-5.px-4
      .row.justify-content-center.mb-4
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          ol.lista-ol--cuadro.lista-ol--separador
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 1
              | [  ] ¿Cuándo se publicó originalmente este recurso?
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 2
              | [  ] ¿Existe una versión o edición más reciente?
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 3
              | [  ] ¿Los enlaces y referencias que cita el autor siguen activos o están "rotos"?
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 4
              | [  ] En el caso de noticias o datos estadísticos, ¿la fecha es de este año o del anterior?
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 5
              | [  ] ¿El tema requiere por su naturaleza que los datos sean de último minuto?
        .col-12.col-md-6.col-lg-3.order-lg-2.order-1.mb-lg-0.mb-4.text-center(data-aos="fade-left")
          img.img-fluid.img-responsive2(src='@/assets/curso/tema5/img-08.svg' alt="Imagen decorativa")

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Objetividad: el arte de leer entre líneas

    .row.justify-content-center.mb-4
      .col-lg-4.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema5/img-09.svg', alt='Imagen decorativa')
      .col-lg-8       
        .cajon.cajon.C03.color-secundario.p-4.mb-3.p-3
          p.mb-0(data-aos="fade-down") La objetividad absoluta es difícil de alcanzar; sin embargo, el rigor académico exige que los hechos se presenten de manera equilibrada. Por ello, es necesario identificar si el texto busca informar con fundamento o si, por el contrario, intenta persuadir, vender un producto o promover una postura ideológica, omitiendo deliberadamente otras perspectivas.
        p Preguntas para detectar sesgos:
        ul.lista-ul
          li 
            <i class="fa-solid fa-life-ring bg-color-2"></i>
            | ¿El autor utiliza un lenguaje cargado de emociones o adjetivos calificativos (ej. "maravilloso", "nefasto")?
          li
            <i class="fa-solid fa-life-ring bg-color-2"></i>
            | ¿Se mencionan diferentes puntos de vista o se ignora por completo la evidencia contraria?
          li 
            <i class="fa-solid fa-life-ring bg-color-2"></i>
            | ¿Hay publicidad excesiva en la página que pueda influir en el contenido?
          li 
            <i class="fa-solid fa-life-ring bg-color-2"></i>
            | ¿Quién financia esta investigación o este sitio web? ¿Hay un conflicto de intereses?

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Precisión: verificando la exactitud
    
    p La precisión es el rasgo que distingue un #[i blog] de opinión de un recurso académico. Una fuente precisa presenta información verificable, se apoya en citas y referencias confiables, permitiendo al lector contrastar los datos de manera autónoma. En esencia, refleja un compromiso riguroso con la exactitud y la verdad técnica.
    p.mb-4 #[i Checklist] de actualidad:

    .BMG1.px-md-5.px-4
      .row.justify-content-center.mb-4
        .col-lg-4.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/tema5/img-10.svg', alt='Imagen decorativa')
        .col-lg-8       
          ol.lista-ol--cuadro.lista-ol--separador
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 1
              | [  ] ¿El autor cita sus fuentes de información mediante bibliografía o enlaces?
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 2
              | [  ] ¿Los datos y cifras presentados coinciden con lo que dicen otras fuentes fiables?
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 3
              | [  ] ¿El texto está bien escrito, sin errores gramaticales o de ortografía que resten profesionalismo?
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 4
              | [  ] ¿Se explica la metodología (cómo se obtuvieron esos datos)?
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 5
              | [  ] ¿La información ha sido revisada por pares (en el caso de revistas científicas)?

    .row.justify-content-center.mb-4
      .col-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/introduccion/img-02.svg', alt='Imagen decorativa')
      .col-11
        p.mb-0(data-aos="fade-left") Para facilitar la aplicación práctica de los criterios de evaluación de fuentes de información y fortalecer el análisis crítico de los recursos consultados, se presentan a continuación una serie de documentos anexos diseñados como herramientas de apoyo. Estos materiales permiten pasar de la teoría a la acción, ofreciendo guías claras, formatos estructurados y esquemas visuales que orientan la toma de decisiones informadas durante el proceso de búsqueda, selección y uso de información académica. Su uso sistemático contribuye a desarrollar autonomía, rigor investigativo y una postura crítica frente a la abundancia de contenidos disponibles en entornos digitales y académicos:

    .tarjeta.tarjeta--gris2.p-3.mb-4(data-aos="fade-left")
      .row.justify-content-around
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema5/icono-01.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1(style="color:#000") Matriz de evaluación rápida (hoja de cotejo)
              p Presenta una tabla práctica para valorar de forma ágil la confiabilidad de una fuente mientras se navega en internet, mediante criterios clave y una escala de puntuación que orienta la toma de decisiones.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_Matriz_de_evaluacion_rapida.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    .tarjeta.tarjeta--gris2.p-3.mb-4(data-aos="fade-left")
      .row.justify-content-around
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema5/icono-02.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1(style="color:#000") Rúbrica de evaluación de trabajos de investigación
              p Ofrece un instrumento de autoevaluación que permite analizar la calidad de las fuentes utilizadas en un trabajo académico, considerando vigencia, contraste de información, detección de sesgos y rigor investigativo.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_Rubrica_de_evaluación_de_trabajo_de_investigacion.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .tarjeta.tarjeta--gris2.p-3.mb-4(data-aos="fade-left")
      .row.justify-content-around
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema5/icono-03.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1(style="color:#000") Guía visual “Semáforo de confiabilidad”
              p Propone un esquema gráfico sencillo para clasificar las fuentes, según su nivel de confiabilidad, facilitando la identificación rápida de recursos recomendados, verificables o descartables.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_Guia_visual_Semaforo_de_confiabilidad.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .tarjeta.tarjeta--gris2.p-3.mb-4(data-aos="fade-left")
      .row.justify-content-around
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema5/icono-04.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1(style="color:#000") Plantilla de ficha de análisis de fuente
              p Incluye un formato detallado para examinar de manera crítica cada fuente consultada, evaluando autoridad, objetividad y precisión, emitiendo un veredicto fundamentado sobre su pertinencia académica.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_Plantilla_de_ficha_de_analisis_de_fuente.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema5',
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
