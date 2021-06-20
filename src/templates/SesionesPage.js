import React from 'react'
import { Link, graphql } from 'gatsby'
import { Star } from 'react-feather'
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import CookieConsent from 'react-cookie-consent'

// Export Template for use in CMS preview
export const SesionesPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body
}) => (
  <main className="SesionesPage">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container cols cols1-3">
        <div>
          <Content source={body} />
        </div>
        <figure>
          <img
            src="https://ucarecdn.com/e9defa5e-8546-408d-931b-5fe23fbc75c1/"
            alt="Lorena Grimal - Sesiones"
          />
          <Link to="/reserva-sesion/" aria-label="Navigation" role="button">
            <button className="Button">Reserva Sesión de diagnóstico</button>
          </Link>
        </figure>
      </div>
      <div className="container">
        <ul class="List cols">
          <li><Star color="#487E86" size="20" /> <strong>Sesiones Individuales</strong></li>
          <li><Star color="#487E86" size="20" /> <strong>Sesiones Grupales</strong></li>
          <li><Star color="#487E86" size="20" /> <strong>Sesiones Estratégicas</strong></li>
        </ul>
        <p>En muchas ocasiones, recibo clientes con dolores físicos, que después de haber pasado por diferentes especialistas médicos, terminan llamando a mi puerta. Curiosamente la transformación física sucede cuando se realiza un cambio a otro nivel, ya sea familiar, laboral o mental.</p>
        <p>Las sesiones de transformación son muy estratégicas, con una absoluta implicación constante desde mi persona para tu persona.</p>
        <p>Aprenderás a crear Planes de Acción estratégicos para lograr los objetivos de tu vida. Este aprendizaje lo vas a poder implementar en cualquier ámbito de tu vida, desde el plano laboral, pareja, familia, físico…</p>
        <p>Mi experiencia de cambio y transformación es de 12 sesiones, con una metodología de éxito y orientada a cada individuo como ser único e independiente.</p>
        <p>Llevo más de 20 años transformando personas, ahora es el momento de apostar por ti, es el momento de conocer los mecanismos internos que posees y sacarlos a la luz para descubrir y ofrecer tu mejor versión.</p>
      </div>
    </section>
  </main>
)

const SesionesPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <SesionesPageTemplate {...page.frontmatter} body={page.html} />
    <CookieConsent buttonText="Entendido" cookieName="lorenaGrimal" buttonStyle={{ backgroundColor: "var(--primaryLight)", fontSize: "14px", color: "white", borderRadius: '30px' }}>¡Hola! Este sitio web usa cookies propias y de terceros para mejorar tu navegación.</CookieConsent>
  </Layout>
)
export default SesionesPage

export const pageQuery = graphql`
  query SesionesPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
