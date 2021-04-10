import React from 'react'
import { Link } from 'gatsby'
import { Instagram, Youtube, Send } from 'react-feather'
import Logo from './Logo'
import './Footer.css'

export default () => (
  <>
    <footer className="footer">
      
      <div className="container">
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about/" aria-label="Navigation" role="button">Conóceme</Link></li>
            <li><Link to="/mentoring/" aria-label="Navigation" role="button">Mentorias</Link></li>
            <li><Link to="/default/" aria-label="Navigation" role="button">Publicaciones</Link></li>
            <li><Link to="/contact/" aria-label="Navigation" role="button">Contacto</Link></li>
          </ul>
        </nav>

        
       <nav>
          <ul className="social">
            <li>
              <a href="https://www.instagram.com/">
                <Instagram size={30} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <Youtube size={30}/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <Send size={30} />
              </a>
            </li>
          </ul>
        </nav>
        
      </div>
      <div className="container">
      <Link to="/" aria-label="Navigation" role="button">
          <Logo isNegative />
        </Link>
        <small>
        © {new Date().getFullYear()}
        </small>
      </div>
    </footer>
  </>
)
