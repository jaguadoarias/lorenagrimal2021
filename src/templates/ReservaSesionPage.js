import React from 'react'
import { graphql } from 'gatsby'
import { Video, Calendar, Globe } from 'react-feather'
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import CookieConsent from 'react-cookie-consent'
import { InlineWidget } from "react-calendly";

import './ReservaSesionPage.css'

// Export Template for use in CMS preview
export const ReservaSesionPageTemplate = ({
  body,
  title,
  subtitle,
  featuredImage,
}) => (
  <main className="Contact">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section Contact--Section1">
      <div className="container Contact--Section1--Container">
        <InlineWidget url="https://calendly.com/lorenagrimal" />
        <div>
          <Content source={body} />
          <ul className="List List--only">
            <li><Calendar /> Selecciona un día y una hora que estén disponibles</li>
            <li><Video /> Ten instalado Zoom o Google Meet en tu dispositivo</li>
            <li><Globe /> Revisa correctamente tu zona horaria</li>
          </ul>
        </div>
      </div>
    </section>
    <CookieConsent buttonText="Entendido" cookieName="lorenaGrimal" buttonStyle={{ backgroundColor: "var(--primaryLight)", fontSize: "14px", color: "white", borderRadius: '30px' }}>¡Hola! Este sitio web usa cookies propias y de terceros para mejorar tu navegación.</CookieConsent>
  </main>
)

const ReservaSesionPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ReservaSesionPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ReservaSesionPage

export const pageQuery = graphql`
  query ReservaSesionPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
      }
    }
  }
`
