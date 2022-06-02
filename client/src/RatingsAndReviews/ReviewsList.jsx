import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ReviewTile from './ReviewTile.jsx';
import Sorter from './Sorter.jsx';

function ReviewsList({ reviews, meta, onClick, setModal }) {
  const [totalReviews, setTotalReviews] = useState(0);
  const [addReview, setAddReview] = useState(false);

  useEffect(() => {
    if (meta.recommended) {
      setTotalReviews(Number(meta.recommended.false) + Number(meta.recommended.true));
    }
  }, [meta]);

  function handleAddReview() {
    setModal({ modalName: 'review' });
    document.getElementById('modal').style.display = 'block';
  }

  return (
    <div>
      <h3>
        <div className="totalReviews">
          <span>{`${totalReviews} reviews, sorted by`}</span>
          <Sorter />
        </div>
      </h3>
      <table className="reviewsList">
        <tbody>
          {
            (reviews || []).map((review, index) => (
              <tr>
                <ReviewTile review={review} key={index} />
              </tr>
            ))
          }
        </tbody>
      </table>
      <a className="btn btn-outline moreReviews" onClick={onClick}>More Reviews</a>
      <a className="btn btn-primary addReviews" onClick={handleAddReview}>Add A Review +</a>
    </div>
  );
}

export default ReviewsList;
