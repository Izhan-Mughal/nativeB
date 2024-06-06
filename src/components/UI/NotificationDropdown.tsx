import {
  BellMenuIcon,
  Chevron,
  NotificationHoverIcon,
} from "@/constants/icons";
import { Dropdown, MenuProps } from "antd";
import { useEffect, useState } from "react";
import Svg from "./Svg";

export default function NotificationDropdown() {
  const [items, setItems] = useState<MenuProps["items"]>([]);

  useEffect(() => {
    const newNotifications = Array.from({ length: 10 }).map((item: any) => ({
      key: item,
      label: <NotificationItem />,
    }));

    setItems(newNotifications);
  }, []);

  return (
    <Dropdown
      menu={{ items }}
      rootClassName="sf-notification-dropdown"
      className="cursor-pointer"
      placement="bottomLeft"
    >
      <a
        onClick={(e) => e.preventDefault()}
        className="flex items-center gap-x-2"
      >
        <Svg src={BellMenuIcon} width={20} height={20} />
        <p className="text-sm">Notifications</p>
        <Svg src={Chevron} width={12} height={12} />
      </a>
    </Dropdown>
  );
}

const NotificationItem = () => {
  return (
    <li className="bg-blue-200/10 rounded-lg p-3 flex items-center gap-x-3 group hover:bg-primary transition-colors hover:text-white cursor-pointer">
      <img
        src="https://ui-avatars.com/api/?name=John+Doe"
        alt="user-name"
        className="rounded-full w-12 h-12 object-cover group-hover:hidden"
      />
      <div className="bg-white rounded-full basis-16 h-12 hidden group-hover:flex justify-center items-center">
        <Svg src={NotificationHoverIcon} width={30} height={30} />
      </div>
      <div className="flex items-center gap-x-3">
        <p>
          <span className="font-semibold block">John Doe</span>
          <span className="block text-sm">
            marked your order please check your session history
          </span>
        </p>
        <p className="text-sm">20:26</p>
      </div>
    </li>
  );
};
