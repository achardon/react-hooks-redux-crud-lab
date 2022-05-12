import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { restaurantAdded } from "./restaurantsSlice";

function RestaurantInput() {
  
  const [newRestaurant, setNewRestaurant] = useState('')
  const dispatch = useDispatch()

  function handleChange(e) {
    setNewRestaurant(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(newRestaurant)
    dispatch(restaurantAdded(newRestaurant))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>name:
        <input type="text" name="restaurant" value={newRestaurant} onChange={handleChange} />
        <input type="submit" value="add restaurant" />
      </label>
    </form>
  )
}

export default RestaurantInput;
