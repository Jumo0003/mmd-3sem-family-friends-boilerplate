

import FavoriteElement from "./FavoriteElement";
import FavoriteButton from "./FavoriteButton";
import BreedCard from "./BreedCard";
import Link from "next/link";



const BreedList = async ({ query }) => {
   const url = query
    ? `https://api.thedogapi.com/v1/breeds/search?q=${query}`
    : "https://api.thedogapi.com/v1/breeds?";

    const response = await fetch(url, {
    headers: {
      "x-api-key": process.env.DOG_API_KEY,
    },
  });

  const breeds = await response.json();

  const favResponse = await fetch("https://api.thedogapi.com/v1/favourites", {
  headers: {
    "x-api-key": process.env.DOG_API_KEY,
  },
});
const favourites = await favResponse.json();

const favouriteMap = new Map(
  favourites.map((fav) => [fav.image_id, fav.id])
);


    return breeds.map((breed) => (
    <Link
      href={`/detailview/${breed.id}`}
       key={breed.id}
      className="mb-4 block break-inside-avoid"
    >
      <BreedCard
        className="breed-card"
        breedname={breed.name}
        from={breed.origin}
        image={breed.image?.url}
        imageId={breed.image?.id}
        isFavorite={favouriteMap.has(breed.image?.id)}
  favoriteId={favouriteMap.get(breed.image?.id)}
      />
    </Link>
   
  ));
};

export default BreedList;