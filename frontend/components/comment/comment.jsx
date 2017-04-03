import React from 'react';
import { _parseTime } from '../../util/helper_methods';

const DeleteCommentBtn = ({ props }) => {
  const handleDelete = () => props.deleteComment(props.comment.id);

  if (props.loggedIn) {
    if (props.currentUser.id === 1 || props.currentUser.id === 2) {
      return (
        <button className='delete-comment btn' onClick={ handleDelete }>
          DELETE
        </button>
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
      <div className='comment-head'>
        <h4 className='comment-author'>{ props.comment.author_name }</h4>
        <span className='comment-date'>
          { _parseTime(props.comment.created_at) }
        </span>
      </div>

      <p className='comment-body'>
        { props.comment.body }
      </p>
      <DeleteCommentBtn props={ props } />
    </div>
  );
};

export default Comment;
