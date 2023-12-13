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
         videoTitle
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
                     <th className="thEmpty">&nbsp;</th>
                     <th className="thLeft">Sesiones alto impacto</th>
                     <th className="thRight">Terapias clásicas</th>
                   </tr>
                   <tr>
                     <td>
                       <strong>Duración sesión</strong>
                     </td>
                     <td>Entre 60-90 minutos</td>
                     <td>Entre 45-60 minutos</td>
                   </tr>
                   <tr>
                     <td>
                       <strong>Frecuencia</strong>
                     </td>
                     <td>Intervenciones diarias</td>
                     <td>Intervención semanal</td>
                   </tr>
                   <tr>
                     <td>
                       <strong>Cohesión al tratamiento</strong>
                     </td>
                     <td>95% de finalización</td>
                     <td>Alrededor del 60%</td>
                   </tr>
                   <tr>
                     <td>
                       <strong>Coste</strong>
                     </td>
                     <td>
                       Inversión inicial más elevada y reducción del tiempo de
                       terapia
                     </td>
                     <td>Inversión inicial más baja y duración más larga</td>
                   </tr>
                   <tr>
                     <td>
                       <strong>Tiempo de tratamiento</strong>
                     </td>
                     <td>Entre 2-6 meses</td>
                     <td>Entre 8-24 meses</td>
                   </tr>
                   <tr>
                     <td>
                       <strong>Contacto con el terapeuta</strong>
                     </td>
                     <td>De lunes a Domingo</td>
                     <td>El día de la sesión</td>
                   </tr>
                   <tr>
                     <td>
                       <strong>Modelos teóricos</strong>
                     </td>
                     <td>Más de 8 modelos teóricos a tu disposición</td>
                     <td>Entre 1 y tres modelos teóricos</td>
                   </tr>
                   <tr>
                     <td>
                       <strong>Apoyo extra</strong>
                     </td>
                     <td>
                       Pertenencia a grupo de apoyo, videos, libros y material
                       de apoyo
                     </td>
                     <td>Material complementario</td>
                   </tr>
                   <tr>
                     <td>
                       <strong>Formato de las sesiones</strong>
                     </td>
                     <td>Online y grabadas para posterior visualización</td>
                     <td>Online sin grabación</td>
                   </tr>
                   <tr>
                     <td>
                       <strong>Pilares a analizar y trabajar</strong>
                     </td>
                     <td>Psicológico, social, laboral y biológico</td>
                     <td>A demanda de la persona</td>
                   </tr>
                   <tr>
                     <td>
                       <strong>RESERVA SESIÓN</strong>
                     </td>
                     <td>
                       Escríbeme un{' '}
                       <a
                         href="https://wa.me/+34609918411"
                         title="Escríbeme un whatsapp"
                         target="_blank"
                         rel="noopener noreferrer"
                       >
                         whatsapp
                       </a>{' '}
                       para evaluar tu caso o un mail a{' '}
                       <a
                         href="mailto:lorena@lorenagrimal.com"
                         title="Escríbeme un email"
                         target="_blank"
                         rel="noopener noreferrer"
                       >
                         lorena@lorenagrimal.com
                       </a>
                     </td>
                     <td>
                       <a
                         href="https://buy.stripe.com/aEU29g8yS6Vue8E4gA"
                         title="Adquiere directamente un bono de sesiones"
                         target="_blank"
                         rel="noopener noreferrer"
                       >
                         Adquiere directamente un bono de sesiones
                       </a>
                     </td>
                   </tr>
                 </table>
               </div>
               <blockquote>
                 <p>
                   El bienestar es increíble, pero no lo digo yo, lo dicen las
                   personas que trabajan conmigo.
                 </p>
               </blockquote>
               <div className="taCenter">
                 <iframe
                   className="videoYoutube"
                   src="https://www.youtube-nocookie.com/embed/qTRwBkwZaaI?controls=0&amp;start=3"
                   title="YouTube video player"
                   frameborder="0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   allowfullscreen
                 ></iframe>
                 {/* <p>Si quieres convertirte en el próximo caso de éxito como Laura...</p>
          <Link to="/reserva-sesion/" aria-label="Reserva sesión ahora" role="button" className="Button">
            Reserva sesión ahora
          </Link> */}
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
