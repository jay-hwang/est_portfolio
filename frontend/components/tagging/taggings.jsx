import React from 'react';
import Tagging from './tagging';

class Taggings extends React.Component {
  constructor(props) {
    super(props);
    this.mapTaggings = this.mapTaggings.bind(this);
  }

  componentDidMount() {
    this.props.requestTaggings(this.props.blog.id);
  }

  mapTaggings() {
    if (Object.keys(this.props.taggings).length === 0) { return; }
    return Object.keys(this.props.taggings).map((id, i) => (
      <li key={i} className='tagging'>
        <Tagging tagging={ this.props.taggings[id] }
          deleteTagging={ this.props.deleteTagging }
          blog={ this.props.blog } />
      </li>
    ));
  }

  render() {
    let taggings = this.mapTaggings();

    return (
      <div>
        <h3 className='header'>Taggings</h3>
        <div className='taggings'>
          { taggings }
        </div>
      </div>
    );
  }
}

export default Taggings;
