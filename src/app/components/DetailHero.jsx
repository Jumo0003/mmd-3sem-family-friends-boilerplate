

import Image from "next/image";
import { IoChevronBack } from "react-icons/io5";
import FavoriteElement  from "./FavoriteElement";
import Link from "next/link";
import BreedBadge from "./BreedBadge";

const DetailHero = ({ image, name, imageId, isFavorite, favoriteId}) => {
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
        <FavoriteElement className="size-10" 
          id={imageId}
  breed={name}
  isFavorite={isFavorite}
  favoriteId={favoriteId} />
      </div>
      <div className="col-start-1 row-start-1 z-10 self-end justify-self-start p-4">
  <BreedBadge name={name} image={image}/>
</div>
    </div>
)
   
}

export default DetailHero;