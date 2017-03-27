import React from 'react';

const UploadButton = props => {
  const upload = e => {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, images) => {
        if (error) {
          // something went wrong
        } else {
          props.addImage(images[0].url);
        }
      }
    );
  };

  return (
    <button onClick={ upload }>UPLOAD IMAGE</button>
  );
};

export default UploadButton;
