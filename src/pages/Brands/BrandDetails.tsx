import { useAppSelector } from "@/hooks";
import { useParams } from "react-router-dom";
import Details from "./components/Details";
import MainLayout from "../../components/Layouts/MainLayout";
import Hosts from "./components/Hosts";
import TopPicksSlider from "@/components/HomePageSliders/TopPicksSlider";
import HelpModal from "./components/HelpModal";
import { useState } from "react";

export default function BrandDetails() {
  const brands = useAppSelector((state) => state.brand);
  const { id } = useParams<{ id: string }>();
  const selectedBrand = brands.find((obj) => obj.id === Number(id));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <MainLayout>
      <div className="overflow-x-hidden">
        {selectedBrand && <Details brand={selectedBrand} />}
        <div className="flex justify-between mt-16 w-full">
          <p className="text-2xl text-left font-medium mx-5">
            Available Shopping Hosts
          </p>
          <button
            className="text-lg mr-7 text-left lg:flex gap-2 font-medium bg-white hidden"
            onClick={showModal}
          >
            <b className="text-white bg-[#1C1D22] px-2 text-xl rounded-md mr-1">
              ?
            </b>
            Help
          </button>
        </div>
        <HelpModal isModalOpen={isModalOpen} handleCancel={handleCancel} />
        <Hosts />
        <div className="mx-10">
          <TopPicksSlider title="Best Seller" />
        </div>
      </div>
    </MainLayout>
  );
}
