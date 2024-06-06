import arrow from "@/assets/images/arrow.png";
import Slider from "react-slick";
import data from "./data";
import BrandCard from "../../pages/Home/components/BrandCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";
import { Link } from "react-router-dom";

function TopPicksSlider({ title }: { title: string }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };
  return (
    <div className="py-8">
      <div className="flex items-center justify-between my-2">
        <p className="text-black font-medium text-xl lg:text-2xl">
          {title} 🔥{" "}
        </p>
        <Link
          to="/brands"
          className="px-2 md:px-4 py-1 md:py-2 flex items-center justify-between border border-[#C33366] bg-[#FFE9F1] transition delay-150 duration-300 ease-in-out rounded-md gap-x-2 sm:gap-x-12 hover:bg-[#f6d5da]"
        >
          <p className="font-medium text-[#212537]">View More</p>
          <img src={arrow} alt="" />
        </Link>
      </div>
      <div>
        <Slider {...settings}>
          {data.map((item) => (
            <BrandCard
              key={item.id}
              coverImg={item.coverImg}
              logo={item.logo}
              name={item.name}
              rating={item.rating}
              location={item.location}
              discount={item.discount}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TopPicksSlider;
