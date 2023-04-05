import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStarOfLife} from '@fortawesome/free-solid-svg-icons';

const LogoText = (props) => {
  return (
    <a href={props.link} className={'logo-text'}>
      <FontAwesomeIcon icon={faStarOfLife} />{props.text}
    </a>
  );
};

export default LogoText;
