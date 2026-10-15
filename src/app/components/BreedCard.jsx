import Image from "next/image";
import { FaRegStar } from "react-icons/fa";


const BreedCard = ({ className = "", breedname, from }) => {
  return (
    <div className={className}>
      <Image
        src="/dummydog.jpg"
        alt="Creepy dogg"
        width={500}
        height={500}
        className="col-start-1 row-start-1 rounded-3xl aspect-4/3 object-cover w-full"
      />

      <div className="col-start-1 row-start-1 z-10 m-3 justify-self-end self-start">
        <FaRegStar className="size-10" />
      </div>

      <div className="p-4 gap-4 text-gray-700">
        <h2 className="font-bold text-xl leading-10">{breedname}</h2>
        <p className="text-sx">{from}</p>
      </div>
    </div>
  );
};

export default BreedCard;