import React from 'react';

const Tagging = props => {
  const deleteTagging = () => props.deleteTagging(props.tagging.id);

  return (
    <div className='tag btn'>
      <div className='delete-tagging' onClick={ deleteTagging }>
        X
      </div>
      { props.tagging.tag.name }
    </div>
  );
};

export default Tagging;
