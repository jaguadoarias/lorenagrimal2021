import React from 'react'
import { Instagram, Send, Mail } from 'react-feather'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import FormSimpleAjax from '../components/FormSimpleAjax'
import Content from '../components/Content'
import Layout from '../components/Layout'
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
              <Instagram /> @lorenagrimal_psicologa
            </a>
          
            <a className="Contact--Details--Item" href={`tel:${phone}`}>
              <Send /> Entrenamiento emocional
            </a>
            
            {email && (
              <a className="Contact--Details--Item" href={`mailto:${email}`}>
                <Mail /> lorena.grimal@gmail.com
              </a>
            )}
          </div>
        </div>

        <div>
          <FormSimpleAjax name="Simple Form Ajax" />
        </div>
      </div>
    </section>
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
