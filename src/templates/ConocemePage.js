import React from 'react'
import { graphql } from 'gatsby'
import FormSimpleAjax from '../components/FormSimpleAjax'
import { Instagram, Send, Mail, Youtube } from 'react-feather'
import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import CookieConsent from 'react-cookie-consent'

import './ConocemePage.css'

// Export Template for use in CMS preview
export const ConocemePageTemplate = ({
  title,
  subtitle,
  featuredImage,
  section1,
  instagram,
  telegram,
  email
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
      <div className="container cols cols1-2">
        <div className="Contact--Details">
          <h2>Puedes encontrarme en:</h2>
          <a
            className="Contact--Details--Item"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.instagram.com/${instagram}`}
          >
            <Instagram /> {instagram}
          </a>

          <a
            className="Contact--Details--Item"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UCyIKXkENsgUEKTFf1BBnr0Q"
          >
            <Youtube /> Lorena Grimal
          </a>

          <a
            className="Contact--Details--Item"
            href="https://t.me/lorenagrimal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Send /> {telegram}
          </a>

          {email && (
            <a
              className="Contact--Details--Item"
              target="_blank"
              rel="noopener noreferrer"
              href={`mailto:${email}`}
            >
              <Mail /> {email}
            </a>
          )}
          <div style={{ display: 'none' }}>
            <FormSimpleAjax />
          </div>

          <figure className="Contact--image">
            <img
              src="https://ucarecdn.com/b6401723-05ca-4164-8693-04d306d2b879/"
              alt="Lorena Grimal - Conoceme"
            />
          </figure>

          {/* <Link to="/reserva-sesion/" aria-label="Reserva sesión ahora" role="button" className="Button">
              Reserva sesión ahora
            </Link> */}
        </div>

        <Content source={section1} />
      </div>
    </section>

    <CookieConsent
      buttonText="Entendido"
      cookieName="lorenaGrimal"
      buttonStyle={{
        backgroundColor: 'var(--primaryLight)',
        fontSize: '14px',
        color: 'white',
        borderRadius: '30px'
      }}
    >
      ¡Hola! Este sitio web usa cookies propias y de terceros para mejorar tu
      navegación.
    </CookieConsent>
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
        instagram
        telegram
        email
      }
    }
  }
`
