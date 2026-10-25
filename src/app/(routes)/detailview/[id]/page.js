import Link from "next/link";
import DetailHero from "../../../components/DetailHero";
import Tag from "../../../components/Tag";
import InfoSection from "@/app/components/InfoSection";

const DetailView = async ({params}) => {
  const { id } = await params;

  const response = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`, {
    headers: {
      "x-api-key": process.env.DOG_API_KEY,
    },
  });

  const breed = await response.json();
  console.log(breed);

  const colors = [
  "bg-confident text-confident-text",
  "bg-alert text-alert-text",
  "bg-playful text-playful-text",
  "bg-loyal text-loyal-text",
];

  return (
    <>
         <DetailHero image={breed.image?.url} name={breed.name}/>
         <h1 className="font-bold text-2xl p-4">{breed.name} </h1>
         <div className="flex flex-wrap gap-2 px-4">
 {breed.temperament?.split(", ").map((trait, index) => (
    <Tag
      key={trait}
      label={trait}
      className={colors[index % colors.length]}
    />
  ))}
</div>

<InfoSection
title="Bred for" text={breed.description || "Ukendt"}

/>

<InfoSection 
title="History" text={breed.history || "Ukendt"}   
/>

<InfoSection  
title="Breed group" text={breed.breed_group || "Ukendt"}
/>
<InfoSection
title="Life span" text={breed.life_span || "Ukendt"}
/>
    </>
  );
};

export default DetailView;
