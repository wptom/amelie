import React from 'react';

const IconBox = (props) => {
  return (
    <div className={'icon-box'}>
      <div className={'icon-box__icon'}>
        <span>{props.icon}</span>
      </div>
      <div className={'icon-box__text'}>
        <h3 className={'icon-box__title'}>{props.title}</h3>
        <p className={'icon-box__description'}>{props.description}</p>
      </div>
    </div>
  );
};

export default IconBox;
