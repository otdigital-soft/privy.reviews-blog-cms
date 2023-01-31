import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Header from "../layout/header"
import Footer from "../layout/footer"
import MainFeaturedPost from "../components/blog/MainFeaturedPost"
import RightFeaturedPost from "../components/blog/RightFeaturedPost"
import SubFeaturedPosts from "../components/blog/SubFeaturedPosts"
import Post from "../components/post"
import data from "../data/data.json"

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
          <div className="featured-post">
            <RightFeaturedPost post={currentItems[1]} />
            <SubFeaturedPosts posts={[currentItems[2], currentItems[3]]} />
          </div>
        </div>
      </section>
      <section className="latest-posts">
        <div className="container">
          <div className="latest-posts__bar text-center text-upper">
            latest post
          </div>
          {blogList.map((item, index) => (
            <Post post={item} key={index} />
          ))}
        </div>
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default Blog
