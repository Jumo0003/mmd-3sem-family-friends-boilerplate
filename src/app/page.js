
import Logo from "./components/Logo";
import "./globals.css";
import { Suspense } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import BreedCardSkeleton from "./components/BreedcardSkeleton";
import BreedList from "./components/BreedList";


export default function ListView() {
  return (
    <>
      <div className="flex gap-4 m-4 items-center">
        <div className="bg-pink rounded-full p-3 text-white">
          <LiaSearchSolid className="size-10" />
        </div>

        <input
          type="text"
          className="p-4 border-gray-300 border-2 rounded-full w-full"
          placeholder="search breeds"
        />
      </div>

      <section className="columns-2 p-4 gap-6">
        <Suspense fallback= {   
           <>
      {Array.from({ length: 6 }).map((_, i) => (
        <BreedCardSkeleton key={i} />
      ))}
    </>
  }
>
  <BreedList />
        </Suspense>

              </section>
     </>
   );
   }