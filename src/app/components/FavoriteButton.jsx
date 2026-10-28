


import { FaRegStar,  FaStar } from "react-icons/fa";

const FavoriteButton = ({ className = "", onClick, isFavorite }) => {
    return(
    <button 
    type="button"
    onClick={onClick}
    className="bg-white/30 rounded-full p-2">
        {isFavorite ? ( <FaStar className="size-6 text-white" /> ) : (<FaRegStar className="size-6 text-white" />)
        }
        
        </button>
) ; 
};

export default FavoriteButton; 