import React from 'react';

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.blogId = this.props.routeParams.blog_id;
    // this.blog = this.props.blogs[this.blogId];
    // debugger;
    this.props.requestBlog(this.blogId);
  }

  componentDidUpdate() {
    // debugger;
    this.blog = this.props.blogs[this.blogId];
  }

  render() {
    // debugger;

    return (
      <section>
        Blog Show Page
      </section>
    );
  }
}

export default Blog;
