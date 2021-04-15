import React from 'react'
import { graphql } from 'gatsby'
import { CheckCircle } from 'react-feather'
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Image from '../components/Image'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subheading, subtitle, featuredImage, body }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subheading={subheading}
      subtitle={subtitle}
      backgroundImage={featuredImage}
      cta="Reserva tu Sesión de Diagnóstico Gratuita"
    />

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>

    <section className="section section--hero">
      <div className="container">
        <h3>Vamos a transformar tus deseos en objetivos y a transformar todo tu potencial en tu estrategia de vida</h3>
      </div>
    </section>

    <section className="section">
      <div className="container cols">
        <figure>
          <img
            src="https://ucarecdn.com/7599a343-6836-4c9f-9cbf-9c581a4f45e2/"
            alt="Lorena Grimal - Conecta con tu esencia y estarás acariciando el éxito."
            className="clip-circle"
          />
        </figure>
        <div>
          <h3>Conecta con tu esencia y estarás acariciando el éxito.</h3>
          <p>Ahí está la clave, en descubrir cómo tu esencia te va a guiar por el camino del bienestar y del éxito.
  El camino del éxito está en conectar, en analizar qué hay dentro de tí y cómo ponerlo a tu disposición.
  <br /><br />El aprendizaje más potente se genera desde los conocimientos que ya poseemos, por eso mi punto de partida siempre eres tú, qué tienes, qué conoces, qué posees, quién eres y qué sabes hacer. 
  Esta es la clave de la rapidez y la efectividad de las mentorías individuales.</p>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
      <h3>Rompe tus creencias limitantes</h3>
        <p>Romper, modificar, eliminar… en mi lenguaje caben todos esos verbos para lograr una transformación profunda, duradera y rápida.
Si la base es tu expertise, la ruptura de creencias es el éxito que te va a mover desde donde estás ahora, hasta donde quieres estar.
La psicología estratégica conecta de manera muy eficaz con esas creencias y te las muestra para que seas tú quien las transforme. 
Estrategia, mente y capacitación.</p>
      </div>
    </section>

    <section className="section section--hero section--hero2">
      <div className="container">
        <h3>Desaprender creencias limitantes, construir creencias empoderantes.</h3>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h3>CREE CREA CONFÍA</h3>
        <ul class="List">
          <li><CheckCircle color="#487E86" size="20" /> Creer es el pilar del cambio. Comienza el camino creyendo en tí, identificando en qué punto te encuentras y focalizándote en la conciencia de tu poder.</li>
          <li><CheckCircle color="#487E86" size="20" /> Crear es la potencia de la transformación. Continúa creando tu destino y el camino que te llevará a alcanzarlo.</li>
          <li><CheckCircle color="#487E86" size="20" /> Confiar es la garantía del éxito. Confía en tí, en tus recursos y en que has escogido tu mejor estrategia.</li>
        </ul>
      </div>
    </section>

    <section className="section section--hero section--hero2">
      <div className="container">
        <h3>Las tres Cs del éxito emocional, biológico y social.</h3>
      </div>
    </section>
    <section className="section">
      <div className="container cols">
        <div>
          <h3>UN PASO MÁS Y...</h3>
          <ul class="List">
            <li><CheckCircle color="#487E86" size="20" /> Trabajaremos codo a codo, desde el descubrimiento hasta el éxito.</li>
            <li><CheckCircle color="#487E86" size="20" /> Con una metodología basada en la eficacia y la evidencia.</li>
            <li><CheckCircle color="#487E86" size="20" /> Transformación vital para sentirte libre y en equilibrio.</li>
            <li><CheckCircle color="#487E86" size="20" /> Alineando tu parte biológica, psicológica, social y laboral</li>
          </ul>
          <button className="Button">Solicita tu Sesión Gratuita</button>
        </div>
        <figure>
          <img
            src="https://ucarecdn.com/a027ac63-a1c7-4e1d-9347-b273c225aa3b/"
            alt="Lorena Grimal - Cree, Crea y Confía"
            className="clip-circle"
          />
        </figure>
      </div>
    </section>
    
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subheading
        subtitle
        featuredImage
      }
    }
  }
`
