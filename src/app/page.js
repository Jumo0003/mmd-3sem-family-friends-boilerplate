import Link from "next/link";
import Logo from "./components/Logo";
import "./globals.css";
import BreedCard from "./components/BreedCard";
import { LiaSearchSolid } from "react-icons/lia";


export default function ListView() {
 const breeds = [
    { id: 1, breedname: "Affenpinscher", from: "Germany" },
    { id: 2, breedname: "Afghan Hound", from: "Afghanistan" },
    { id: 3, breedname: "Airedale Terrier", from: "England" },
    { id: 4, breedname: "Akbash", from: "Turkey" },
    { id: 5, breedname: "Akita", from: "Japan" },
    { id: 6, breedname: "Alaskan Malamute", from: "USA" },
  ];

  return (
    <>
      <div className="flex gap-4 m-4 items-center">
        <div className="bg-coral rounded-full p-3 text-white">
          <LiaSearchSolid className="size-10" />
        </div>

        <input
          type="text"
          className="p-4 border-gray-300 border-2 rounded-full w-full"
          placeholder="search breeds"
        />
      </div>
      <section className="columns-2 p-4 gap-6">

        {breeds.map((breed) => (
          <Link href="/detailview" key={breed.id} className="mb-4 block break-inside-avoid">
            <BreedCard
              className="breed-card"
              breedname={breed.breedname}
              from={breed.from}
            />
          </Link>
        ))}
              </section>
     </>
   );
   }