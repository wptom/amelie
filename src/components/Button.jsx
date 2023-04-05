import React from 'react';

const Button = (props) => {
  if (props.type === 'link') {
    return (
      <a href={props.link} className={'btn'}>
        <span>{props.text}</span>
      </a>
    );
  } else {
    return (
      <button className={'btn'}>
        <span>{props.text}</span>
      </button>
    );
  }
};

export default Button;
