import React, { Component } from 'react'
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'
import Logo from './Logo'

import './Header.css'

export class Navigation extends Component {
  state = {
    active: false,
    activeSubNav: false,
    currentPath: false
  }

  componentDidMount = () =>
    this.setState({ currentPath: this.props.location.pathname })

  handleMenuToggle = () => {
    var bodyTag = document.body.classList;
    this.setState({ active: !this.state.active })
    if (bodyTag.contains('menu-open')) {
      bodyTag.remove('menu-open');
    } else {
      bodyTag.add('menu-open');
    }
    
  }

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle()
  // keyboard events
  handleLinkKeyDown = ev => {
    if (ev.keyCode === 13) {
      this.state.active && this.handleMenuToggle()
    }
  }

  
  render() {
    const { active } = this.state,
      NavLink = ({ to, className, children, ...props }) => (
        <li>
          <Link
            to={to}
            className={`NavLink ${
              to === this.state.currentPath ? 'active' : ''
            } ${className}`}
            onClick={this.handleLinkClick}
            onKeyDown={this.handleLinkKeyDown}
            tabIndex={0}
            aria-label="Navigation"
            role="button"
            {...props}
          >
            {children}
          </Link>
        </li>
        
      )
    const isBlogPage = this.props.location.pathname.includes('posts');

    return (
      <header className={`Header ${active ? 'Header-active' : ''} ${isBlogPage ? 'Header-fixed' : ''}`}>
        <nav className="Nav container">
          <Link
            to="/"
            onClick={this.handleLinkClick}
            onKeyDown={this.handleLinkKeyDown}
            tabIndex={0}
            aria-label="Navigation"
            role="button"
          >
            <Logo isPositive />
          </Link>
          <ul className="Nav--Links">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/sesiones/">Sesiones</NavLink>
            <NavLink to="/reserva-sesion/">Reserva tu sesión</NavLink>
            <NavLink to="/conoceme/">Conóceme</NavLink>
            {/* <NavLink to="/default/">Publicaciones</NavLink> */}
            <NavLink to="/blog/">Blog</NavLink>
          </ul>
          <button
            className="Button-blank Nav--MenuButton"
            onClick={this.handleMenuToggle}
            tabIndex={0}
            aria-label="Navigation"
          >
            {active ? <X size={40} color="#e2b33c" /> : <Menu size={40} color="#e2b33c" />}
          </button>
        </nav>
      </header>
    )
  }
}

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)
