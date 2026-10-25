


import BreedCard from "./BreedCard";
import Link from "next/link";


const BreedList = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
 const breeds = [
    { id: 1, breedname: "Affenpinscher", from: "Germany" },
    { id: 2, breedname: "Afghan Hound", from: "Afghanistan" },
    { id: 3, breedname: "Airedale Terrier", from: "England" },
    { id: 4, breedname: "Akbash", from: "Turkey" },
    { id: 5, breedname: "Akita", from: "Japan" },
    { id: 6, breedname: "Alaskan Malamute", from: "USA" },
  ];

    return breeds.map((breed) => (
    <Link
      href={`/detailview/${breed.id}`}
      key={breed.id}
      className="mb-4 block break-inside-avoid"
    >
      <BreedCard
        className="breed-card"
        breedname={breed.breedname}
        from={breed.from}
      />
    </Link>
  ));
};

export default BreedList;