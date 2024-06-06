import { Dropdown, MenuProps } from "antd";
import { Link, useLocation } from "react-router-dom";
import Usama from "@/assets/images/usama.svg";
import {
  HelpIcon,
  SettingsIcon,
  SignoutIcon,
  WalletIcon,
  PinkArrowIcon,
  Chevron,
} from "@/constants/icons";
import ProfileDropdownVector from "@/assets/profile-dropdown-vector.svg";
import Avatar from "antd/es/avatar/avatar";
import Svg from "./Svg";

export default function ProfileDropdown() {
  const location = useLocation();

  const shouldRenderSwitchToHosting = !/\/host(|s)\b/.test(location.pathname);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex items-center gap-3 p-2">
          <img src={Usama} />
          <div>
            <p className="text-[#1C1D22] font-bold text-lg">Usama</p>
            <p className="text-[#5F5F5F] text-md">Usama@gmail.com</p>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: shouldRenderSwitchToHosting && (
        <Link
          to="/host/account-setup"
          className="border rounded p-4 px-5 flex items-center"
        >
          <div className="flex flex-col gap-2 justify-start">
            <h1 className="text-primary text-[16px] font-bold">
              Switch to hosting
            </h1>
            <p className="w-3/4 text-black font-normal text-xs">
              It's easy to set up and start earning
            </p>
            <img src={PinkArrowIcon} width={30} height={30} />
          </div>
          <img src={ProfileDropdownVector} className="w-1/2" />
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <div className="py-2 px-2 flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <img src={SettingsIcon} width={20} height={20} />
            <Link
              to="/profile"
              className="text-md text-black hover:text-primary"
            >
              Profile Settings
            </Link>
          </div>
          <div className="flex items-center gap-4 ">
            <img src={WalletIcon} width={20} height={20} />
            <Link
              to="/wallet"
              className="text-md text-black hover:text-primary"
            >
              Wallet
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <img src={HelpIcon} width={20} height={20} />
            <Link
              to="/help-support"
              className="text-md text-black hover:text-primary"
            >
              Help & Support
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <img src={SignoutIcon} width={20} height={20} />
            <Link
              to="/auth/login"
              className="text-md text-black hover:text-primary"
            >
              Sign Out
            </Link>
          </div>
        </div>
      ),
    },
  ];
  return (
    <Dropdown menu={{ items }} rootClassName="rm-profile-dropdown">
      <a
        onClick={(e) => e.preventDefault()}
        className="flex justify-center items-center gap-2"
      >
        <Avatar src={Usama} size={40} shape="circle" />
        <Svg src={Chevron} width={12} height={12} />
      </a>
    </Dropdown>
  );
}
