


import { FiHome } from "react-icons/fi";
import { IoStarOutline, IoChatbubbleOutline, IoPersonOutline } from "react-icons/io5";

const BottomNav = () => {
  return (
<nav className="flex justify-around fixed bottom-0 left-0 right-0  bg-white py-8 z-50"> 
    <FiHome color="var(--color-coral)"className="size-8"/>  
    <IoStarOutline className="size-8" /> 
    <IoChatbubbleOutline className="size-8"/> 
    <IoPersonOutline className="size-8"/> 

{}
   
</nav>
  );
};

export default BottomNav