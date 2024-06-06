import Location from "@/assets/images/location.svg";
import Sale from "@/assets/images/sale.svg";
import Star from "@/assets/images/star.svg";
import { useAppSelector } from "@/hooks";
import { SearchOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Pagination,
  Checkbox,
  Select,
  Slider,
  type FormProps,
  Drawer,
} from "antd";
import Oops from "@/assets/images/oops.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Filter from "@/assets/Filter.svg";
import type { SliderSingleProps } from "antd";

export default function Listing() {
  const [showFilterDrawer, setShowFilterDrawer] = useState<boolean>(false);
  const brands = useAppSelector((state) => state.brand);
  const [form] = Form.useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;
  const indexOfLastBrand = currentPage * pageSize;
  const indexOfFirstBrand = indexOfLastBrand - pageSize;
  const currentBrands = brands.slice(indexOfFirstBrand, indexOfLastBrand);
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(currentBrands);

  type FieldType = {
    query?: string;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    if (values.query) {
      setQuery(values.query);
      filterBrands(values.query);
      form.resetFields();
    }
  };

  const filterBrands = (searchQuery: string) => {
    const filteredBrands = brands.filter((brand) =>
      brand.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filteredBrands);
  };

  return (
    <div className="col-span-7">
      <Form onFinish={onFinish} layout="horizontal" form={form}>
        <div className="flex gap-1 relative w-11/12 mx-auto lg:w-full lg:mx-0 mt-8 lg:mt-0">
          <Form.Item
            name="query"
            className="w-full"
            rules={[{ required: true, message: "Please add search query!" }]}
          >
            <Input className="py-2" placeholder="Search..." />
          </Form.Item>
          <Form.Item className="absolute right-0">
            <button
              type="submit"
              className="text-white flex items-center justify-center bg-[#C33366] font-medium rounded-lg text-sm px-2 py-2.5"
            >
              <SearchOutlined className="text-xl font-bold" />
            </button>
          </Form.Item>
        </div>
      </Form>
      <div className="flex gap-2 items-center justify-evenly lg:justify-between my-2 w-11/12 mx-auto lg:w-full lg:mx-0">
        <div className="flex flex-col lg:flex-row w-full gap-4">
          {query !== "" && (
            <div className="flex justify-start items-center w-full">
              <div className="flex">
                <p>
                  Search results for <b>"{query}"</b>
                </p>
              </div>
            </div>
          )}

          <div className="flex justify-between w-full">
            <div
              className="flex items-start justify-start lg:hidden cursor-pointer"
              onClick={() => setShowFilterDrawer(true)}
            >
              <div className="flex gap-1 items-center">
                <img src={Filter} alt="" className="h-6 w-6" />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 w-full">
              <p className="">Sort by:</p>
              <Select
                defaultValue="Lastest"
                style={{ width: 120 }}
                options={[
                  { value: "Lastest", label: "Latest" },
                  { value: "NewArrivals", label: "New Arrivals" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <FilterDrawer
        showFilterDrawer={showFilterDrawer}
        setShowFilterDrawer={setShowFilterDrawer}
      />

      <div className="justify-between flex flex-col min-h-screen">
        {filteredProducts.length > 0 ? (
          <div className="flex flex-wrap items-center justify-center lg:grid lg:grid-cols-5 lg:items-start gap-3 my-2 w-full">
            {filteredProducts.map((brand) => (
              <Link to={`${brand.id}`}>
                <div
                  key={brand.id}
                  className="flex-grow flex-shrink min-w-0 sm:max-w-[30rem] max-w-[20rem] mt-4"
                >
                  <img
                    src={brand.image}
                    alt=""
                    className="w-36 h-36 sm:w-full sm:h-full"
                  />
                  <div className="mt-2 flex items-center gap-2">
                    <div>
                      <img src={brand.logo} alt="brand" className="h-14" />
                    </div>

                    <div className="w-full items-center justify-evenly">
                      <div className="flex justify-between">
                        <p className="font-bold text-md">{brand.name}</p>
                        <div className="flex justify-center items-center">
                          <p className=" text-sm  ">4.9</p>
                          <img src={Star} alt="" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                          <img src={Location} alt="" className="" />
                          <p className="font-medium text-[#4C5E76] text-xs  ">
                            Texas
                          </p>
                        </div>

                        <div className="flex">
                          <p className=" text-sm ">-10%</p>
                          <img src={Sale} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mx-auto justify-center w-1/3 mt-12">
            <img src={Oops} alt="" className="mx-auto" />
            <p className="mt-5 text-lg text-center font-medium text-[#5F5F5F]">
              No search result found. Try something else.
            </p>
          </div>
        )}
        <div className="flex justify-center mt-8">
          <Pagination
            current={currentPage}
            total={brands.length}
            pageSize={pageSize}
            onChange={handlePageChange}
            showSizeChanger={false}
          />
        </div>
      </div>
    </div>
  );
}

const marks: SliderSingleProps["marks"] = {
  0: "0",
  100: "100",
};

const FilterDrawer = ({
  showFilterDrawer,
  setShowFilterDrawer,
}: {
  showFilterDrawer: boolean;
  setShowFilterDrawer: (value: boolean) => void;
}) => {
  return (
    <Drawer open={showFilterDrawer} onClose={() => setShowFilterDrawer(false)}>
      <div className="col-span-2 bg-white p-5 pb-12 rounded-lg w-11/12">
        <div className=" flex justify-between">
          <p className="text-black font-bold text-xl">Filter</p>
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
    </Drawer>
  );
};
