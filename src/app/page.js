
import Logo from "./components/Logo";
import "./globals.css";
import { Suspense } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import BreedCardskeleton from "./components/Breedcardskeleton";
import BreedList from "./components/BreedList";
import Form from "next/form"


export default async function ListView({ searchParams }) {
const { query } = await searchParams;
  
  return (
    <>
      <Form action="/" className="flex gap-4 m-4 items-center">
        <button type="submit" className="bg-pink rounded-full p-3 text-white">
          <LiaSearchSolid className="size-10" />
        </button>

        <input
          type="text"
           name="query"
           required
          className="p-4 border-gray-300 border-2 rounded-full w-full"
          placeholder="search breeds"
        />
      </Form>

      <section className="columns-2 p-4 gap-6">
        <Suspense
        key={query}
        fallback= {   
           <>
      {Array.from({ length: 6 }).map((_, i) => (
        <BreedCardskeleton key={i} />
      ))}
    </>
  }
>
  <BreedList query={query}/>
        </Suspense>

              </section>
     </>
   );
   }