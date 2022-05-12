import React from "react";
import { restaurantAdded } from "./restaurantsSlice";
import Restaurant from "./Restaurant";

function Restaurants( {restaurants} ) {
  console.log(restaurants)
  return <ul>{restaurants? restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} />) : null}</ul>;
}

export default Restaurants;
