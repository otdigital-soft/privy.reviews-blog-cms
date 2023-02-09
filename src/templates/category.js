import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import MainFeaturedPost from "../components/blog/MainFeaturedPost"
import Post from "../components/post"
import Layout from "../layout/layout"

const CategoryTemplate = ({ pageContext, data }) => {
  const blogList = data.allStrapiBlog.nodes
  const [currentItems, setCurrentItems] = useState(blogList)
  return (
    <Layout>
      <React.Fragment>
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
      </React.Fragment>
    </Layout>
  )
}

export default CategoryTemplate

export const query = graphql`
  query BlogList($slug: String!) {
    allStrapiBlog(filter: { category: { Slug: { eq: $slug } } }) {
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
`
