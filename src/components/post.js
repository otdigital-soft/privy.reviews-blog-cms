import React from "react"
import Content from "./shared/Content"
import Image from "./shared/Image"

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-image">
        <Image src={post.FeaturedImage?.url} alt="post image" />
      </div>
      <div className="post-heading">
        <div className="post-heading__author">
          <p>
            <span className="author-name">{post.Author}</span>
            &nbsp;|&nbsp;<span className="author-date">{post.Date}</span>
          </p>
        </div>
        <h3 className="post-heading__title">{post.Title}</h3>
      </div>
      <div className="post-content">
        <Content text={post.Content?.data?.Content} limit={200} />
      </div>
    </div>
  )
}

export default Post
