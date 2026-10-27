


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

    return breeds.map((breed) => (
      <FavoriteElement id={breed.image.id} breed={breed.name}/>
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
      />
    </Link>
  ));
};

export default BreedList;