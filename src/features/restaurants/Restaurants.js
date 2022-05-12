import React from "react";
import Restaurant from "./Restaurant";

function Restaurants( {restaurants} ) {
  return <ul>{restaurants? restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} />) : null}</ul>;
}

export default Restaurants;
