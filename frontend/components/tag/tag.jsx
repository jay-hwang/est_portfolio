import React from 'react';
import { withRouter } from 'react-router';

class Tag extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };

    this.toggleState = this.toggleState.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggleState() {
    if (this.state.isActive) {
      this.setState({ isActive: false });
    } else {
      this.setState({ isActive: true });
    }
  }

  handleClick() {
    if (this.props.isFilter) {
      this.props.updateTagFilter(this.props.tag, this.state.isActive);
      this.toggleState();
    } else {
      // console.log('will re-route to currentTag.blogs page here');
      // this.props.router.push('/');
    }
  }

  render() {
    if (this.state.isActive) {
      return (
        <div className='tag btn active-tag' onClick={ this.handleClick }>
          { this.props.tag.name }
        </div>
      );
    } else {
      return (
        <div className='tag btn' onClick={ this.handleClick }>
          { this.props.tag.name }
        </div>
      );
    }
  }
}

export default withRouter(Tag);
