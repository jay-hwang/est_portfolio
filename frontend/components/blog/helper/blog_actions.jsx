import React from 'react';

const BlogActions = ({ isUserBlogs, handleEdit, handleDelete }) => {
  if (isUserBlogs) {
    return (
      <div className='blog-actions'>
        <div className='blog-action' onClick={ handleEdit }>EDIT</div>
        <div className='blog-action' onClick={ handleDelete }>DELETE</div>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
};

export default BlogActions;
