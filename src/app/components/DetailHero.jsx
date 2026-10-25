

import Image from "next/image";
import { IoChevronBack } from "react-icons/io5";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";
import BreedBadge from "./BreedBadge";

const DetailHero = ({ image, name }) => {
return (
     <div className="grid m-4">
      <Image
        src={image || "/dummydog.jpg"}
        alt="Dog"
        width={500}
        height={500}
        className="col-start-1 row-start-1 h-96  w-full rounded-3xl object-cover object-[center_30%]"
      />
           <div className="col-start-1 row-start-1 z-10 flex justify-between items-start p-4">
        <Link href="/"><IoChevronBack className="size-10 text-black rounded-full bg-white p-2" /></Link>
        <FavoriteButton className="size-10" />
      </div>
      <div className="col-start-1 row-start-1 z-10 self-end justify-self-start p-4">
  <BreedBadge name={name} image={image}/>
</div>
    </div>
)
   
}

export default DetailHero;