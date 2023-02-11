import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Burger from "../components/burger"
import { Logo } from "../utils/imgImport"

/* eslint-disable jsx-a11y/anchor-is-valid */

function Header() {
  const [burger, setBurger] = React.useState(false)
  const { allStrapiCategory } = useStaticQuery(graphql`
    query CategoryList {
      allStrapiCategory {
        nodes {
          id
          Title
          Slug
        }
      }
    }
  `)

  const categoryList = allStrapiCategory.nodes

  return (
    <React.Fragment>
      <section className={`header ${burger ? "is-opened" : ""}`}>
        <div className="container">
          <div className="header-brand">
            <a href="/" className="header-brand__logo">
              <img src={Logo} alt="logo"></img>
            </a>
          </div>
          <div className={`header-nav ${burger ? "phone-menu" : ""}`}>
            <ul className={`header-nav__menu ${burger ? "phone" : ""}`}>
              <li className="header-nav__item">
                <a href="/" className="header-nav__link">
                  Home
                </a>
              </li>
              {categoryList.map((item, idx) => (
                <li className="header-nav__item" key={item.id}>
                  <a href={`/${item.Slug}`} className="header-nav__link">
                    {item.Title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-signup">
            <button className="nav-signup__btn">Sign Up</button>
          </div>
          <Burger open={burger} setOpen={setBurger} />
        </div>
      </section>
    </React.Fragment>
  )
}

export default Header
