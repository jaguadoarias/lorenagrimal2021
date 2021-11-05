import React from 'react'
import { Link, graphql } from 'gatsby'
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import { Check } from 'react-feather'
import CookieConsent from 'react-cookie-consent'

// Export Template for use in CMS preview
export const SesionesPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body,
  video,
  videoPoster,
  videoTitle,
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
            alt="Lorena Grimal - Sesiones individuales"
          />
        </figure>
      </div>
      <div className="container">
        <div className="Table-container">
          <table className="Table">
            <tr>
              <th className="thEmpty"></th>
              <th className="thLeft">Lorena Grimal</th>
              <th className="thRight">Otras terapias previas</th>
            </tr>
            <tr>
              <td><strong>Duración</strong></td>
              <td><Check size={18} /> Meses</td>
              <td>Años</td>
            </tr>
            <tr>
              <td><strong>Frecuencia</strong></td>
              <td><Check size={18} /> Diaria</td>
              <td>Semanal/quincenal</td>
            </tr>
            <tr>
              <td><strong>Cohesión al tratamiento</strong></td>
              <td><Check size={18} /> 100% de finalización</td>
              <td>Alrededor del 60%</td>
            </tr>
            <tr>
              <td><strong>Coste</strong></td>
              <td><Check size={18} /> Menos de 50 euros al día</td>
              <td>Más de 50 euros al día</td>
            </tr>
            <tr>
              <td><strong>Disponibilidad del terapeuta</strong></td>
              <td><Check size={18} /> 24 horas al día 7 días de la semana</td>
              <td>El día de la sesión</td>
            </tr>
            <tr>
              <td><strong>Modelos teóricos</strong></td>
              <td><Check size={18} /> Más de 8 modelos teóricos a tu disposición</td>
              <td>Entre 1 y tres</td>
            </tr>
            <tr>
              <td><strong>Apoyo extra</strong></td>
              <td><Check size={18} /> Formación grupal Mentes Poderosas GRATIS</td>
              <td>Ninguno</td>
            </tr>
            <tr>
              <td><strong>Bibliografía</strong></td>
              <td><Check size={18} /> Regalo libro 
  <strong> Diario de emociones</strong>
              </td>
              <td>Ninguno</td>
            </tr>
            <tr>
              <td><strong>Pilares a analizar y trabajar</strong></td>
              <td><Check size={18} /> Psicológico, social, laboral y biológico</td>
              <td>Normalmente solo psicológico</td>
            </tr>          
          </table>
        </div>
        <blockquote><p>El bienestar es increíble, pero no lo digo yo, lo dicen las personas que trabajan conmigo.</p></blockquote>
        <div className="taCenter">
          <iframe className="videoYoutube" src="https://www.youtube-nocookie.com/embed/qTRwBkwZaaI?controls=0&amp;start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p>Si quieres convertirte en el próximo caso de éxito como Laura...</p>
          <Link to="/reserva-sesion/" aria-label="Reserva sesión de diagnóstico" role="button" className="Button">
            Reserva sesión de diagnóstico
          </Link>
        </div>
        
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
        video
        videoPoster
        videoTitle
      }
    }
  }
`
