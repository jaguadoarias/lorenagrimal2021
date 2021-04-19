import React from 'react'
import { Instagram, Send, Mail } from 'react-feather'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import CookieConsent from 'react-cookie-consent'
import { InlineWidget } from "react-calendly";

import './ContactPage.css'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({
  body,
  title,
  subtitle,
  featuredImage,
  address,
  instagram,
  phone,
  email,
}) => (
  <main className="Contact">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section Contact--Section1">
      <div className="container Contact--Section1--Container">
        <div>
          <Content source={body} />
          <div className="Contact--Details">
            
            <a className="Contact--Details--Item" target="_blank" rel="noopener noreferrer" href={instagram}>
              <Instagram /> lorenagrimal_psicologa
            </a>
          
            <a className="Contact--Details--Item" href="https://t.me/lorenagrimal" target="_blank" rel="noopener noreferrer">
              <Send /> @lorenagrimal
            </a>
            
            {email && (
              <a className="Contact--Details--Item" target="_blank" rel="noopener noreferrer" href={`mailto:${email}`}>
                <Mail /> lorena.grimal@gmail.com
              </a>
            )}
          </div>
        </div>
        <InlineWidget url="https://calendly.com/lorenagrimal" />
      </div>
    </section>
    <CookieConsent buttonText="Entendido" cookieName="lorenaGrimal" buttonStyle={{ backgroundColor: "var(--primaryLight)", fontSize: "14px", color: "white", borderRadius: '30px' }}>¡Hola! Este sitio web usa cookies propias y de terceros para mejorar tu navegación.</CookieConsent>
  </main>
)

const ContactPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ContactPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        address
        phone
        instagram
        email
        locations {
          mapLink
          lat
          lng
        }
      }
    }
  }
`
