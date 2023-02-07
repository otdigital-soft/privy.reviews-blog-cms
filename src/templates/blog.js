import * as React from "react"
import Image from "../components/shared/Image"
import Layout from "../layout/layout"

const BlogTemplate = ({ pageContext }) => {
  const { slug, title, body, createdAt, featuredImage } = pageContext

  return (
    <Layout>
      <h1>blog here</h1>

      <div className="blog-hero">
        <Image
          src={featuredImage}
          alt="Blog Detail"
          className="blog-hero__img"
        />
        <div className="container">
          <div className="blog-hero__head">
            <h1>How to Market Your Music as a Creator in 2023</h1>
          </div>
          <div className="blog-hero__content">
            <div className="blog-author">
              <img src="" alt="" className="blog-author__img" />
              <div className="blog-author__detail">
                <p>By Author</p>
                <p>17 Jan 2023</p>
              </div>
            </div>
            <div className="blog-social">
              <span>Share&nbsp;</span>
              <a href="">Facebook</a>
              <a href="">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogTemplate
