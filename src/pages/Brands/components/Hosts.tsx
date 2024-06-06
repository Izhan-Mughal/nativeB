import { Avatar, Dropdown, Input, MenuProps, Pagination, Tooltip } from "antd";
import hosts from "../hosts";
import UAE from "@/assets/images/UAE.svg";
import Star from "@/assets/images/starPink.svg";
import Thumb from "@/assets/images/thumb.svg";
import MessageIcon from "@/assets/images/message-icon.png";
import HostSessionQuestion from "@/assets/images/HostSessionQuestion.png";
import NoHostAvailable from "./NoHostAvailable";
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingIcon } from "@/constants/icons";
import Earth from "@/assets/earth.svg";
import DownArrow from "@/assets/images/downarrow.png";
export default function Hosts() {
  const [selectedCountry, setSelectedCountry] = useState<number[]>([1, 2, 3]);
  const [filteredHosts, setFilteredHosts] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const isChecked = event.target.checked;
    setSelectedCountry((prev: number[]) => {
      if (isChecked) {
        return [...prev, id];
      } else {
        return prev.filter((item) => item !== id);
      }
    });
    console.log(selectedCountry);
  };

  const items: MenuProps["items"] = [
    {
      label: <span>Spanish</span>,
      key: "0",
    },
    {
      label: <span>French</span>,
      key: "1",
    },
  ];

  const handleHostFilter = useCallback(() => {
    const newHosts = selectedCountry.flatMap((id) => {
      return hosts.filter((host) => host.id === id).flatMap((obj) => obj.hosts);
    });

    setFilteredHosts(newHosts);
    console.log(newHosts);
  }, [selectedCountry]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastHost = currentPage * pageSize;
  const indexOfFirstHost = indexOfLastHost - pageSize;
  const currentHosts = filteredHosts.slice(indexOfFirstHost, indexOfLastHost);

  useEffect(() => {
    handleHostFilter();
  }, [handleHostFilter]);

  const navigate = useNavigate();

  return (
    <div className="sm:mx-3 w-full">
      <div className="flex flex-wrap items-center justify-center gap-x-5 lg:w-3/4 lg:gap-x-4">
        {hosts.map((host) => (
          <div
            className="flex justify-center flex-col mt-3 lg:flex-row sm:flex-grow flex-shrink min-w-0
             w-30 md:w-25rem lg:w-28 items-center text-center lg:justify-around lg:gap-3 bg-white rounded-md border p-2 lg:py-1 lg:px-2 px-4 py-4"
            key={host.id}
          >
            <div className="flex flex-col lg:flex-row lg:gap-2">
              <img
                src={host.flag}
                alt=""
                className="rounded-full lg:h-7 h-14"
              />
              <p className="text-xl lg:text-lg font-medium mt-2 lg:mt-0">
                {host.country}
              </p>
            </div>

            <div className="">
              <p className="text-[#5F5F5F] text-sm font-normal pt-3 pb-1">
                Available Hosts
              </p>
              {host.hosts.length === 0 && (
                <p className="mt-1 text-sm">No hosts Available</p>
              )}
              <Avatar.Group
                maxCount={3}
                maxPopoverTrigger="click"
                size="large"
                className="h-4"
                maxStyle={{
                  color: "black",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                {host.hosts &&
                  host.hosts?.map((item) => (
                    <Tooltip title={item.name} placement="top" key={item.id}>
                      <Avatar>
                        <img src={item.profilePic} alt="" />
                      </Avatar>
                    </Tooltip>
                  ))}
              </Avatar.Group>
            </div>
            <div className="hidden lg:block">
              <Input
                type="checkbox"
                value={host.id}
                className="w-4 accent-[#C33366] bg-primary h-4"
                onChange={(event) => handleCheckboxChange(event, host.id)}
                checked={selectedCountry.includes(host.id)}
              />
            </div>
          </div>
        ))}
      </div>

      {filteredHosts.length > 0 ? (
        <div className="flex mx-4 flex-col sm:flex-wrap sm:flex-row my-5 items-center justify-center lg:justify-start lg:items-start gap-4">
          {currentHosts.map((host: any) => (
            <div className="flex flex-grow lg:flex-grow-0 flex-shrink min-w-0 w-28rem sm:w-52 md:w-72 lg:w-96 xl:w-28rem">
              <div className="bg-white flex-1 grid border p-4 rounded-md md:max-w-md sm:max-w-sm">
                <div className="col-span-2 max-w-md">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center mb-5">
                      <div className="avatar-wrapper relative">
                        <img
                          src={host.profilePic}
                          alt=""
                          className="rounded-full md:h-24 h-20 mt-5 md:mt-2 "
                        />
                        <img
                          src={UAE}
                          alt=""
                          className="rounded-full absolute top-0 right-0 h-8 border border-white "
                        />
                      </div>
                      <div className="mt-2 col-span-2">
                        <p className="text-black font-bold text-xl pl-3 mt-6">
                          {host.name}
                        </p>
                        <div className="flex">
                          <div className="flex  rounded-full px-2">
                            <img src={Thumb} alt="" className="h-4 mt-1 pr-1" />
                            <p>100</p>
                          </div>
                          <div className="flex rounded-full  bg-white">
                            <img src={Star} alt="" className="h-4 mt-1 pr-1" />
                            <p>4.9/9</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <button
                        onClick={() => navigate("/chat")}
                        className="bg-[#C33366] p-2 rounded-md hover:bg-[#dd578d]"
                      >
                        <img src={MessageIcon} className="h-8" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 col-span-2 max-w-md mt-7">
                  <div className="">
                    <div className="flex flex-wrap md:flex-nowrap justify-between mt-3">
                      <p className="text-md font-medium text-[#5F5F5F]">
                        Spoken languages
                      </p>
                      <div className="flex itmes-center gap-x-2">
                        <img src={Earth} alt="" />
                        <p className="text-md font-medium text-black">
                          {host.languages.map((item: string, index: number) => (
                            <span className={`item-${index}`}>{item} </span>
                          ))}
                        </p>
                        <Dropdown menu={{ items }} placement="bottomCenter">
                          <img
                            src={DownArrow}
                            alt=""
                            className="mt-2.5 h-2 w-2"
                          />
                        </Dropdown>
                      </div>
                    </div>
                    <div className="flex flex-wrap md:flex-nowrap justify-between mt-3">
                      <div className="flex">
                        <p className="text-md font-medium text-[#5F5F5F]">
                          Shop from
                        </p>
                      </div>
                      <p className="text-md font-medium text-black">
                        {host.location}
                      </p>
                    </div>
                    <div className="flex flex-wrap md:flex-nowrap justify-between mt-3">
                      <div className="flex">
                        <p className="text-md font-medium text-[#5F5F5F]">
                          Live shopping starting at
                        </p>
                        <Tooltip title="Tooltip text">
                          <img
                            src={HostSessionQuestion}
                            alt=""
                            className="h-4 mt-1 pl-2"
                          />
                        </Tooltip>
                      </div>
                      <p className="text-md font-medium text-black">
                        ${host.starting}
                      </p>
                    </div>
                    <div className="flex flex-wrap md:flex-nowrap justify-between mt-3">
                      <div className="flex gap-2 items-center">
                        <p className="text-md font-medium text-[#5F5F5F] font-inter">
                          Shopping assistance
                        </p>
                        <Tooltip title="Tooltip text">
                          <img
                            src={HostSessionQuestion}
                            alt=""
                            className="h-4 mt-1"
                          />
                        </Tooltip>
                      </div>
                      <p className="text-md font-medium text-black">
                        {host.assistance}% of invoice value
                      </p>
                    </div>
                    <div className="flex flex-wrap md:flex-nowrap justify-between  mt-3">
                      <p className="text-md font-medium text-[#5F5F5F] font-inter flex">
                        Purchase budget{" "}
                        <Tooltip title="Tooltip text">
                          <img
                            src={HostSessionQuestion}
                            alt=""
                            className="h-4 mt-1 pl-2"
                          />
                        </Tooltip>
                      </p>

                      <p className="text-md font-medium text-black">$1,000.0</p>
                    </div>
                    <div className="mt-8 w-full">
                      <Link
                        to={`/hosts/${host.id}`}
                        className="flex justify-center items-center gap-x-2 w-full  text-lg bg-[#C33366] hover:bg-[#dd578d] text-white p-2.5 rounded-md font-medium"
                      >
                        <img src={ShoppingIcon} alt="" className="" />
                        <p className="mt-1">Book shopping session</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <NoHostAvailable />
      )}
      {filteredHosts.length > pageSize && (
        <div className="flex justify-center mt-8">
          <Pagination
            current={currentPage}
            total={filteredHosts.length}
            pageSize={pageSize}
            onChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}
