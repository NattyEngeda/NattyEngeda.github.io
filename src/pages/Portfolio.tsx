
// Images 
import semahImage from '../assets/images/portolio/semah-image.png';

// Icons 
import { CiLink } from "react-icons/ci";

export default function Portfolio() {
  return (
    <div className="w-full mx-auto container h-auto px-5 md:px-10 flex flex-col gap-5 font-ProductSans py-12 md:py-1">
      
      
      <div className="w-full py-2 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-fontColor">Portfolio</h1>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 py-5 md:py-12">

          {/* Portfolio Container */}
        <div className="normshad flex flex-col rounded-xl overflow-hidden shadow-md item-transition cursor-pointer">
          {/* Image */}
          <div className="w-full h-full overflow-hidden">   
           <img
           className="w-full h-full object-cover"
            src={semahImage} 
            alt="Semah MCH Image" />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2 bg-white px-5 py-2">
          <div className="flex flex-row gap-2 items-center">
            <h1 className="text-2xl font-bold text-[#1f65b1]">Semah MCH </h1>
            <CiLink 
            onClick={()=>{
              window.open("https://www.semahmch.com/")
            }}
            className="text-3xl text-[#1f65b1] font-bold cursor-pointer" />
          </div>
            <p className="text-sm text-fontColor">Semah Mother Child Hospital Website for Online Appointment and Medical Information...</p>
          </div>
         </div>




      </div>
  </div>
  );
}
