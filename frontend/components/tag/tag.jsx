import React from 'react';

const Tag = props => {
  const createTagging = () => {
    const tagging = { blog_id: props.blog.id, tag_id: props.tag.id };
    props.createTagging(tagging);
  };

  return (
    <div className='tag btn' onClick={ createTagging }>
      { props.tag.name }
    </div>
  );
};

export default Tag;
