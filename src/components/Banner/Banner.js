import React from 'react';
import './Banner.css';

function Banner(props) {
  return (
    <div className="banner">
      <img src={props.image} alt="Banner" />
    </div>
  );
}

export default Banner;
