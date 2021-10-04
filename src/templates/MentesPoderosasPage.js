import React from 'react'
import { graphql } from 'gatsby'
import { CheckCircle, Star } from 'react-feather'
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import CookieConsent from 'react-cookie-consent'

import './MentesPoderosasPage.css'

// Export Template for use in CMS preview
export const MentesPoderosasPageTemplate = ({
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
    <section className="section">
      <div className="container">
        <Content source={body} />
        <h2>¿Qué vas a conseguir?</h2>     
        <ul className="List">
          <li><Star color="#487E86" size="20" /> <strong>Una mente emocionalmente brillante (una mente preparada, entrenada para tu día a día)</strong></li>
          <li><Star color="#487E86" size="20" /> <strong>Descubrir los superpoderes de tu mente.</strong></li>
          <li><Star color="#487E86" size="20" /> <strong>Construir bienestar y felicidad.</strong></li>
          <li><Star color="#487E86" size="20" /> <strong>Potenciar tus fortalezas emocionales.</strong></li>
          <li><Star color="#487E86" size="20" /> <strong>Conectar con tu mejor versión.</strong></li>
          <li><Star color="#487E86" size="20" /> <strong>Un valioso autocontrol emocional.</strong></li>
        </ul>
        <h2>¿Por qué inscribirte?</h2>
        <ul className="List">
          <li><CheckCircle color="#487E86" size="20" /> ENTRENAMIENTO SEMANAL. Reunión todos los lunes a través de zoom.</li>
          <li><CheckCircle color="#487E86" size="20" /> TRIBU. Un grupo exclusivo está esperándote para disfrutar del aprendizaje y poder del grupo, para compartir experiencias, aprendizajes y crecer en todos los aspectos de nuestra mente.</li>
          <li><CheckCircle color="#487E86" size="20" /> PRÁCTICA: Hacer para construir es uno de los pilares de mentes poderosas. Si quieres que algo cambie, haz algo para que suceda.</li>
          <li><CheckCircle color="#487E86" size="20" /> ON-LINE: Las reuniones son online, a través de la plataforma zoom, para que puedas conectarte desde cualquier lugar y mantener el protocolo COVID-FREE.</li>
          <li><CheckCircle color="#487E86" size="20" /> FLEXIBILIDAD: Los contenidos están totalmente adaptados a las demandas del grupo. Son contenidos vivos.</li>
        </ul>
        <h2>Programa formativo</h2>
        <p>Si bien no es un programa fijo, sino que se va adaptando a las necesidades de los participantes, algunos ejemplos de sesiones serían:</p>
        <ul className="List">
          <li><CheckCircle color="#487E86" size="20" /> Conecta tus hemisferios cerebrales.</li>
          <li><CheckCircle color="#487E86" size="20" /> El poder de la visualización</li>
          <li><CheckCircle color="#487E86" size="20" /> Transforma tus creencias limitantes en creencias empoderantes</li>
          <li><CheckCircle color="#487E86" size="20" /> El poder de tu pensamiento.</li>
          <li><CheckCircle color="#487E86" size="20" /> Reestructura tu mente</li>
          <li><CheckCircle color="#487E86" size="20" /> Emociones contenidas: Impacto en nuestras vidas</li>
          <li><CheckCircle color="#487E86" size="20" /> El poder de la gratitud</li>
          <li><CheckCircle color="#487E86" size="20" /> Transformación emocional con Lego</li>
          <li><CheckCircle color="#487E86" size="20" /> Autoestima: 5 conceptos básicos</li>
          <li><CheckCircle color="#487E86" size="20" /> Comunicación emocional efectiva</li>
        </ul>
        <div>
          <script>
            {`
              if (window.convertflow == undefined) {
                var script = document.createElement('script'); 
                script.async = true;
                script.src = "https://js.convertflow.co/production/websites/26159.js"; 
                document.body.appendChild(script); 
              };
            `}
          </script>
          <div class="cf-cta-snippet cta101750" data-website-id="26159" data-cta-id="101750"></div>
        </div>
      </div>
    </section>
    <CookieConsent buttonText="Entendido" cookieName="lorenaGrimal" buttonStyle={{ backgroundColor: "var(--primaryLight)", fontSize: "14px", color: "white", borderRadius: '30px' }}>¡Hola! Este sitio web usa cookies propias y de terceros para mejorar tu navegación.</CookieConsent>
  </main>
)

const MentesPoderosasPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <MentesPoderosasPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default MentesPoderosasPage

export const pageQuery = graphql`
  query MentesPoderosasPage($id: String!) {
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
