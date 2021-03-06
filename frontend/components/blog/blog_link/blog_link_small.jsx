import React from 'react';
import BlogActions from '../helper/blog_actions';
import { _parseTime } from '../../../util/helper_methods';

const BlogLinkSmall = props => {
  const blogLinkInfoId = `blog-link-info-${props.blog.id}`;

  const showInfo = () => {
    $(`#${blogLinkInfoId}`).fadeIn();
  };

  const hideInfo = () => {
    $(`#${blogLinkInfoId}`).fadeOut();
  };

  // To keep image size from getting squished, try making
  // height: 100 & overflow-x: hidden, and flex center
  return (
    <div className='blog-link' onMouseEnter={ showInfo }
      onMouseLeave={ hideInfo } onClick={ props.handleBlogShow }>

      <img className='slink-img' src={ props.blog.image_url } />

      <div className='display-none blog-link-info' id={ blogLinkInfoId }>
        <div className='dark-veil'></div>
        <div className='blog-info-content'>
          <span className='blog-title'>{ props.blog.title }</span>

          <div className='blog-link-divider'></div>

          <div className='blog-intro'>
            { _parseTime(props.blog.created_at) }
          </div>
        </div>

        <BlogActions isUserBlogs={ props.isUserBlogs }
          handleEdit={ props.handleEdit }
          handleDelete={ props.handleDelete } />
      </div>

    </div>
  );
};

export default BlogLinkSmall;
