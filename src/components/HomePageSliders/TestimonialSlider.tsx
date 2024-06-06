import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LoginIcon } from "@/assets/constants/icons";
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";
import Testimonials from "./testimonials";
import Testimonial from "../../pages/Home/components/Testimonial";

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };
  return (
    <div className="container px-10 mx-auto py-10">
      <div className="max-w-4xl mb-20 mx-auto">
        <img src={LoginIcon} alt="" className="mx-auto" />
        <p className="font-semibold text-3xl text-center mt-5">
          Our users love Paybag
        </p>
        <p className="text-md mt-5 text-center text-[#313539]">
          It's the fast and friendly way to Shop LIVE in your favorite outlets
          across the globe and make money hosting
        </p>
      </div>
      <div>
        <Slider {...settings}>
          {Testimonials.map((item) => (
            <div className="px-4 testimonial-card">
              <Testimonial
                review={item.review}
                userImg={item.userImg}
                userType={item.userType}
                userName={item.userName}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
