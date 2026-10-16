import Link from "next/link";
import DetailHero from "../../components/DetailHero";
import Tag from "../../components/Tag";
import InfoSection from "@/app/components/InfoSection";

const DetailView = () => {
  return (
    <>
     
         <DetailHero />
         <h1 className="font-bold text-2xl p-4">Affenpinscher</h1>
         <div className="flex flex-wrap gap-2 px-4">
  <Tag label="Confident" className="bg-confident" />
  <Tag label="Alert" className="bg-alert" />
  <Tag label="Playful" className="bg-playful" />
  <Tag label="Loyal" className="bg-loyal" />
</div>
<InfoSection
  title="Breed description"
  text="Small, sturdy toy breed with a distinctive monkey-like expression and shaggy, wiry coat. Known for its confident, terrier-like personality despite its small size."
/>

<InfoSection
  title="Breed history"
  text="..."
/>
    </>
  );
};

export default DetailView;
