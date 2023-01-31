import React from "react"
import Image from "../shared/Image"

const SubFeaturedPosts = ({ posts }) => {
  return (
    <div className="featured-post__sub">
      {posts && posts.length > 0
        ? posts.map((post, index) => (
            <div className="featured-post__feedback" key={index}>
              <div className="feedback-content">
                <div className="feedback-author">
                  <p>
                    <span>By &nbsp;{post.Author}</span> &nbsp;&nbsp;
                    {post.Date}
                  </p>
                </div>
                <div className="feedback-desc">
                  <a href="#">{post.Title}</a>
                </div>
              </div>
              <div className="feedback-image">
                <Image src={post.Avatar?.url} alt="Blog image" />
              </div>
            </div>
          ))
        : null}
    </div>
  )
}

export default SubFeaturedPosts
