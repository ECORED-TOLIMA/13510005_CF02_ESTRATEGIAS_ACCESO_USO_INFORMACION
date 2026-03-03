<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Plagio y propiedad intelectual

    .row.justify-content-center.mb-4
      .col-lg-5.col-10.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema7/img-01.png', alt='Imagen decorativa')
      .col-lg-7       
        p.mb-4 De acuerdo con la Organización Mundial de la Propiedad Intelectual (OMPI) (s.f.): 
        .row.justify-content-center.mb-4
          .col.col-lg-10.order-lg-2.order-2
            p(data-aos="fade-down") … La propiedad intelectual, tiene que ver con las creaciones de la mente: las invenciones, las obras literarias y artísticas, los símbolos, los nombres, las imágenes y los dibujos y modelos utilizados en el comercio. 
          .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
            figure
              img(src='@/assets/curso/introduccion/img-02.svg', alt='Imagen decorativa')
        p.mb-4 Igualmente, la OMPI plantea que la propiedad intelectual se divide en dos categorías:
        LineaTiempoD.color-acento-botones
          .row.justify-content-center(numero="1" titulo="La propiedad industrial")
            .col-12.order-lg-2.order-3
              p.mb-0 Incluye las invenciones, patentes, marcas, dibujos y modelos industriales e indicaciones geográficas de procedencia.
          .row.justify-content-center(numero="2" titulo="El derecho de autor")
            .col-12.order-lg-2.order-3
              p.mb-0 Abarca las obras literarias y artísticas, tales como las novelas; los poemas y las obras de teatro, las películas, las obras musicales, las obras de arte, tales como los dibujos, pinturas, fotografías y esculturas y los diseños arquitectónicos. 

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/img-29.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p En Colombia, la Dirección Nacional de Derechos de Autor (s.f.), lo plantea de esta manera: 
        p … La Propiedad intelectual es una disciplina normativa que protege las creaciones intelectuales provenientes de un esfuerzo, trabajo o destreza humanos, dignos de reconocimiento jurídico. La Propiedad Intelectual comprende: el derecho de autor y los derechos conexos; la propiedad industrial (que comprende la protección de los signos distintivos, de las nuevas creaciones, los circuitos integrados, los secretos industriales); y las nuevas variedades vegetales.

    p.mb-4.text-center Desde el momento de la creación de la obra, deben ser reconocidos al autor los siguientes dos tipos de derechos y acciones: 

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 1.
          span  #[i Tipos de derechos de autor]
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 25%; background-color: #C1E4DD;") Derechos morales
                th(style="width: 25%; background-color: #C1E4DD;") Derechos patrimoniales
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") Conservar la obra inédita o divulgada.
                td(style="background-color: #F6F6F6;") La reproducción.
              tr(data-aos="fade-right")
                td Reivindicar la paternidad de la obra en cualquier momento.
                td La comunicación pública.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") Oponerse a toda información, mutilación o modificación que atente contra el mérito de la obra o la reputación del autor.
                td(style="background-color: #F6F6F6;") La distribución pública de ejemplares.
              tr(data-aos="fade-right")
                td Modificar la obra, antes o después de su publicación.
                td La tradición, adaptación, arreglo u otra transformación de la obra.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") Retirar la obra del mercado o suspender cualquier forma de utilización, aunque ella hubiese sido previamente autorizada. 
                td(style="background-color: #F6F6F6;") La importación de ejemplares de su obra, reproducidos sin su autorización.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C02.color-primario.row.align-items-center.m-0.style___box_1.p-4(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema7/img-02.svg', alt='').m-auto
          .col-xl
            p.mb-0 Las obras protegidas por derechos de autor pueden identificarse mediante el símbolo ©, acompañado del nombre del autor o titular de los derechos y el año de publicación. 

    p.mb-4 El sistema jurídico contempla excepciones y limitaciones al derecho de autor, orientadas a equilibrar la protección de las creaciones intelectuales con el acceso a la información, el uso privado y el interés general, permitiendo determinados usos de las obras sin autorización previa del titular, bajo condiciones específicas establecidas por la ley, encontrando:

    .row.justify-content-center.ali.mb-4(data-aos="fade-left")
      .col-lg-12(data-aos="fade-down")
        .tarjeta--container.row.mb-3
          .col-xl.col-md-6.tarjeta.color-primario.p-4(style="background-color:#FFEDB1")
            .row.justify-content-center.mb-3
              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/tema7/img-03.svg', alt='Imagen decorativa')
            h4.text-center.mb-4 Excepciones y limitaciones al derecho de autor 
            p.mb-0 De acuerdo con el artículo 37 de la Ley 23 de 1982 sobre derechos de autor “Es licita la reproducción, por cualquier medio, de una obra literaria o científica, ordenada u obtenida por el interesado en un solo ejemplar para su uso privado y sin fines de lucro”. Se pueden identificar las obras con derechos reservados, aquellas que contienen el símbolo ©, seguido del nombre del autor y el año de publicación.
          .col-xl.col-md-6.tarjeta.color-secundario.p-4(style="background-color:#FED2C7")
            .row.justify-content-center.mb-3
              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/tema7/img-04.svg', alt='Imagen decorativa')
            h4.text-center.mb-4 Excepciones y limitaciones al derecho de autor 
            p.mb-0 De acuerdo con el artículo 37 de la Ley 23 de 1982 sobre derechos de autor “Es licita la reproducción, por cualquier medio, de una obra literaria o científica, ordenada u obtenida por el interesado en un solo ejemplar para su uso privado y sin fines de lucro”.

    p.mb-4.text-center Para complementar un poco, se relacionan los siguientes niveles de permisos Creative Commons que se tienen:

    .row.justify-content-center.mb-3(data-aos="flip-up")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema7/img-05.svg", alt="alt").img90.m-auto
          h4.text-center Atribución
          p.mb-0 Esta opción permite a otros copiar, distribuir, mostrar y ejecutar el trabajo patentado y todos los derivados del mismo. Pero dando siempre testimonio de la autoría del mismo. 
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema7/img-06.svg", alt="alt").img90.m-auto
          h4.text-center No Comercial
          p.mb-0 Esta opción permite a otros copiar, distribuir, mostrar y ejecutar el trabajo patentado y todos los derivados del mismo, pero únicamente con propósitos no comerciales.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema7/img-07.svg", alt="alt").img90.m-auto
          h4.text-center Sin Derivar
          p.mb-0 Esta opción permite a otros copiar, distribuir, mostrar y ejecutar solo copias literales del trabajo patentado, no estando autorizado ningún tercero a realizar trabajos derivados del mismo.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema7/img-08.svg", alt="alt").img90.m-auto
          h4.text-center Compartir Igual
          p.mb-0 Esta licencia permite a otros realizar trabajos derivados, pero únicamente bajo una licencia idéntica. Este tipo de licencia, únicamente aplica a obras derivadas.

    p.mb-4.text-center Estas 4 condiciones se pueden combinar creando así las siguientes 6 licencias Creative Commons:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema7/img-09.svg' alt='AvatarTop')
          h4.text-center Atribución
          p.mb-0 El material creado puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema7/img-10.svg' alt='AvatarTop')
          h4.text-center Atribución - Sin Derivar
          p.mb-0 El material creado puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se pueden realizar obras derivadas.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema7/img-11.svg' alt='AvatarTop')
          h4.text-center Atribución - Sin Derivar - No comercial
          p.mb-0 El material creado puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial. No se pueden realizar obras derivadas.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema7/img-12.svg' alt='AvatarTop')
          h4.text-center Atribución No comercial
          p.mb-0 El material creado puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema7/img-13.svg' alt='AvatarTop')
          h4.text-center Atribución - No comercial - Compartir Igual
          p.mb-0 El material creado puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de licencia que el trabajo original.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema7/img-14.svg' alt='AvatarTop')
          h4.text-center Atribución Compartir Igual
          p.mb-0 El material creado puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. Las obras derivadas tienen que estar bajo los mismos términos de licencia que el trabajo original.

    p.mb-4.text-center Igualmente, si se desea buscar contenidos con licencias Creative Commons se sugiere consultar los siguientes recursos:

    .row.justify-content-center.mb-4
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema7/img-15.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 CC Search
            h5.t2.mb-2 CC Search
            p Buscador que reúne imágenes, música, videos y otros contenidos con licencias Creative Commons.
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema7/img-16.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Flickr (Creative Commons)
            h5.t2.mb-2 Flickr (Creative Commons)
            p Plataforma de fotografías que permite filtrar y usar imágenes bajo licencias Creative Commons.
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema7/img-17.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Jumendo
            h5.t2.mb-2 Jumendo
            p Biblioteca de música disponible para uso libre o con licencias específicas, según las condiciones del autor.

    .tarjeta.color-acento-botones.p-4.p-md-5.mb-4(data-aos="fade-right")(style="background-color:#E1E4FF")
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-3.mb-4.mb-md-0
          img(src="@/assets/curso/tema7/img-18.svg")
        .col-md.col-lg-6
          #t_7_1.titulo-segundo.color-acento-contenido.mb-3
            h4(style="color:#000 !important") Creative Commons
          p.mb-4(style="color:#000 !important") Guía que sirve apoyo para comprender y aplicar las licencias Creative Commons, las cuales permiten a los autores definir de manera clara cómo pueden ser usadas, compartidas o adaptadas sus obras, promoviendo el uso legal y responsable de los contenidos digitales.
          a.boton.color-acento-botones.texto-blanco(href="http://creativecommons.org/choose/" target="_blank" rel="noopener noreferrer")
            span Enlace web
            i.fas.fa-external-link-alt

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Cómo evitar el plagio

    p El término plagio, proveniente del latín #[i plagiarius] (ladrón), hace referencia a la acción de copiar o imitar de manera sustancial una obra ajena —ya sea literaria, artística o académica— sin la debida autorización, presentándola como propia. En el ámbito educativo, el plagio constituye una falta de carácter ético y moral que, de ser comprobada, puede dar lugar a sanciones conforme a las políticas y reglamentos de la institución.
    p.mb-4 El plagio tiene varias manifestaciones dentro las cuales se pueden incluir las siguientes: 

    .BMG1.px-md-5.px-4
      .row.justify-content-center.mb-4
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          ol.lista-ol--cuadro.lista-ol--separador
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 1
              | Usar frases o expresiones de un autor sin su consentimiento. 
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 2
              | Referenciar sin las normas nacionales o internacionales. 
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 3
              | Resumir o parafrasear inapropiadamente. 
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 4
              | Usar comillas inapropiadamente. 
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 5
              | Copiarse de un compañero. 
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 6
              | Copiar de sitios #[i web], libros, revistas, periódicos magacines, obras, películas, etc. 

        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema7/img-19.svg' alt="Imagen decorativa")

    p.mb-4.text-center Igualmente, si se desea buscar contenidos con licencias Creative Commons se sugiere consultar los siguientes recursos:

    .tarjeta--BG02.px-md-5.p-lg-0.p-4.mb-5
      .row.justify-content-center.align-items-center.my-lg-5.my-4
        .col-lg-4.col-md-8.col-sm-6.mb-md-4.mb-sm-4.desktop
          figure
            img(src='@/assets/curso/tema7/img-20.png', alt='alt' style='margin-bottom: -25px;')
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-6")
            .tarjeta.bgslyder.p-4
              .row.justify-content-center.mb-3
                .col-5
                  img(src="@/assets/curso/tema7/img-22.svg", alt="alt")
              p.text-center Priorizar las ideas propias sobre las de los autores consultados, utilizando las fuentes externas como apoyo argumentativo.
            .tarjeta.bgslyder.p-4
              .row.justify-content-center.mb-3
                .col-5
                  img(src="@/assets/curso/tema7/img-23.svg", alt="alt")
              p.text-center Emplear las ideas de otros autores de manera respetuosa, reconociendo que su función es sustentar y fortalecer el trabajo propio.
            .tarjeta.bgslyder.p-4
              .row.justify-content-center.mb-3
                .col-5
                  img(src="@/assets/curso/tema7/img-24.svg", alt="alt")
              p.text-center Utilizar comillas cuando se citen de forma textual las palabras de otros autores, indicando claramente la fuente correspondiente.
            .tarjeta.bgslyder.p-4
              .row.justify-content-center.mb-3
                .col-5
                  img(src="@/assets/curso/tema7/img-25.svg", alt="alt")
              p.text-center Reconocer que la consulta de material externo implica responsabilidades éticas y académicas, más allá de la aplicación de estrategias de citación.
            .tarjeta.bgslyder.p-4
              .row.justify-content-center.mb-3
                .col-5
                  img(src="@/assets/curso/tema7/img-26.svg", alt="alt")
              p.text-center Atribuir adecuadamente los trabajos consultados que hayan contribuido al desarrollo del documento.
            .tarjeta.bgslyder.p-4
              .row.justify-content-center.mb-3
                .col-5
                  img(src="@/assets/curso/tema7/img-27.svg", alt="alt")
              p.text-center Incluir la totalidad de las referencias bibliográficas utilizadas al final del trabajo.
    
    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C03.color-secundario.row.align-items-center.m-0.style___box_1.p-4(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema7/img-28.svg', alt='').m-auto
          .col-xl
            p Pero lo anterior ¿Para qué? 
            ul.lista-ul
              li.mb-0 
                i.lista-ul__vineta
                | Para facilitarle al lector de mí trabajo la ubicación de las fuentes consultadas. 
              li.mb-0 
                i.lista-ul__vineta
                | Para reconocer a los autores consultados.

</template>

<script>
export default {
  name: 'Tema7',
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
