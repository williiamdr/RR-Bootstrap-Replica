import React from 'react';

function BackgroundImage({ imageUrl, children }) {
  const divStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '40vh', // Ensures the image covers the entire viewport height
  };

  return <div style={divStyle}>{children}</div>;
}

export default BackgroundImage;