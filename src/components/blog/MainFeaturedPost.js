/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import Content from "../shared/Content"
import Image from "../shared/Image"

function FeaturedPostMain({ post }) {
  console.log("main post ", post)
  return (
    <div className="featured-post">
      {post.FeaturedImage.url ? (
        <div className="featured-post-image">
          <Image src={post.FeaturedImage.url} alt="post image" />
        </div>
      ) : null}
      <div className="featured-post-content">
        <div className="featured-post__main">
          <h5 className="featured-post__author">
            <span>{post.Author} | </span>
            <span>{post.Date}</span>
          </h5>
          {post.Title ? (
            <h2 className="featured-post__title">{post.Title}</h2>
          ) : null}
          {post.Content?.data?.Content ? (
            <Content text={post.Content.data.Content} limit={150} />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default FeaturedPostMain
