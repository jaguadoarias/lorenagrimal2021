import React from 'react'
import { graphql } from 'gatsby'
import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import CookieConsent from 'react-cookie-consent'

import './ConocemePage.css'

// Export Template for use in CMS preview
export const PrivacidadPageTemplate = ({
  title,
  body,
}) => (
  <main>
    <PageHeader title={title} />
    <section className="section">
      <div className="container">
          
        <Content source={body} />
        
      </div>
    </section>

    <CookieConsent buttonText="Entendido" cookieName="lorenaGrimal" buttonStyle={{ backgroundColor: "var(--primaryLight)", fontSize: "14px", color: "white", borderRadius: '30px' }}>¡Hola! Este sitio web usa cookies propias y de terceros para mejorar tu navegación.</CookieConsent>
  </main>
)

const PrivacidadPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <PrivacidadPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default PrivacidadPage

export const pageQuery = graphql`
  query PrivacidadPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
      }
    }
  }
`
