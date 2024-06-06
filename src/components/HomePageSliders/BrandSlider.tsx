import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BrandsData } from "@/assets/constants/dummy";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const LeftArrow = ({ onClick }: any) => {
  return (
    <button className="rounded-md p-3 bg-white" onClick={onClick}>
      <LeftOutlined className="text-gray-600" />
    </button>
  );
};
const RightArrow = ({ onClick }: any) => {
  return (
    <button className="rounded-md p-3 bg-white" onClick={onClick}>
      <RightOutlined className="text-gray-600" />
    </button>
  );
};
const BrandSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
        breakpoint: 768,
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
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };
  return (
    <div className="container mx-auto px-10 py-8 brand-slider">
      <Slider {...settings}>
        {BrandsData.map((item) => (
          <Link to="/brands">
            <div className="  flex justify-center items-center">
              <img src={item.brandImg} className="w-20 h-10 md:w-36 mx-auto" />
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default BrandSlider;
