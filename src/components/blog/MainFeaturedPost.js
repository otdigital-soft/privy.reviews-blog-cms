/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import Content from "../shared/Content"
import Image from "../shared/Image"

function FeaturedPostMain({ post }) {
  console.log("main post ", post)
  return (
    <div className="featured-post">
      <div className="featured-post-content">
        <div className="featured-post__date">
          <div className="featured-post__date__img">
            <Image src={post.Avatar?.url} alt="writer" className="date-image" />
          </div>
          <span className="day">{post.Date.day}</span>
          <span className="month">{post.Date.month}</span>
          <span className="year">{post.Date.year}</span>
        </div>
        <div className="featured-post__main">
          <h5 className="featured-post__author">
            By&nbsp;<span>&nbsp;{post.Author}</span>
            <span>{post.Date}</span>
          </h5>
          {post.Title ? (
            <a href={`/blog/${post.Slug}`}>
              <h2 className="featured-post__title">{post.Title}</h2>
            </a>
          ) : null}
          {post.Title ? (
            <h4 className="featured-post__subtitle">{post.Title}</h4>
          ) : null}
          {post.Content?.data?.Content ? (
            <Content text={post.Content.data.Content} limit={150} />
          ) : null}
          <a href="#" className="btn-link btn-white">
            Read More
          </a>
        </div>
      </div>
      {post.FeaturedImage.url ? (
        <div className="featured-post-image">
          <Image src={post.FeaturedImage.url} alt="post image" />
        </div>
      ) : null}
    </div>
  )
}

export default FeaturedPostMain
