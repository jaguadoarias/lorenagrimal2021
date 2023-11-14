import React, { Component } from 'react'
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import { Menu, X, ChevronDown } from 'react-feather'
import Logo from './Logo'

import './Header.css'

export class Navigation extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.state = {
      active: false,
      activeSubNav: false,
      currentPath: false
    }
  }

  componentDidMount() {
    this.setState({ currentPath: this.props.location.pathname });
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if(this.state.activeSubNav) {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        this.setState({ activeSubNav: false })
      }
    }
  }

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

  toggleSubNav = subNav =>
    this.setState({
      activeSubNav: this.state.activeSubNav === subNav ? false : subNav
    })

  keyToggleSubNav = (e, subNav) => {
    // key o is for open so you can enter key to open
    if (e.keyCode === 79 || e.keyCode === 27) {
      this.toggleSubNav(subNav)
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
      <header
        className={`Header ${active ? 'Header-active' : ''} ${
          isBlogPage ? 'Header-fixed' : ''
        }`}
      >
        <nav className="Nav container">
          <Link
            to="/"
            onClick={this.handleLinkClick}
            onKeyDown={this.handleLinkKeyDown}
            tabIndex={0}
            aria-label="Navigation"
            role="button"
          >
            <Logo isNegative />
          </Link>
          <ul className="Nav--Links">
            <NavLink to="/">Inicio</NavLink>
            {/* <NavLink to="/sesiones/">Programas</NavLink> */}
            <li
              className={`Nav--Group ${
                this.state.activeSubNav === 'programas' ? 'active' : ''
              }`}
            >
              <span
                className={`NavLink Nav--GroupParent ${
                  this.state.activeSubNav === 'programas' ? 'active' : ''
                }`}
                onClick={() => this.toggleSubNav('programas')}
                onKeyDown={e => this.keyToggleSubNav(e, 'programas')}
                tabIndex={0}
                aria-label="Navigation"
                role="button"
                ref={this.setWrapperRef}
              >
                Programas
                <ChevronDown size={18} />
                <ul className="Nav--GroupLinks">
                  <NavLink
                    to="/programas/sesiones-individuales/"
                    className="Nav--GroupLink"
                  >
                    Sesiones individuales
                  </NavLink>
                  <NavLink
                    to="/programas/mentes-poderosas/"
                    className="Nav--GroupLink"
                  >
                    Mentes Poderosas 2.0
                  </NavLink>
                  {/* <NavLink to="/blog/" className="Nav--GroupLink">
                    Psicontransformación
                  </NavLink> */}
                </ul>
              </span>
            </li>
            <NavLink to="/conoceme/">Conóceme</NavLink>
            {/* <NavLink to="/conoceme/">Cursos</NavLink> */}
            {/* <NavLink to="/blog/">Blog</NavLink> */}
            {/* <NavLink to="/reserva-sesion/">Reserva sesión</NavLink> */}

            {/* <NavLink to="/default/">Publicaciones</NavLink> */}
            {/* <NavLink to="/blog/">Blog</NavLink> */}
          </ul>
          <button
            className="Button-blank Nav--MenuButton"
            onClick={this.handleMenuToggle}
            tabIndex={0}
            aria-label="Navigation"
          >
            {active ? (
              <X size={40} color="#e2b33c" />
            ) : (
              <Menu size={40} color="#e2b33c" />
            )}
          </button>
        </nav>
      </header>
    )
  }
}

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)
