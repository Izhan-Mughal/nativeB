import StarIcon from "@/assets/star.svg";
import sale from "@/assets/sale.svg";
import LocationIcon from "@/assets/location.svg";
import { Link } from "react-router-dom";
import { BlackArrow } from "@/assets/constants/icons";
import { useLocation } from "react-router-dom";

interface BrandCardProps {
  coverImg: any;
  logo: any;
  name: string;
  rating: number;
  location: string;
  discount: string;
  key: number;
}

const BrandCard: React.FC<BrandCardProps> = ({
  coverImg,
  logo,
  name,
  rating,
  location,
  discount,
  key,
}) => {
  const pageLocation = useLocation();
  return (
    <div className="m-2" key={key}>
      <Link to="/brands">
        {pageLocation.pathname.includes("brands") ? (
          <div className="relative w-full">
            <button className="bg-white hidden w-1/2 lg:flex py-0.5 text-black text-xs items-center justify-center lg:gap-2 md:w-full absolute bottom-2 lg:w-3/4 left-1/2 transform -translate-x-1/2 rounded lg:py-1 font-medium mb-2">
              Start Shopping
              <img src={BlackArrow} />
            </button>
            <img src={coverImg} />
          </div>
        ) : (
          <img src={coverImg} />
        )}

        <div className="mt-2 flex items-center gap-1 w-full">
          <div>
            <img
              src={logo}
              alt="Brand Logo"
              className="h-12 w-12 lg:h-16 lg:w-16"
            />
          </div>
          <div className="flex flex-col mt-0 w-full">
            <div className="flex items-center w-full justify-between lg:gap-6">
              <div>
                <p className="font-bold text-sm lg:text-lg pl-1 lg:pl-2">
                  {name}
                </p>
              </div>
              <div className="flex items-center lg:gap-2">
                <p className="text-xs lg:text-md">{rating}</p>
                <img src={StarIcon} alt="Review Star" />
              </div>
            </div>
            <div className="flex items-center gap-2 lg:gap-3 lg:justify-between w-full">
              <div className="flex items-center gap-1">
                <img src={LocationIcon} className="lg:h-5" />
                <p className="text-xs lg:text-sm text-[#4C5E76]">{location}</p>
              </div>
              <div className="flex items-center">
                <p className="text-xs lg:text-md font-normal">{discount}</p>

                <img src={sale} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BrandCard;
