/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import React from "react"
import "./src/assets/scss/style.scss"

export const wrapRootElement = ({ element }) => {
  return <section data-app-name="privy-reviews">{element}</section>
}
