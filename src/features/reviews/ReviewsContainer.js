import React from "react";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";
import { useSelector } from "react-redux";


function ReviewsContainer( {restaurantId} ) {

    const allReviews = useSelector((state) =>
      state.reviews.entities)
      
    const reviews = allReviews.filter((review) => review.restaurantId === restaurantId)
    

  return (
    <div>
      <ReviewInput restaurantId={restaurantId}/>
      <Reviews reviews={reviews} />
    </div>
  );
}

export default ReviewsContainer;
