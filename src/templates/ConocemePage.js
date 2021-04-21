import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import CookieConsent from 'react-cookie-consent'

// Export Template for use in CMS preview
export const ConocemePageTemplate = ({
  title,
  subtitle,
  featuredImage,
  section1,
}) => (
  <main>
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
      align="right"
      sign
    />
    <section className="section">
      <div className="container">
        <Content source={section1} />
        <button className="Button Button--centered" aria-label="cta">Reserva tu Sesión de Diagnóstico Gratuita</button>
      </div>
    </section>

    <CookieConsent buttonText="Entendido" cookieName="lorenaGrimal" buttonStyle={{ backgroundColor: "var(--primaryLight)", fontSize: "14px", color: "white", borderRadius: '30px' }}>¡Hola! Este sitio web usa cookies propias y de terceros para mejorar tu navegación.</CookieConsent>
  </main>
)

const ConocemePage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ConocemePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ConocemePage

export const pageQuery = graphql`
  query ConocemePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        section1
      }
    }
  }
`
