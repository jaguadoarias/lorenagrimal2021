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
        {sign && (
          <svg className="Sign" viewBox="0 0 229 147" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.9996 124.5C42.2225 98.3487 46.459 75.5028 36.5274 49.8056C30.809 35.0098 23.6066 16.4921 12.583 4.66669C4.16874 -4.3595 1.84435 7.42151 1.49964 14.5278C0.47058 35.7423 5.12986 57.1941 10.9163 77.4722C15.9559 95.1331 21.7757 114.473 32.9441 129.389C38.1288 136.313 51.3135 148.623 59.6663 138.694C67.7217 129.119 66.6324 111.551 63.8885 100.278C62.6561 95.2141 60.5031 86.3368 56.6108 82.4445C55.6537 81.4874 59.1568 95.2565 59.833 96.7778C61.863 101.345 69.4166 119.603 76.7496 117.722C88.5057 114.708 64.9417 72.1043 72.5552 81.5556C77.2948 87.4392 80.3289 94.2157 86.1385 99.3056C93.7648 105.987 94.397 97.1445 93.4996 90.7778C92.947 86.8568 88.1275 76.0743 90.4163 79.3056C93.8017 84.085 96.7712 89.124 101.389 92.8889C106.738 97.2511 116.127 101.993 121.111 94.4445C130.962 79.524 126.026 57.3711 121.055 41.8334C117.338 30.2136 112.8 12.55 102.555 4.38891C93.8651 -2.53368 98.8704 18.6002 99.3885 20.5556C104.611 40.2649 115.317 58.8673 126.277 75.8889C131.236 83.5893 136.703 90.9282 142.194 98.25C143.48 99.9641 144.853 101.616 146.055 103.389C147.585 105.645 147.867 106.333 145.111 104.944C133.146 98.9153 123.373 91.6114 109.333 91.3334C96.6291 91.0818 84.7013 97.1312 81.6108 110.222C79.1748 120.54 80.6577 139.397 91.9996 144.611C114.425 154.92 120.064 109.708 121 98.2222C121.944 86.6217 121.147 74.8788 122.444 63.3056C122.618 61.7506 123.433 55.5743 125.666 54.5C128.336 53.2154 135.3 62.5504 135.666 62.9445C140.935 68.6147 146.227 74.998 153.111 78.8334C166.583 86.3398 172.32 76.8335 173.444 64.2778C173.876 59.4522 170.459 46.4182 178.666 48.6667C191.471 52.1748 201.189 55.7174 214.722 52.3889C220.838 50.8847 223.996 47.4488 228 43" strokeLinecap="round" stroke-linejoin="round"/>
          </svg>
        )}
        {cta && (
          <Link to="/reserva-sesion/" aria-label="Navigation" role="button">
            <button
              className="Button"
              tabIndex={0}
              aria-label={cta}
            >
              {cta}
            </button>
          </Link>
        )}
        {anchor && (
          <a href={`#${anchor}`} className="Button" title="Inscríbete a la formación">Inscríbete a la formación</a>
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
