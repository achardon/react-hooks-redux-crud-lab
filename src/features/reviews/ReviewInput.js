import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { reviewAdded } from "./reviewsSlice";

function ReviewInput( {restaurantId} ) {
  
  const [newReview, setNewReview] = useState('')
  const dispatch = useDispatch()

  function handleChange(e) {
    setNewReview(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(reviewAdded({comment: newReview, restaurantId: restaurantId}))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Comment:
        <input type="textarea" name="review" value={newReview} onChange={handleChange} />
        <input type="submit" value="Add Review" />
      </label>
    </form>
  )
}

export default ReviewInput;
