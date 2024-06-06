import logo from "@/assets/images/Paybag.svg";
import { BagMenuIcon, ChatMenuIcon, SearchIcon } from "@/constants/icons";
import { Drawer, Input } from "antd";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../index.css";
import Button from "./Button";
import NotificationDropdown from "./NotificationDropdown";
import ProfileDropdown from "./ProfileDropdown";
import Svg from "./Svg";

export default function Header() {
  const [showHeaderDrawer, setShowHeaderDrawer] = useState<boolean>(false);

  return (
    <header className="bg-dark">
      <nav className="py-4 container px-10 flex justify-between mx-auto">
        <Link className="flex items-center gap-x-2" to="/">
          <img src={logo} alt="" className="h-8 md:h-10" />
          <p className="text-white font-medium text-xl md:text-2xl">PAYBAG</p>
        </Link>
        <div className="flex gap-x-8 items-center">
          <div className="hidden lg:inline-block">
            <Input
              id="default-search"
              className="text-sm text-gray-900 border border-gray-300 rounded-lg max-w-[12rem] p-3 h-[38px]"
              placeholder="Search "
              prefix={<Svg src={SearchIcon} width={15} height={15} />}
            />
          </div>
          <ul className="hidden lg:flex gap-x-8">
            <li className="flex items-center hover:text-primary text-white transition-colors">
              <Link to="/chat" className="flex items-center gap-x-2">
                <Svg src={ChatMenuIcon} width={20} height={20} />
                <p className="text-sm">Message</p>
              </Link>
            </li>
            <li className="flex items-center hover:text-primary text-white transition-colors">
              <Link to="/shopper/orders" className="flex items-center gap-x-2">
                <Svg src={BagMenuIcon} width={20} height={20} />
                <p className="text-sm">Orders</p>
              </Link>
            </li>
            <li className="flex items-center hover:text-primary text-white transition-colors">
              <NotificationDropdown />
            </li>
          </ul>
          <HeaderDrawer
            open={showHeaderDrawer}
            onClose={() => setShowHeaderDrawer(false)}
          />
          <Button
            type="primary"
            className="bg-transparent w-auto inline-block lg:hidden"
            onClick={() => setShowHeaderDrawer(true)}
          >
            <FaBars size={18} />
          </Button>
          <ProfileDropdown />
        </div>
      </nav>
    </header>
  );
}

const HeaderDrawer = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <div className="drawer-body">
        <Input
          id="default-search"
          className="text-sm text-gray-900 border border-gray-300 rounded-lg p-3 h-10"
          placeholder="Search "
          prefix={<Svg src={SearchIcon} width={15} height={15} />}
        />
        <ul className="my-5 space-y-5">
          <li className="flex items-center hover:text-primary transition-colors">
            <Link to="/chat" className="flex items-center gap-x-2">
              <Svg src={ChatMenuIcon} width={20} height={20} />
              <p className="text-sm">Message</p>
            </Link>
          </li>
          <li className="flex items-center hover:text-primary transition-colors">
            <Link to="/shopper/orders" className="flex items-center gap-x-2">
              <Svg src={BagMenuIcon} width={20} height={20} />
              <p className="text-sm">Orders</p>
            </Link>
          </li>
          <li className="flex items-center hover:text-primary transition-colors">
            <NotificationDropdown />
          </li>
        </ul>
      </div>
    </Drawer>
  );
};
