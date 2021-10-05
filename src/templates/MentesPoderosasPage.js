import React from 'react'
import { graphql } from 'gatsby'
import { CheckCircle, Star, Calendar, Users, Activity, Video, Briefcase, Lock } from 'react-feather'
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
      anchor={'payments'}
    />
    <section className="section">
      <div className="container">
        <Content source={body} />
        <h2 className="taCenter">¿Qué vas a conseguir?</h2>     
        <ul className="List List--inline">
          <li><Star size="20" /> Descubrir los superpoderes de tu mente.</li>
          <li><Star size="20" /> Construir bienestar y felicidad.</li>
          <li><Star size="20" /> Potenciar tus fortalezas emocionales.</li>
          <li><Star size="20" /> Conectar con tu mejor versión.</li>
          <li><Star size="20" /> Un valioso autocontrol emocional.</li>
        </ul>
      </div>
      <div className="container container--fluid">
        <h2 className="taCenter">¿Por qué inscribirte?</h2>
        <ul className="Advantages">
          <li><Calendar color="#2a9d8f" size="40" /> <h3>Duración</h3> Entrenamos todos los lunes, es un gimansio emocional al que puedes inscribirte en cualquier momento del año.</li>
          <li><Users color="#2a9d8f" size="40" /> <h3>Tribu</h3> Un grupo exclusivo está esperándote para disfrutar del aprendizaje y compartir experiencias de gestión emocional.</li>
          <li><Activity color="#2a9d8f" size="40" /> <h3>Práctica</h3> Hacer para construir es uno de los pilares de mentes poderosas. Si quieres que algo cambie, haz algo para que suceda.</li>
          <li><Video color="#2a9d8f" size="40" /> <h3>On-line</h3> Las reuniones a través de la plataforma de vídeo Zoom, para que puedas conectarte desde cualquier lugar.</li>
          <li><Briefcase color="#2a9d8f" size="40" /> <h3>Flexibilidad</h3> Los contenidos están adaptados a las demandas del grupo, y se quedan grabados para que puedas volver a verlos.</li>
        </ul>
      </div>
      <section className="section section--secondary section--separator">   
        <div className="custom-shape-divider-top-1618653597">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
            </svg>
        </div>
        <div className="container">
          <h3>Programa formativo</h3>
          <p>Si bien no es un programa fijo, sino que se va adaptando a las necesidades de los participantes, algunos ejemplos de sesiones serían:</p>
        </div>

        <div className="container">
          <ul className="List">
            <li><CheckCircle color="#487E86" size="20" /> Conecta tus hemisferios cerebrales</li>
            <li><CheckCircle color="#487E86" size="20" /> El poder de la visualización</li>
            <li><CheckCircle color="#487E86" size="20" /> Transforma tus creencias limitantes en creencias empoderantes</li>
            <li><CheckCircle color="#487E86" size="20" /> El poder de tu pensamiento</li>
            <li><CheckCircle color="#487E86" size="20" /> Reestructura tu mente</li>
          </ul>
          <ul className="List">
            <li><CheckCircle color="#487E86" size="20" /> Emociones contenidas: Impacto en nuestras vidas</li>
            <li><CheckCircle color="#487E86" size="20" /> El poder de la gratitud</li>
            <li><CheckCircle color="#487E86" size="20" /> Transformación emocional con Lego</li>
            <li><CheckCircle color="#487E86" size="20" /> Autoestima: 5 conceptos básicos</li>
            <li><CheckCircle color="#487E86" size="20" /> Comunicación emocional efectiva</li>
          </ul>
        </div>
        <div className="custom-shape-divider-bottom-1618653720">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
            </svg>
        </div>
      </section>
      <section className="container cols payments">
        <div>
          <h2 className="priceTitle" id="payments">Elige la modalidad de pago que mejor se adapte a ti.</h2>
          <h3 className="priceTitle"><Lock color="#828282" size="20" /> Pago seguro con <strong>Stripe</strong></h3>
          <img
            src="https://ucarecdn.com/f14059fd-ef7f-40d4-a93b-02d6326cc545/"
            alt="Pago seguro con Stripe"
            className="logoStripe"
          />
        </div>
        <article>
          <ul className="PriceList">
            <li><strong>PAGO MENSUAL</strong></li>
            <li className="price">81 €</li>
            <li className="caption">(renovable cada mes)</li>
            <li><a href="https://buy.stripe.com/9AQ8xE02mcfO7Kg6oo" className="Button" target="_blank" rel="noreferrer noopener" title="Inscripción mensual">Inscripción mensual</a></li>
          </ul>
        </article>
        <article>
          <ul className="PriceList">
            <li><strong>PAGO TRIMESTRAL</strong></li>
            <li className="price"><del>243 €</del> 219 €</li>
            <li className="caption">(10% de descuento en tu pago trimestral)</li>
            <li><a href="https://buy.stripe.com/00g018bL4bbKfcI289" className="Button" target="_blank" rel="noreferrer noopener" title="Inscripción trimestral">Inscripción trimestral</a></li>
          </ul>
        </article>
      </section>
      
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
