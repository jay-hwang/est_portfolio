import React from 'react';

class Tagging extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: props.isActive
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
    if (this.state.isActive) {
      this.props.deleteTagging(this.props.tagging.id);
    } else {
      const tagging = { tag_id: this.props.tag.id, blog_id: this.props.blog.id };
      this.props.createTagging(tagging);
    }
    this.toggleState();
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

export default Tagging;
