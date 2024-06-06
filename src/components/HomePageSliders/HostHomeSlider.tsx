import { Carousel } from "antd";
import HostHomeBanner from "@/assets/host-home-banner.svg";

const HostHomeSlider = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div style={{ width: "100%", backgroundImage: `url(${HostHomeBanner})` }}>
      <Carousel afterChange={onChange} className="host-home">
        <div className="py-20 flex items-center justify-center flex-col">
          <p className="text-3xl text-center font-bold text-white">
            Available options
          </p>
          <p
            className="text-md text-center text-white pt-4
            lg:max-w-lg max-w-sm mx-auto"
          >
            Lorem ipsum dolor sit amet consectetur. Odio integer nullam morbi in
            sed elit nunc. Ac placerat mauris montes arcu nunc. Molestie dictum
          </p>
        </div>

        <div className="py-20 flex items-center justify-center flex-col">
          <p className="text-3xl text-center font-bold text-white">
            Available options
          </p>
          <p
            className="text-md text-center text-white pt-4
            lg:max-w-lg max-w-sm mx-auto"
          >
            Lorem ipsum dolor sit amet consectetur. Odio integer nullam morbi in
            sed elit nunc. Ac placerat mauris montes arcu nunc. Molestie dictum
          </p>
        </div>
        <div className="py-20 flex items-center justify-center flex-col">
          <p className="text-3xl text-center font-bold text-white">
            Available options
          </p>
          <p
            className="text-md text-center text-white pt-4
            lg:max-w-lg max-w-sm mx-auto"
          >
            Lorem ipsum dolor sit amet consectetur. Odio integer nullam morbi in
            sed elit nunc. Ac placerat mauris montes arcu nunc. Molestie dictum
          </p>
        </div>
        <div className="py-20 flex items-center justify-center flex-col">
          <p className="text-3xl text-center font-bold text-white">
            Available options
          </p>
          <p
            className="text-md text-center text-white pt-4
            lg:max-w-lg max-w-sm mx-auto"
          >
            Lorem ipsum dolor sit amet consectetur. Odio integer nullam morbi in
            sed elit nunc. Ac placerat mauris montes arcu nunc. Molestie dictum
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default HostHomeSlider;
