import React from "react"

const Content = ({text, limit=150}) => {
    return (
        <p className="featured-post__desc" dangerouslySetInnerHTML={{__html: text?.length > limit ? text.substring(0, limit) + '...': text}}></p>
    )
}

export default Content