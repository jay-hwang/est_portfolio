import React from 'react';

const Tagging = props => {
  const deleteTagging = () => props.deleteTagging(props.tagging.id);

  return (
    <div className='tag btn'>
      { props.tagging.tag.name }
      <span className='delete-tagging' onClick={ deleteTagging }>
        X
      </span>
    </div>
  );
};

export default Tagging;
