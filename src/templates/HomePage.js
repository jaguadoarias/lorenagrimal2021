import React from 'react'
import { graphql } from 'gatsby'
import { CheckCircle } from 'react-feather'
import { Link } from 'gatsby'
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import CookieConsent from 'react-cookie-consent'

// Export Template for use in CMS preview
export const HomePageTemplate = ({
         title,
         subheading,
         subtitle,
         featuredImage,
         body
       }) => (
         <main className="Home">
           <PageHeader
             large
             title={title}
             subheading={subheading}
             subtitle={subtitle}
             backgroundImage={featuredImage}
             // cta="Reserva sesión ahora"
           />

           <section className="section">
             <div className="container">
               <Content source={body} />
             </div>
           </section>

           <section className="section section--secondary">
             <div className="container">
               <h3>
                 Vamos a transformar tus deseos en objetivos y a convertir todo
                 tu potencial en tu estrategia de vida.
               </h3>
             </div>
           </section>

           <section className="section">
             <div className="container cols">
               <figure>
                 <img
                   src="https://ucarecdn.com/7599a343-6836-4c9f-9cbf-9c581a4f45e2/"
                   alt="Lorena Grimal - Conecta con tu esencia y estarás acariciando el éxito."
                   className="clip-circle"
                 />
               </figure>
               <div>
                 <h2>Conecta con tu esencia y estarás acariciando el éxito.</h2>
                 <p>
                   Ahí está la clave, en descubrir cómo tu esencia te va a guiar
                   por el camino del bienestar y del éxito. La estrategia más
                   potente está centrada en conectar y en analizar qué hay
                   dentro de tí y cómo ponerlo a tu disposición. El aprendizaje
                   más potente se genera desde los conocimientos que ya
                   poseemos, por eso mi punto de partida siempre eres tú, qué
                   tienes, qué conoces, qué posees, quién eres y qué sabes
                   hacer.
                   <br />
                   <br />
                   <strong>
                     Esta es la clave de la rapidez y la efectividad de las
                     mentorías individuales.
                   </strong>
                 </p>
               </div>
             </div>
           </section>

           <section className="section section--secondary section--separator">
             <div className="custom-shape-divider-top-1618653597">
               <svg
                 data-name="Layer 1"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 1200 120"
                 preserveAspectRatio="none"
               >
                 <path
                   d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                   className="shape-fill"
                 ></path>
               </svg>
             </div>
             <div className="container">
               <h2>
                 Rompe tus creencias limitantes para construir creencias
                 empoderantes.
               </h2>
               <p>
                 Romper, modificar, eliminar… en mi lenguaje caben todos esos
                 verbos para lograr una transformación profunda, duradera y
                 rápida. Si la base es tu expertise, la ruptura de creencias es
                 el éxito que te va a mover desde donde estás ahora, hasta donde
                 quieres estar. La psicología estratégica conecta de manera muy
                 eficaz con esas creencias y te las muestra para que seas tú
                 quien las transforme. Estrategia, mente y capacitación.
               </p>
             </div>

             <div className="container">
               <h3>Las tres Cs del éxito emocional, biológico y social.</h3>
               <ul className="Methods">
                 <li>
                   <h4>Creer</h4> Es el pilar del cambio. Comienza el camino
                   creyendo en tí, identificando en qué punto te encuentras y
                   focalizándote en la conciencia de tu poder.
                 </li>
                 <li>
                   <h4>Crear</h4> Es la potencia de la transformación. Continúa
                   creando tu destino y el camino que te llevará a alcanzarlo.
                 </li>
                 <li>
                   <h4>Confiar</h4> Es la garantía del éxito. Confía en tí, en
                   tus recursos y en que has escogido tu mejor estrategia.
                 </li>
               </ul>
             </div>
             <div className="custom-shape-divider-bottom-1618653720">
               <svg
                 data-name="Layer 1"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 1200 120"
                 preserveAspectRatio="none"
               >
                 <path
                   d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                   className="shape-fill"
                 ></path>
               </svg>
             </div>
           </section>

           <section className="section">
             <div className="container cols">
               <div>
                 <h2>Metodología Estratégica Individualizada</h2>
                 <ul className="List">
                   <li>
                     <CheckCircle color="#487E86" size="20" /> Trabajaremos codo
                     a codo, desde el descubrimiento hasta el éxito.
                   </li>
                   <li>
                     <CheckCircle color="#487E86" size="20" /> Con una
                     metodología basada en la eficacia y la evidencia.
                   </li>
                   <li>
                     <CheckCircle color="#487E86" size="20" /> Transformación
                     vital para sentirte libre y en equilibrio.
                   </li>
                   <li>
                     <CheckCircle color="#487E86" size="20" /> Alineando tu
                     parte biológica, psicológica, social y laboral.
                   </li>
                   <li>
                     <CheckCircle color="#487E86" size="20" /> Te ofrezco mi
                     apoyo constante en tu día a día durante la duración del
                     proceso.
                   </li>
                 </ul>
                 {/* <Link
                   to="/reserva-sesion/"
                   aria-label="Navigation"
                   role="button"
                   className="Button"
                 >
                   Reserva sesión ahora
                 </Link> */}
               </div>
               <figure>
                 <img
                   src="https://ucarecdn.com/a027ac63-a1c7-4e1d-9347-b273c225aa3b/"
                   alt="Lorena Grimal - Cree, Crea y Confía"
                   className="clip-circle"
                   width="585"
                   height="389"
                 />
               </figure>
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
             ¡Hola! Este sitio web usa cookies propias y de terceros para
             mejorar tu navegación.
           </CookieConsent>
         </main>
       )

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subheading
        subtitle
        featuredImage
      }
    }
  }
`
