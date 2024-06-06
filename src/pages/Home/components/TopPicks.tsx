import { LoginIcon } from "@/assets/constants/icons";
import TopPicksSlider from "@/components/HomePageSliders/TopPicksSlider";
import { Link } from "react-router-dom";
import arrow from "@/assets/images/arrow.png";
import Svg from "@/components/UI/Svg";

const TopPicks = () => {
  return (
    <>
      <div className="container mx-auto px-10 my-10">
        <div className="mx-auto my-10">
          <Svg src={LoginIcon} width={30} height={30} className="mx-auto" />
          <p className="font-semibold text-3xl text-center mt-5 max-w-md mx-auto">
            Top Picks Of The Week
          </p>
          <p className="text-md mt-8 text-center text-[#313539] max-w-3xl mx-auto">
            This ranges from women and men's outfits to children's clothing,
            shoes, accessories, and more. People love their clothes, and fashion
            isn't going anywhere!
          </p>
        </div>
        <div className="">
          <TopPicksSlider title="Best Seller" />
          <TopPicksSlider title="Cosmetics" />
          <TopPicksSlider title="Trending" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link
          className="px-3 w-56 py-3 gap-5 flex items-center justify-between border border-[#C33366] bg-[#FFE9F1] transition delay-150 duration-300 ease-in-out rounded-md mr-3 hover:bg-[#f6d5da]"
          to="/brands"
        >
          <p className=" font-medium text-[#212537]">View All Brands</p>
          <img src={arrow} alt="" />
        </Link>
      </div>
    </>
  );
};

export default TopPicks;
