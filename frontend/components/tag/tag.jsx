import React from 'react';

class Tag extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      color: 'white'
    };

    this.handleClick = this.handleClick.bind(this);
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    if (this.state.isActive) {
      this.setState({ isActive: false, color: 'white' });
    } else {
      this.setState({ isActive: true, color: 'green' });
    }
  }

  handleClick() {
    if (this.props.isFilter) {
      this.props.updateTagFilter(this.props.tag, this.state.isActive);
      this.toggleState();
    } else {
      debugger;
      const tagging = { blog_id: this.props.blog.id, tag_id: this.props.tag.id };
      this.props.createTagging(tagging);
    }
  }

  render() {
    return (
      <div className='tag btn' onClick={ this.handleClick }
        style={{ backgroundColor:this.state.color }}>
        { this.props.tag.name }
      </div>
    );
  }
}

// const Tag = props => {
//   const handleClick = () => {
//     if (props.isFilter) {
//       const tags = [props.tag.name];
//       props.requestBlogs(tags);
//     } else {
//       debugger;
//       const tagging = { blog_id: props.blog.id, tag_id: props.tag.id };
//       props.createTagging(tagging);
//     }
//   };
//
//   return (
//     <div className='tag btn' onClick={ handleClick }>
//       { props.tag.name }
//     </div>
//   );
// };

export default Tag;
