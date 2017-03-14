import React from 'react';

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.blogId = this.props.routeParams.blog_id;
    this.hasBlog = false;
    this.state = {
      title: '',
      body: ''
    };

    this.initBlog = this.initBlog.bind(this);
  }

  componentDidMount() {
    this.props.requestBlogs();
  }

  componentDidUpdate() {
    this.initBlog();
  }

  initBlog() {
    if (this.hasBlog) { return; }
    let blog = this.props.blogs[this.blogId];
    this.hasBlog = true;

    this.setState({
      title: blog.title,
      body: blog.body
    });
  }

  render() {
    console.log(this.state);

    return (
      <section className='blog-show'>
        Blog Show Page
        { this.state.title }
        { this.state.body }
      </section>
    );
  }
}

export default Blog;
