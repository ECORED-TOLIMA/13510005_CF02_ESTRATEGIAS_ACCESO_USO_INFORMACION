<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Gestión ética y crítica de la información',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión sobre el uso ético y crítico de la información, la validación de fuentes y la prevención del plagio, a partir del análisis de conceptos fundamentales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué se entiende por evaluación de fuentes de información?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Revisar únicamente la ortografía de un texto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Analizar la calidad, confiabilidad y pertinencia de una fuente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Copiar la información más extensa disponible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Seleccionar la primera fuente encontrada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien, ha identificado correctamente el propósito de la evaluación de fuentes en el proceso de búsqueda de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Si se necesita referenciar un contenido elaborado por una entidad identificable y disponible para consulta en línea, ¿qué tipo de referencia corresponde utilizar según las normas APA?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Referencia de página <em>web.</em>',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Referencia de libro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Referencia de capítulo de libro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Referencia de artículo científico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto, cuando la información se consulta en línea y cuenta con un autor o entidad responsable identificable, se debe emplear una referencia de página web.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes aspectos permite evaluar la actualidad de una fuente de información?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Su extensión en número de páginas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La vigencia de la información según la fecha de publicación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El nivel académico del lector.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La complejidad del lenguaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien, la vigencia de la información permite verificar si el contenido es actual y pertinente para el contexto de análisis.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: 'La objetividad en una fuente se evidencia cuando:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El autor impone su opinión personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El texto tiene publicidad excesiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se presenta información equilibrada y sin sesgos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se omiten las fuentes consultadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien, reconocer la objetividad es clave para garantizar la información confiable.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: 'El criterio de precisión se relaciona con:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La exactitud de los datos y referencias.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La claridad visual del documento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El uso de lenguaje informal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La opinión del lector.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto, la precisión asegura que la información sea verificable y confiable.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: 'La relevancia de una fuente indica que:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es muy conocida en internet.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es extensa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tiene muchas imágenes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Responde a la necesidad de información del usuario.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Bien hecho, la relevancia depende de la utilidad de la información para el propósito de búsqueda.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: 'El modelo CRAAP se utiliza para:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Clasificar textos literarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Redactar conclusiones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evaluar fuentes de información.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Crear mapas conceptuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto, el modelo CRAAP es una herramienta clave para evaluar fuentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: 'La lectura comprensiva se caracteriza por:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Leer rápidamente sin analizar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Memorizar sin reflexionar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Leer solo los títulos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comprender ideas principales y secundarias.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente, la lectura comprensiva permite entender el contenido de forma integral.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: 'La lectura crítica implica:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Analizar y contrastar la información. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aceptar la información sin cuestionar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Leer solo por entretenimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar otras fuentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien, la lectura crítica fortalece el pensamiento analítico',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: 'La lectura superficial permite: ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Analizar profundamente un texto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Identificar rápidamente la idea general.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evaluar la precisión de una fuente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Detectar sesgos ideológicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto, esta lectura es útil para una primera aproximación al texto.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: 'La toma de notas tiene como finalidad principal:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar y sintetizar información relevante. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Copiar todo el contenido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplazar la lectura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Memorizar textos completos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien, tomar notas facilita el aprendizaje y la organización de la información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: 'La idea principal de un texto es:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El ejemplo más largo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El concepto central del contenido.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El primer párrafo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La conclusión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto, la idea principal orienta la comprensión del texto',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: 'El parafraseo consiste en:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Copiar textualmente un fragmento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cambiar palabras sin citar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Expresar ideas ajenas con palabras propias citando la fuente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Omitir el autor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio sobre el tema del parafraseo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: 'La citación se utiliza para:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar leer varias fuentes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Omitir referencias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar la extensión del texto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reconocer las ideas de otros autores.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Muy bien, citar es una práctica académica fundamental.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: 'Las referencias bibliográficas permiten:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Decorar el documento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Identificar y localizar fuentes consultadas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reemplazar la citación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Resumir el contenido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto, las referencias respaldan el trabajo académico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: 'El uso ético de la información implica:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Copiar información libremente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Respetar derechos de autor y citar adecuadamente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Usar solo fuentes digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el parafraseo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente, el uso ético fortalece la integridad académica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: 'El plagio ocurre cuando:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se citan correctamente las fuentes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se usan ideas propias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se presentan ideas ajenas como propias.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se parafrasea adecuadamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto, identificar el plagio ayuda a prevenirlo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: 'La propiedad intelectual protege:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo los textos digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las creaciones del intelecto humano.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Únicamente las ideas orales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los sitios web.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien, la propiedad intelectual reconoce la creación humana.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: 'La seguridad digital busca:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Limitar el acceso a internet.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proteger información y cuentas personales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar la publicidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto, la seguridad digital protege al usuario en entornos digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: 'Los filtros de búsqueda permiten:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la cantidad de resultados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ordenar información al azar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Optimizar y delimitar los resultados de búsqueda.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evitar la evaluación de fuentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente, los filtros facilitan búsquedas más eficientes y pertinentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
