import React from 'react';

const DeleteCommentBtn = ({ props }) => {
  const handleDelete = () => props.deleteComment(props.comment.id);

  if (props.loggedIn) {
    // Very basic admin auth
    if (props.currentUser.id === 1 || props.currentUser.id === 2) {
      return (
        <div className='delete-comment' onClick={ handleDelete }>
          DELETE
        </div>
      );
    }
  } else {
    return (
      <div></div>
    );
  }
};

const Comment = props => {
  return (
    <div className='comment'>
      { props.comment.body }
      <br/>
      Author: { props.comment.author_name }
      <br/>
      <DeleteCommentBtn props={ props } />
    </div>
  );
};

export default Comment;
