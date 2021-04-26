import React from 'react'
import { Link, graphql } from 'gatsby'

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
      <div className="container cols cols1-2">
        <figure>
          <img
            src="https://ucarecdn.com/e9defa5e-8546-408d-931b-5fe23fbc75c1/"
            alt="Lorena Grimal - Sesiones"
          />
          <Link to="/reserva-sesion/" aria-label="Navigation" role="button">
            <button className="Button">Reserva tu Sesión de Diagnóstico Gratuita</button>
          </Link>
        </figure>
        <Content source={body} />
        
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
