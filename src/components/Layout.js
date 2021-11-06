import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'

import 'modern-normalize/modern-normalize.css'
import './globalStyles.css'

function FacebookPixel() {
  React.useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('427346455568715');
        ReactPixel.pageView();
      });
  });
  return null;
}

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
              htmlAttributes={{
                lang: 'en',
              }}
            >
              {title}
              <link href="https://ucarecdn.com" rel="preconnect" crossorigin />
              <link rel="dns-prefetch" href="https://ucarecdn.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" />              
              <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Josefin+Sans:wght@300;400;700&display=swap" rel="stylesheet"></link>
              <script async src="https://js.convertflow.co/production/websites/26159.js"></script>
              
            </Helmet>
            <FacebookPixel />
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
