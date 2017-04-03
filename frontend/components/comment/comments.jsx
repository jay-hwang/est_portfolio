import React from 'react';
import Comment from './comment';

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.mapComments = this.mapComments.bind(this);
  }

  componentDidMount() {
    this.props.requestComments(this.props.blog.id);
  }

  mapComments() {
    let commentLis = Object.keys(this.props.comments);
    if (commentLis.length === 0) {
      return (
        <h4 className='text-align-center'>Be the first to make a comment!</h4>
      );
    } else {
      return commentLis.map((id, i) => (
        <li key={i}>
          <Comment blog={ this.props.blog }
            loggedIn={ this.props.loggedIn }
            currentUser={ this.props.currentUser }
            comment={ this.props.comments[id] }
            deleteComment={ this.props.deleteComment } />
        </li>
      ));
    }
  }

  render() {
    let commentLis = this.mapComments();

    return (
      <div>
        <div className='blog-content desktop'>
          <h3 className='header'>COMMENTS</h3>
          <ul className='comments'>
            { commentLis }
          </ul>
        </div>

        <div className='blog-content-mobile mobile'>
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
