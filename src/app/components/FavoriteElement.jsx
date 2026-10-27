"use client"; 
import { addFavorite } from "../actions/actions";

import FavoriteButton from "./FavoriteButton"


const Favorite = ({id, breed}) => {
return ( 
    <FavoriteButton 
     onClick ={() => addFavorite(id)}
    
    />
);

}; 




export default Favorite