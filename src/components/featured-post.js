import React from 'react'

function FeaturedPost({props}) {
    return (
        <div className='featured-post'>
            <div className='featured-post-content'>
                <div className='featured-post__date'>
                    <div className='featured-post__date__img'>
                        <img src={`/assets/images/${props.info.date.dateImgUrl}`} alt='OK' className='date-image'/>
                    </div>
                    <span className='day'>{props.info.date.day}</span>
                    <span className='month'>{props.info.date.month}</span>
                    <span className='year'>{props.info.date.year}</span>
                </div>
                <div className='featured-post__main'>
                    <h5 className='featured-post__author'>By&nbsp;<span>&nbsp;{props.info.author}</span><span>{props.info.date.day}&nbsp;{props.info.date.month}&nbsp;{props.info.date.year}</span></h5>
                    {props.info.title ? <h2 className='featured-post__title'>{props.info.title}</h2> : null}
                    {props.info.subtitle ? <h4 className='featured-post__subtitle'>{props.info.subtitle}</h4> : null}
                    {props.info.description ? <p className='featured-post__desc'>{props.info.description}</p> : null}
                    {props.info.readmore ? <a href='#' className='btn-link btn-white'>Read More</a> : null}
                    {props.info.imgSmUrl ? <img src={`/assets/images/${props.info.imgSmUrl}`} className='img-sm'/> : null}
                    {
                        props.info.feedbacks ? props.info.feedbacks.map((item, index) => (
                            <div className='featured-post__feedback' key={index}>
                                <div className='feedback-content'>
                                    <div className='feedback-author'><p><span>{item.author}</span>{item.date}</p></div>
                                    <div className='feedback-desc'><a href='#'>{item.description}</a></div>
                                </div>
                                <div className='feedback-image'><img src={`/assets/images/${item.feedImgUrl}`} alt='feedback image'></img></div>
                            </div>
                        )) : null
                    }
                </div>

            </div>
            {props.info.imgUrl ? <div className='featured-post-image'><img src={`/assets/images/${props.info.imgUrl}`} alt='post image' /></div> : null}
        </div>
    )
}

export default FeaturedPost