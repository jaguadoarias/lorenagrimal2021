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
      { subNav } = this.props,
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
      <header className={`Header ${active ? 'Header-active' : ''} ${isBlogPage && 'Header-fixed'}`}>
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
            {/* <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'posts' ? 'active' : ''
              }`}
            >
              <span
                className={`NavLink Nav--GroupParent ${
                  this.props.location.pathname.includes('posts') ||
                  this.props.location.pathname.includes('blog') ||
                  this.props.location.pathname.includes('post-categories')
                    ? 'active'
                    : ''
                }`}
                onClick={() => this.toggleSubNav('posts')}
                onKeyDown={e => this.keyToggleSubNav(e, 'posts')}
                tabIndex={0}
                aria-label="Navigation"
                role="button"
              >
                El Blog
                <div className="Nav--GroupLinks">
                  <NavLink to="/blog/" className="Nav--GroupLink">
                    All Posts
                  </NavLink>
                  {subNav.posts.map((link, index) => (
                    <NavLink
                      to={link.slug}
                      key={'posts-subnav-link-' + index}
                      className="Nav--GroupLink"
                    >
                      {link.title}
                    </NavLink>
                  ))}
                </div>
              </span>
            </div> */}
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
