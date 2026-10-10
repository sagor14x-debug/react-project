import { FaStar } from "react-icons/fa"; 
import type { Technology } from "../assets/types/technology"; 
 
interface TechnologyCardProps { 
  technology: Technology; 
  isAdded: boolean; 
  onAdd: (technology: Technology) => void; 
} 
 
const TechnologyCard = ({ 
  technology, 
  isAdded, 
  onAdd, 
}: TechnologyCardProps) => { 
  return ( 
    <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"> 
 
      {/* Icon + Badge */} 
      <div className="flex items-start justify-between"> 
        <img 
          src={technology.icon} 
          alt={technology.name} 
          className="h-9 w-9 object-contain" 
        /> 
 
        <span className="rounded-full border border-gray-200 px-2 py-1 text-[9px] font-medium text-gray-500"> 
          {technology.badge} 
        </span> 
      </div> 
 
      {/* Name */} 
      <h3 className="mt-4 text-base font-bold text-gray-900"> 
        {technology.name} 
      </h3> 
 
      {/* Description */} 
      <p className="mt-2 min-h-12 text-[11px] leading-5 text-gray-500"> 
        {technology.description} 
      </p> 
 
      {/* Category + Difficulty + Rating */} 
      <div className="mt-4 flex items-center justify-between gap-2"> 
 
        {/* Category */} 
        <span className="rounded-full bg-gray-100 px-2 py-1 text-[9px] text-gray-600"> 
          {technology.category} 
        </span> 
 
        {/* Difficulty */} 
        <span className="text-[9px] text-gray-500"> 
          {technology.difficulty} 
        </span> 
 
        {/* Rating */} 
        <div className="flex items-center gap-1 whitespace-nowrap"> 
          <FaStar className="text-[10px] text-yellow-400" /> 
 
          <span className="text-[10px] font-medium text-gray-600"> 
            {technology.rating} 
          </span> 
        </div> 
 
      </div> 
 
      {/* Add Button */} 
      <button 
        onClick={() => onAdd(technology)} 
        disabled={isAdded} 
        className={`mt-4 w-full rounded-md py-2 text-[10px] font-medium transition ${ 
          isAdded 
            ? "cursor-not-allowed bg-gray-200 text-gray-500" 
            : "cursor-pointer bg-gray-900 text-white hover:bg-gray-800" 
        }`} 
      > 
        {isAdded ? "✓ Added to Stack" : "Add to Stack"} 
      </button> 
 
    </div> 
  ); 
}; 
 
export default TechnologyCard; 
 
 
 
 
