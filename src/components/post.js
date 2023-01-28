import React from 'react'

function Post({props}) {
    return (
        <div className='post'>
            <div className='post-heading'>
                <div className='post-heading__author'>
                    <p>By&nbsp;
                        <span className='author-name'>{props.info.author}</span>&nbsp;|&nbsp;<span className='author-date'>{props.info.date}</span>
                    </p>
                </div>
                <h2 className='post-heading__title'>{props.info.title}</h2>
            </div>
            <div className='post-image'>
                <img src={`/assets/images/${props.info.imgUrl}`} alt='post image' />
            </div>
            <div className='post-content'>
                <p className='post-content__desc'>{props.info.description}<a href='twiiter.com' class='btn-twit'>Twit..</a></p>
                <a href='#' className='btn-link btn-blue text-upper'>read more</a>
            </div>
        </div>
    )
}

export default Post