import React from "react"
import Content from "./shared/Content"
import Image from "./shared/Image"

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-heading">
        <div className="post-heading__author">
          <p>
            By&nbsp;
            <span className="author-name">{post.Author}</span>
            &nbsp;|&nbsp;<span className="author-date">{post.Date}</span>
          </p>
        </div>
        <h2 className="post-heading__title">{post.Title}</h2>
      </div>
      <div className="post-image">
        <Image src={post.FeaturedImage?.url} alt="post image" />
      </div>
      <div className="post-content">
        <Content text={post.Content?.data?.Content} limit={200} />
        <a href="#" className="btn-link btn-blue text-upper">
          read more
        </a>
      </div>
    </div>
  )
}

export default Post
