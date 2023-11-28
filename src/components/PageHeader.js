import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Image from './Image'
import Content from './Content'
import './PageHeader.css'

const PageHeader = ({
  title,
  subtitle,
  subheading,
  sign,
  backgroundImage,
  large,
  align,
  className = '',
  cta,
  anchor
}) => {
  if (large) className += ' PageHeader-large'
  return (
    <div className={`PageHeader relative ${className} ${align ? align : ''}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="large"
          src={backgroundImage}
          alt={title}
          size="cover"
        />
      )}
      <div className="container relative">
        <h1 className="PageHeader--Title">{title}</h1>
        {subheading && <h2 className="PageHeader--Subheading">{subheading}</h2>}
        {subtitle && (
          <Content className="PageHeader--Subtitle" src={subtitle} />
        )}
        {/* {cta && (
          <Link to="/reserva-sesion/" aria-label={cta} role="button" className="Button">
              {cta}
          </Link>
        )} */}
        {anchor && (
          <a
            href={`#${anchor}`}
            className="Button"
            title="Inscríbete a la formación"
          >
            Inscríbete a la formación
          </a>
        )}
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
