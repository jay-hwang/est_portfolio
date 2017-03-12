import React from 'react';

const BlogLink = props => {
  const handleEdit = () => {
    alert('will re-route to edit');
  };

  const handleDelete = () => {
    // check props.removeBlog
    debugger;
    props.removeBlog(props.blog.id);
  };

  return (
    <div className='blog-link'>
      <span className='blog-title'>{ props.blog.title }</span>
      <p className='blog-intro'>
        { props.blog.created_at }
      </p>

      <div className='blog-actions'>
        <div className='blog-action'>EDIT</div>
        <div className='blog-action' onClick={ handleDelete }>DELETE</div>
      </div>
    </div>
  );
};

export default BlogLink;
