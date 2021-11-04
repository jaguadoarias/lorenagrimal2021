import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'

import 'modern-normalize/modern-normalize.css'
import './globalStyles.css'

export default ({ children, meta, title }) => {
  
  return (
    <StaticQuery
      query={graphql`
        query IndexLayoutQuery {
          settingsYaml {
            siteTitle
            siteDescription
            googleTrackingId
            socialMediaCard {
              image
            }
          }
          allPosts: allMarkdownRemark(
            filter: { fields: { contentType: { eq: "postCategories" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { siteTitle, socialMediaCard, googleTrackingId } =
            data.settingsYaml || {},
          subNav = {
            posts: data.allPosts.hasOwnProperty('edges')
              ? data.allPosts.edges.map(post => {
                  return { ...post.node.fields, ...post.node.frontmatter }
                })
              : false
          }

        return (
          <>
            <Helmet
              defaultTitle={siteTitle}
              titleTemplate={`%s - ${siteTitle}`}
            >
              {title}
              <link href="https://ucarecdn.com" rel="preconnect" crossorigin />
              <link rel="dns-prefetch" href="https://ucarecdn.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" />              
              <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Josefin+Sans:wght@300;400;700&display=swap" rel="stylesheet"></link>
              <script async src="https://js.convertflow.co/production/websites/26159.js"></script>
              <script
                dangerouslySetInnerHTML={{ __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '427346455568715');
                fbq('track', 'PageView');
                `}}
              />
              <noscript>{`<img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=427346455568715&ev=PageView&noscript=1"
              />`}</noscript>
            </Helmet>

            <Meta
              googleTrackingId={googleTrackingId}
              absoluteImageUrl={
                socialMediaCard &&
                socialMediaCard.image &&
                socialMediaCard.image
              }
              {...meta}
              {...data.settingsYaml}
            />

            <Header subNav={subNav} />

            {children}
            <div className="cf-26159-area-79633"></div>    
            <Footer />
          </>
        )
      }}
    />
  )
}
