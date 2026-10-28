"use client"; 
import { useState } from "react";
import { addFavorite, removeFavorite } from "@/app/actions/actions";
import FavoriteButton from "./FavoriteButton"


const FavoriteElement = ({id, breed, isFavorite, favoriteId }) => {
      const [favorited, setFavorited] = useState(isFavorite);
  const [favId, setFavId] = useState(favoriteId);

  const handleClick = async (e) => {
    console.log("stjerne klikket", id);
    e.preventDefault();
      e.stopPropagation();
  
    if (favorited) {
      setFavorited(false);
      await removeFavorite(favId);
      setFavId(undefined);
    } else {
      setFavorited(true);
      const newId = await addFavorite(id);
      setFavId(newId);
    }

  };

return ( 
    <FavoriteButton  onClick ={handleClick} isFavorite={favorited}
    />);

}; 




export default FavoriteElement