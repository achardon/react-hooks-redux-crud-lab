import React from "react";
import Review from "./Review";

function Reviews( { reviews }) {

  return (
  <ul>
    {reviews? reviews.map(review => <Review key={review.id} review={review}/>) : null}
  </ul>
  )
}

export default Reviews;
