import React from 'react';
import Blog from './blog';

class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.children = props.children;
  }

  render() {
    return (
      <section className='blogs'>
        <span className='second-title'>RECENT BLOGS</span>

        <div className='blogs-row'>
          <Blog />
          <Blog />
        </div>

        <div className='blogs-row'>
          <Blog />
          <Blog />
        </div>
      </section>
    );
  }
}

export default Blogs;
