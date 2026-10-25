import Image from "next/image";

const BreedBadge = ({ name, image }) => {
  return (
    <div className="flex items-center gap-2 bg-white/60 rounded-2xl p-1 pr-4 pl-2">
      <Image
        src= {image || "/dummydog.jpg"}
        alt={name}
        width={100}
        height={100}
        className="size-10 rounded-full object-cover"
      />
      <span className="font-medium text-gray-800">{name}</span>
    </div>
  );
};

export default BreedBadge;