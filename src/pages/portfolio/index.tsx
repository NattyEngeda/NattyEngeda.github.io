
// Images 
import { portfolio } from '../../JSON/portfolio';
import semahImage from '../../assets/images/portolio/semah-image.png';

// Icons 
import { CiLink } from "react-icons/ci";
import PortfolioCard from './widgets/PortfolioCard';

export default function Portfolio() {
  return (
    <div className="w-full mx-auto container h-auto px-5 md:px-10 flex flex-col gap-5 font-ProductSans py-12 md:py-1">
      
      
      <div className="w-full py-2 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-fontColor">Portfolio</h1>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-5 md:py-12 ">
      {
        portfolio.map((item)=>(
          <PortfolioCard
          key={item.id}
          name={item.name}
          color={item.color}
          image={item.image}
          imageDescription={item.imageDescription}
          url={item.url}
          description={item.description}/>
        ))
      }
      </div>
  </div>
  );
}
