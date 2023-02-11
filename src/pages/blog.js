import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Header from "../layout/header"
import Footer from "../layout/footer"
import MainFeaturedPost from "../components/blog/MainFeaturedPost"
import Post from "../components/post"

const Blog = () => {
  const { allStrapiBlog } = useStaticQuery(graphql`
    query BlogList {
      allStrapiBlog {
        nodes {
          id
          Author
          Title
          Content {
            data {
              Content
            }
          }

          Date
          Slug
          FeaturedImage {
            url
          }
          Avatar {
            url
          }
        }
      }
    }
  `)

  const blogList = allStrapiBlog.nodes

  const [currentItems, setCurrentItems] = useState(blogList)

  return (
    <React.Fragment>
      <Header />
      <section className="featured-posts">
        <div className="container">
          <MainFeaturedPost post={currentItems[0]} />
        </div>
      </section>
      <section className="latest-posts">
        <div className="container">
          <div className="posts-wrapper">
            {currentItems.map((item, index) => (
              <Post post={item} key={index} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default Blog
