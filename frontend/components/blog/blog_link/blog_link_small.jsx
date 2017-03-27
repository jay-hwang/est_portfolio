import React from 'react';
import BlogActions from '../helper/blog_actions';

const BlogLinkSmall = props => {
  return (
    <div className='blog-link' onClick={ props.handleBlogShow }>
      <img className='slink-img' src={ props.blog.image_url } />

      <span className='blog-title'>{ props.blog.title }</span>

      <p className='blog-intro'>
        { props.blog.created_at }
      </p>

      <BlogActions isUserBlogs={ props.isUserBlogs }
        handleEdit={ props.handleEdit }
        handleDelete={ props.handleDelete } />
    </div>
  );
};

export default BlogLinkSmall;
