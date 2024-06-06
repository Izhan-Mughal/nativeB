import Listing from "./components/Listing";
import MainLayout from "@/components/Layouts/MainLayout";
import Filter from "@/assets/Filter.svg";
import { Checkbox, Slider } from "antd";
import type { SliderSingleProps } from "antd";

export default function Brand() {
  const marks: SliderSingleProps["marks"] = {
    0: "0",
    100: "100",
  };

  return (
    <MainLayout>
      <div className="lg:grid lg:grid-cols-9 mx-1 lg:justify-center lg:items-start flex flex-col items-center justify-center gap-4 mb-3 lg:w-11/12 lg:mx-auto">
        <div className="hidden lg:block lg:col-span-2 border border-[#D7D7D7] bg-white p-5 pb-12 rounded-lg w-11/12">
          <div className=" flex justify-between">
            <p className="text-black font-bold text-xl">Filter</p>
            <img src={Filter} alt="" className="cursor-pointer" />
          </div>
          <div>
            <p className="text-black font-inter mt-5 mb-3 font-bold text-lg">
              Category 🔥
            </p>
          </div>
          <div className="border-b border-[#E6E6E6] gap-y-5 pb-4 mb-4 ">
            <div className="mt-2">
              <Checkbox>
                <p className="font-semibold text-base">Sports</p>
              </Checkbox>
            </div>
            <div className="mt-2">
              <Checkbox>
                <p className="font-semibold text-base">Cosmetic</p>
              </Checkbox>
            </div>

            <div className="mt-2">
              <Checkbox>
                <p className="font-semibold text-base">Clothing</p>
              </Checkbox>
            </div>
          </div>
          <Slider marks={marks} range defaultValue={[20, 50]} />
          <div className="border-t pt-4 border-[#E6E6E6]">
            <p className="text-black font-inter mt-2 mb-3 font-bold text-lg">
              Attributes 🔥
            </p>

            <button className="bg-[#EEEEEE] transition delay-150 duration-300 hover:bg-[#C33366] hover:text-white p-2 w-full rounded-md text-md font-medium">
              Men
            </button>

            <button className="mt-2 hover:bg-[#C33366] hover:text-white p-2 w-full rounded-md text-md font-medium">
              Women
            </button>
            <button className="bg-[#EEEEEE] mt-2 mb-2 hover:bg-[#C33366] transition delay-150 duration-300 hover:text-white p-2 w-full rounded-md text-md font-medium">
              Clothing
            </button>
          </div>
        </div>
        <Listing />
      </div>
    </MainLayout>
  );
}
