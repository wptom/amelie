import React from 'react';

const TextBox = (props) => {
  return (
    <div className={'text-box'}>
      <props.titleTag className={'text-box__title'} dangerouslySetInnerHTML={{ __html: props.title }}></props.titleTag>
      <p dangerouslySetInnerHTML={{ __html: props.text }}></p>
    </div>
  );
};

export default TextBox;
