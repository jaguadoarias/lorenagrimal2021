import React from 'react'
import { graphql } from 'gatsby'
import { CheckCircle } from 'react-feather'
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

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
        <h3>" Vamos a transformar tus deseos en objetivos y a transformar todo tu potencial en tu estrategia de vida "</h3>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h3>Conecta con tu esencia</h3>
        <p>Ahí está la clave, en descubrir cómo tu esencia te va a guiar por el camino del bienestar y del éxito.
El camino del éxito está en conectar, en analizar qué hay dentro de tí y cómo ponerlo a tu disposición.
El aprendizaje más potente se genera desde los conocimientos que ya poseemos, por eso mi punto de partida siempre eres tú, qué tienes, qué conoces, qué posees, quién eres y qué sabes hacer. 
Esta es la clave de la rapidez y la efectividad de las mentorías individuales.</p>
        <h3>Rompe tus creencias limitantes</h3>
        <p>Romper, modificar, eliminar… en mi lenguaje caben todos esos verbos para lograr una transformación profunda, duradera y rápida.
Si la base es tu expertise, la ruptura de creencias es el éxito que te va a mover desde donde estás ahora, hasta donde quieres estar.
La psicología estratégica conecta de manera muy eficaz con esas creencias y te las muestra para que seas tú quien las transforme. 
Estrategia, mente y capacitación.</p>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h3>CREE EN TI</h3>
        <p>Creer es el pilar del cambio, y en cada sesión vas a descubir:</p>
        <ul class="List">
          <li><CheckCircle color="#487E86" /> Romper creencias que te impiden avanzar</li>
          <li><CheckCircle color="#487E86" /> Conectar con tu esencia</li>
          <li><CheckCircle color="#487E86" /> Definir y alcanzar tus objetivos personales y profesionales</li>
          <li><CheckCircle color="#487E86" /> Creer en tí</li>
          <li><CheckCircle color="#487E86" /> Crear lo que visualizas</li>
          <li><CheckCircle color="#487E86" /> Confíar en la magia del cambio</li>
        </ul>
        <h4 className="PageHeader--Subheading taCenter">Cree, Crea, Confía</h4>
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
