import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { renderToString } from 'react-dom/server';


const Review = (props) => {
  let rating = props.rating;
  const htmlRating = (rating) => {
    let html= ''
    for (let i = 0; i < rating; i++) {
      html += renderToString(<FontAwesomeIcon icon={faStar} />)
    }
    return html;
  }

  return (
    <div className={'review'}>
      <div className={'review__rating'} dangerouslySetInnerHTML={{ __html: htmlRating(rating) }}></div>
      <p className={'review__text'} dangerouslySetInnerHTML={{ __html: props.text }} />
      <div className={'review__author'} dangerouslySetInnerHTML={{ __html: props.author }} />
    </div>
  );
};

export default Review;
