/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import {
  FaCamera,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaBomb,
} from "react-icons/fa"
import { FooterLogo } from "../utils/imgImport"

function Footer() {
  return (
    <React.Fragment>
      <section className="footer">
        <div className="container">
          <div className="footer-top">
            <ul className="footer-list">
              <li className="footer-list__item">
                <h3 className="footer-list__heading">About</h3>
                <ul className="list-items">
                  <li className="list-item">
                    <a href="#" className="btn-link btn-gray">
                      About us
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="#" className="btn-link btn-gray">
                      Blog
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="#" className="btn-link btn-gray">
                      Trust in reviews
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="#" className="btn-link btn-gray">
                      Contact us
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer-list__item">
                <h3 className="footer-list__heading">Community</h3>
                <ul className="list-items">
                  <li className="list-item">
                    <a href="#" className="btn-link btn-gray">
                      Leave a review
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="#" className="btn-link btn-gray">
                      Support
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="#" className="btn-link btn-gray">
                      Sign up
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="#" className="btn-link btn-gray">
                      Log in{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer-list__item">
                <h3 className="footer-list__heading">Creators</h3>
                <ul className="list-items">
                  <li className="list-item">
                    <a href="#" className="btn-link btn-gray">
                      For creators
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="#" className="btn-link btn-gray">
                      Plans & Pricing
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="#" className="btn-link btn-gray">
                      Sign up
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="#" className="btn-link btn-gray">
                      Log in
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer-list__item">
                <h3 className="footer-list__heading">Follow Us</h3>
                <ul className="list-items">
                  <li className="list-item">
                    <a href="#" className="btn-blue">
                      <FaCamera />
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="#" className="btn-blue">
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="#" className="btn-blue">
                      <FaFacebook />
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="#" className="btn-blue">
                      <FaYoutube />
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="#" className="btn-blue">
                      <FaBomb />
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer-list__item">
                <h3 className="footer-list__heading">Language</h3>
                <select className="language">
                  <option>English</option>
                  <option>French</option>
                  <option>Portuguess</option>
                  <option>Indonesian</option>
                  <option>Russian</option>
                  <option>Spanish</option>
                  <option>Vietnamese</option>
                  <option>Filipino</option>
                  <option>Thai</option>
                  <option>Turkish</option>
                  <option>Urdu/Punjabi</option>
                  <option>German</option>
                  <option>Japanese</option>
                  <option>Italian</option>
                  <option>Hindi</option>
                </select>
              </li>
            </ul>
          </div>
          <div className="footer-bottom">
            <div className="footer-brand">
              <a href="#" className="footer-logo">
                <img src={FooterLogo} alt="PrivyReviews Logo" />
              </a>
            </div>
            <ul className="footer-menu">
              <li className="footer-menu__item">
                <a href="#" className="footer-menu__link btn-link btn-gray">
                  Legal
                </a>
              </li>
              <li className="footer-menu__item">
                <a href="#" className="footer-menu__link btn-link btn-gray">
                  Privacy policy
                </a>
              </li>
              <li className="footer-menu__item">
                <a href="#" className="footer-menu__link btn-link btn-gray">
                  Terms and conditions
                </a>
              </li>
              <li className="footer-menu__item">
                <a href="#" className="footer-menu__link btn-link btn-gray">
                  Guidlines and reviewers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Footer
