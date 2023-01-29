import React from "react"
import Burger from "../components/burger"

/* eslint-disable jsx-a11y/anchor-is-valid */

function Header() {
  const [burger, setBurger] = React.useState(false)
  return (
    <React.Fragment>
      <section className={`header ${burger ? "is-opened" : ""}`}>
        <div className="container">
          <div className="header-brand">
            <a href="/" className="header-brand__logo">
              <img src="/assets/images/logo.png" alt="logo"></img>
            </a>
          </div>
          <div className={`header-nav ${burger ? "phone-menu" : ""}`}>
            <ul className={`header-nav__menu ${burger ? "phone" : ""}`}>
              <li className="header-nav__item">
                <a href="#" className="header-nav__link">
                  Home
                </a>
              </li>
              <li className="header-nav__item">
                <a href="#" className="header-nav__link">
                  Categories
                </a>
              </li>
              <li className="header-nav__item">
                <a href="#" className="header-nav__link">
                  About us
                </a>
              </li>
              <li className="header-nav__item">
                <a href="#" className="header-nav__link">
                  Blog
                </a>
              </li>
              <li className="header-nav__item">
                <a href="#" className="header-nav__link">
                  Login
                </a>
              </li>
            </ul>
            <div className="header-nav__creator">
              <a href="#" className="header-nav__btn header-nav__link">
                For creators
              </a>
            </div>
          </div>
          <Burger open={burger} setOpen={setBurger} />
        </div>
      </section>
    </React.Fragment>
  )
}

export default Header
