import { BrandSliceInterface } from "@/features/Slicers/brandSlice";
import Location from "@/assets/images/location.svg";
import CoverBrand from "@/assets/images/cover-brand.png";
import Star from "@/assets/images/star.svg";

export default function Details({ brand }: { brand: BrandSliceInterface }) {
  return (
    <div className="flex flex-col md:flex-row md:items-start flex-grow flex-shrink gap-x-8 lg:gap-x-14 w-11/12 mx-auto lg:mx-5">
      <div className="col-span-1">
        <img src={CoverBrand} alt="" className="" />
      </div>
      <div className="w-full mt-5 lg:mt-0">
        <div className="flex items-center w-full">
          <img src={brand.logo} alt="" className="" />
          <div className="flex items-center justify-between lg:w-1/2 w-full">
            <div>
              <p className="text-black font-medium text-xl pl-3">
                {brand.name}
              </p>
              <div className="flex">
                <img src={Location} alt="" className="h-3 mt-1 pl-2" />
                <p className="font-medium  text-sm text-[#5F5F5F] pl-1">
                  Texas Dallas
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <p className="text-lg">4.9</p>
              <img src={Star} alt="" className="h-6 mt-0.5" />
            </div>
          </div>
        </div>
        <div className="lg:mr-12 lg:text-start lg:max-w-md text-left my-5">
          <p className="">{brand.description}</p>
        </div>
        <div className="mt-8 sm:w-full sm:mx-0 max-w-sm mx-auto">
          <p className="font-bold text-xl  text-black">Category</p>
          <div className="flex mt-4 gap-x-2 lg:gap-x-5">
            {brand.category.map((item) => (
              <p
                className="px-6 py-2 bg-[#EEEEEE] hover:bg-[#dcdcdc] rounded-full cursor-pointer font-medium"
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
