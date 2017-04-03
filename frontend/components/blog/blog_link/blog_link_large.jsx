import React from 'react';

const BlogLinkLarge = props => {
  return (
    <div className='blink-large-box'>
      <div className='blog-content desktop'>
        <div className='blink-img'>
          <img className='blog-img' src={ props.blog.image_url } />
        </div>

        <div className='blink-intro'>
          <span className='blink-title'>{ props.blog.title }</span>
          <p className='blink-body'>
            { props.blog.body.substring(0, 400) }...
          </p>
          <button className='blink-more btn' onClick={ props.handleBlogShow }>
            READ MORE
          </button>
        </div>
      </div>

      <div className='blog-content-mobile mobile'>
        <div className='blink-img'>
          <img className='blog-img-mobile' src={ props.blog.image_url } />
        </div>

        <div className='blink-intro-mobile'>
          <span className='blink-title'>{ props.blog.title }</span>
          <p className='blink-body'>
            { props.blog.body.substring(0, 400) }...
          </p>
          <button className='blink-more btn' onClick={ props.handleBlogShow }>
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogLinkLarge;
