import React from 'react'
import { Link, NavLink } from 'react-router'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top text-white py-4">
    <div className="container">
      <NavLink className="navbar-brand fw-bold text-white fs-4" to={''}>
        START REACT
      </NavLink>
      <button className="navbar-toggler fw-bold text-white" type="button" 
      data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        MENU
          <i className="fa-solid fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold list-unstyled mt-sm-2 text-sm-center">
          <li className="nav-item mb-sm-2">
            <NavLink to={'portfolio'}>Portfolio</NavLink>
          </li>
          <li className="nav-item mb-sm-2">
            <NavLink to={'about'}>About</NavLink>
          </li>
          <li className="nav-item mb-sm-2">
            <NavLink to={'contact'}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
</nav>
  )
}
