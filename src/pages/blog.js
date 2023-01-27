import React from 'react'
import Header from '../layout/header'
import Footer from '../layout/footer'
import FeaturedPost from '../components/featured-post'
import Post from '../components/post'
import data from '../data/data.json'

import '../assets/css/style.css'

function Blog () {
    return (
        <React.Fragment>
            <Header />
            <section className='featured-posts'>
                <div className='container'>
                    <FeaturedPost props={{info: data.featuredposts[1]}} />
                    <FeaturedPost props={{info: data.featuredposts[0]}} />
                </div>
            </section>
            <section className='latest-posts'>
                <div className='container'>
                    <div className='latest-posts__bar text-center text-upper'>latest post</div>
                    {
                        data.posts.map((item, index) => (
                            <Post props={{info: item}} key={index}/>
                        ))
                    }
                </div>
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default Blog