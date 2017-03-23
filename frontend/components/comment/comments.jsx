import React from 'react';
import Comment from './comment';
import CommentFormContainer from './comment_form_container';

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.mapComments = this.mapComments.bind(this);
    this.showCommentForm = this.showCommentForm.bind(this);
  }

  componentDidMount() {
    if (Object.keys(this.props.comments).length === 0) {
      this.props.requestComments(this.props.blog.id);
    }
  }

  mapComments(blog) {
    return Object.keys(this.props.comments).map((id, i) => (
      <li key={i}>
        <Comment blog={ blog }
          loggedIn={ this.props.loggedIn }
          currentUser={ this.props.currentUser }
          comment={ this.props.comments[id] }
          deleteComment={ this.props.deleteComment } />
      </li>
    ));
  }

  showCommentForm() {
    $('.dark-veil').fadeIn();
    $('.comment-form').removeClass('display-none');
    $('.comment-form').animate({ right: "+=1000" }, 200);
  }

  render() {
    let commentLis = this.mapComments(this.props.blog);

    return (
      <div>
        <button className='btn add-comment'
          onClick={ this.showCommentForm }>ADD COMMENT
        </button>
        <CommentFormContainer blog={ this.props.blog } />

        <div className='comments-box'>
          <div className='dark-veil display-none'></div>
          <h3 className='header'>COMMENTS</h3>
          <ul className='comments'>
            { commentLis }
          </ul>
        </div>
      </div>
    );
  }
}

export default Comments;
