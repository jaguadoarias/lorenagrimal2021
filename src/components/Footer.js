import React from 'react'
import { Link } from 'gatsby'
import { Instagram, Send, Mail } from 'react-feather'
import Logo from './Logo'
import './Footer.css'

export default () => (
  <>
    <footer className="footer">
      <div className="container">
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/sesiones/" aria-label="Navigation" role="button">Sesiones</Link></li>
            <li><Link to="/reserva-sesion/" aria-label="Navigation" role="button">Reserva tu sesión</Link></li>
            <li><Link to="/conoceme/" aria-label="Navigation" role="button">Conóceme</Link></li>
            <li><a href="/privacidad/" target="_blank">Privacidad</a></li>
            <li><a href="/cookies/" target="_blank">Cookies</a></li>
          </ul>
        </nav>
        
       <nav>
          <ul className="social">
            <li>
              <a href="https://www.instagram.com/lorenagrimal_psicologa" target="_blank" rel="noopener noreferrer">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="mailto:lorena.grimal@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail />
              </a>
            </li>
            <li>
              <a href="https://t.me/lorenagrimal" target="_blank" rel="noopener noreferrer">
                <Send />
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
