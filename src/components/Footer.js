import React from 'react'
import { Link } from 'gatsby'
import { Instagram, Send, Mail, Youtube } from 'react-feather'
import Logo from './Logo'
import './Footer.css'

export default () => (
  <>
    <footer className="footer">
      <div className="container">
        <nav>
          <ul>
            {/* <li><Link to="/">Inicio</Link></li> */}
            <li><Link to="/programas/sesiones-individuales/" aria-label="Navigation" role="button">Sesiones individuales</Link></li>
            <li><Link to="/programas/mentes-poderosas/" aria-label="Navigation" role="button">Mentes Poderosas</Link></li>
            <li><Link to="/reserva-sesion/" aria-label="Navigation" role="button">Reserva sesión</Link></li>
            <li><Link to="/conoceme/" aria-label="Navigation" role="button">Conóceme</Link></li>
            <li><a href="/privacidad/" target="_blank" rel="noreferrer noopener">Privacidad</a></li>
            <li><a href="/cookies/" target="_blank" rel="noreferrer noopener">Cookies</a></li>
          </ul>
        </nav>
        
       <nav>
          <ul className="social">
            <li>
              <a href="https://www.instagram.com/lorenagrimal_psicologa" target="_blank" rel="noopener noreferrer" aria-label="Lorena Grimal en Instagram">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCyIKXkENsgUEKTFf1BBnr0Q" target="_blank" rel="noopener noreferrer" aria-label="Lorena Grimal en Youtube">
                <Youtube />
              </a>
            </li>
            <li>
              <a href="https://t.me/lorenagrimal" target="_blank" rel="noopener noreferrer" aria-label="Lorena Grimal en Telegram">
                <Send />
              </a>
            </li>
            <li>
              <a href="mailto:lorena@lorenagrimal.com" target="_blank" rel="noopener noreferrer" aria-label="Escribe email a Lorena Grimal">
                <Mail />
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
