import React from 'react'
import { Link, graphql } from 'gatsby'
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
  email,
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
            <a className="Contact--Details--Item" target="_blank" rel="noopener noreferrer" href={`https://www.instagram.com/${instagram}`}>
              <Instagram /> {instagram}
            </a>

            <a className="Contact--Details--Item" target="_blank" rel="noopener noreferrer" href="https://joinclubhouse.com/@lorenagrimal">
              <svg className="ch" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.56562 2.54829C9.01132 1.57831 8.18122 1.71735 7.95064 1.87463C7.83742 1.95186 7.66151 2.13736 7.58315 2.39807C7.51312 2.63104 7.50231 2.98276 7.79847 3.46488C8.4969 4.60182 11.0077 7.73354 12.3923 9.4194C12.7516 9.85682 12.6381 10.5056 12.1616 10.7998C11.7649 11.0447 11.2481 10.9578 10.9533 10.5966L5.37246 3.7578C5.23135 3.57952 4.93832 3.29584 4.58981 3.13405C4.26275 2.98223 3.93677 2.95379 3.59816 3.15931C3.35744 3.30543 3.26441 3.53401 3.30777 3.87387C3.35455 4.2406 3.55983 4.6227 3.77858 4.83712C3.78595 4.84435 3.79314 4.85174 3.80015 4.85932L10.4697 12.0704C10.7221 12.3432 10.7671 12.7487 10.5806 13.0703C10.2983 13.557 9.62869 13.6384 9.23819 13.2333L3.55129 7.33346C3.08726 6.95219 2.4785 6.98814 2.07698 7.40907C1.62632 7.88148 1.65282 8.58844 2.21964 9.14665C2.23959 9.16629 2.26666 9.19295 2.30032 9.22607C2.71135 9.63056 4.10401 11.0011 5.49526 12.3962C6.24759 13.1504 7.00166 13.9141 7.60074 14.537C7.90003 14.8481 8.16313 15.1268 8.36895 15.3529C8.39957 15.3865 8.42961 15.4197 8.45885 15.4523C8.49682 15.4921 8.53257 15.5304 8.56577 15.5668C8.66353 15.6738 8.80156 15.8296 8.87471 15.9781C9.02107 16.2752 8.91313 16.6349 8.62738 16.8023C8.34162 16.9697 7.97511 16.8879 7.78757 16.615C7.75798 16.5719 7.67552 16.4715 7.53067 16.3094C7.44852 16.2237 7.35004 16.1247 7.23767 16.0146C6.91096 15.6943 6.48763 15.3006 6.05596 14.9075C5.1907 14.1198 4.31614 13.3568 4.15888 13.226C3.92765 13.0337 3.5752 12.9038 3.2495 12.893C2.90999 12.8816 2.77237 12.9938 2.73157 13.0626C2.47411 13.4967 2.53906 13.8721 2.72196 14.2207C2.88895 14.539 3.12216 14.7763 3.29554 14.9526C3.3318 14.9895 3.36545 15.0237 3.39532 15.0554C3.48698 15.1529 3.70166 15.346 4.0543 15.6568C4.11342 15.7089 4.17568 15.7637 4.24091 15.8212C4.55054 16.0938 4.92726 16.4253 5.35254 16.8083C6.38332 17.7369 7.70616 18.9742 9.10055 20.4516C11.173 22.6474 13.7596 23.2194 14.7195 23.2374C15.0682 23.244 15.3456 23.532 15.3391 23.8808C15.3326 24.2295 15.0445 24.5069 14.6957 24.5004C13.4497 24.477 10.5215 23.7975 8.1819 21.3187C6.81884 19.8743 5.52283 18.6619 4.50707 17.7469C4.08774 17.3692 3.71731 17.043 3.40779 16.7707C3.34207 16.7129 3.27907 16.6574 3.21896 16.6043C2.88871 16.3132 2.61778 16.0724 2.47536 15.9211C2.46361 15.9086 2.44569 15.8906 2.42271 15.8678C2.26504 15.7103 1.86971 15.3153 1.60336 14.8075C1.27916 14.1895 1.10318 13.3318 1.64514 12.4182C1.9468 11.9096 2.46257 11.6965 2.95025 11.6432C2.23343 10.9325 1.65536 10.3636 1.41406 10.1261C1.38039 10.093 1.3533 10.0664 1.33328 10.0467C0.384399 9.11216 0.13679 7.61291 1.16296 6.53717C1.65918 6.01698 2.31145 5.77617 2.95773 5.80885L2.88247 5.72749C2.47211 5.31945 2.13771 4.68411 2.05473 4.03371C1.96753 3.35016 2.15877 2.55534 2.94272 2.07948C3.73555 1.59826 4.52472 1.71119 5.12169 1.98831C5.6387 2.22831 6.04621 2.60206 6.28749 2.88246C6.26131 2.58129 6.29465 2.29655 6.37343 2.03446C6.54626 1.45949 6.921 1.0479 7.23881 0.831116C8.04985 0.27788 9.7254 0.281947 10.6624 1.92156C11.3536 3.13126 14.1797 7.07124 15.5288 8.91887C15.7022 9.15631 15.9463 9.43828 16.2117 9.62937C16.484 9.82558 16.6727 9.85422 16.803 9.81606C17.0121 9.75477 17.2072 9.55489 17.3737 9.09775C17.518 8.70152 17.5928 8.24796 17.6651 7.809C17.6752 7.74764 17.6853 7.68655 17.6955 7.62595C17.7898 7.06578 18.0871 6.26558 18.6405 5.58931C19.2055 4.89868 20.0659 4.30877 21.2537 4.29475C21.8343 4.2879 22.3275 4.42802 22.6889 4.74743C23.0515 5.06788 23.1924 5.49003 23.2276 5.86523C23.2624 6.23523 23.2002 6.59996 23.1157 6.89226C23.0326 7.17963 22.9118 7.45217 22.7843 7.63715C22.6598 7.8175 22.3195 8.3921 22.0581 9.17483C21.7967 9.95718 21.6287 10.9033 21.7942 11.8515C21.8479 12.1593 21.9123 12.4784 21.979 12.8086C22.3613 14.7038 22.8175 16.9642 21.757 19.5712C21.267 20.7756 20.6327 21.7514 19.9686 22.4741C19.3139 23.1868 18.5963 23.6892 17.9263 23.8834C17.5913 23.9806 17.241 23.7877 17.1439 23.4526C17.0468 23.1176 17.2396 22.7673 17.5746 22.6701C17.9451 22.5628 18.4745 22.2333 19.0385 21.6194C19.5933 21.0156 20.1495 20.1704 20.587 19.0951C21.4934 16.8668 21.1246 15.0077 20.7495 13.1178C20.6806 12.77 20.6113 12.4211 20.5498 12.0688C20.3363 10.8456 20.5584 9.67715 20.8599 8.77455C21.1614 7.87234 21.557 7.19171 21.7445 6.91973C21.773 6.87854 21.8445 6.74115 21.9022 6.54155C21.9584 6.34689 21.9854 6.14763 21.97 5.9833C21.9551 5.82419 21.9065 5.74169 21.8524 5.69392C21.7972 5.64511 21.6466 5.55339 21.2686 5.55785C20.5391 5.56646 20.006 5.91514 19.6181 6.38926C19.2183 6.87776 19.0029 7.46847 18.9412 7.83559C18.9322 7.88851 18.923 7.945 18.9134 8.00445C18.8436 8.43185 18.7489 9.0133 18.5606 9.53013C18.3481 10.1134 17.9523 10.7955 17.1583 11.0283C16.4859 11.2253 15.8854 10.9511 15.4735 10.6544C15.0543 10.3526 14.7187 9.95153 14.5086 9.66378C13.1824 7.84752 10.3011 3.83547 9.56562 2.54829ZM11.4161 10.2211C11.4157 10.2206 11.4154 10.2202 11.415 10.2198L11.4161 10.2211Z"  />
              </svg>
              @lorenagrimal
            </a>

            <a className="Contact--Details--Item" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCyIKXkENsgUEKTFf1BBnr0Q">
              <Youtube /> Lorena Grimal
            </a>
          
            <a className="Contact--Details--Item" href="https://t.me/lorenagrimal" target="_blank" rel="noopener noreferrer">
              <Send /> {telegram}
            </a>
            
            {email && (
              <a className="Contact--Details--Item" target="_blank" rel="noopener noreferrer" href={`mailto:${email}`}>
                <Mail /> {email}
              </a>
            )}

            <figure className="Contact--image">
              <img
                src="https://ucarecdn.com/b6401723-05ca-4164-8693-04d306d2b879/"
                alt="Lorena Grimal - Conoceme"
              />
            </figure>

            <Link to="/reserva-sesion/" aria-label="Reserva sesión ahora" role="button" className="Button">
              Reserva sesión ahora
            </Link>
          </div>

        <Content source={section1} />
        
      </div>
    </section>

    <CookieConsent buttonText="Entendido" cookieName="lorenaGrimal" buttonStyle={{ backgroundColor: "var(--primaryLight)", fontSize: "14px", color: "white", borderRadius: '30px' }}>¡Hola! Este sitio web usa cookies propias y de terceros para mejorar tu navegación.</CookieConsent>
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
