import React from "react";
import { Menu, Button, Text } from "@mantine/core";
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconMenu2,
  IconHome,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full h-20 flex flex-row gap-20 items-center justify-between px-5 md:px-10 normshad shadow-xl glassy-header fixed">
      <div>
        <h1 className="text-2xl font-bold font-VT323">Natty.Engeda</h1>
      </div>
      <div className="hidden md:block">
        <ul className="flex flex-row gap-10 font-semibold">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/portfolio"}>Portfolio</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden block">
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Button className="bg-violet-500 active:bg-violet-600 p-0 w-12 h-10">
              <IconMenu2 size={25} />
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item className="active:bg-gray-300" component={Link} to="/">
              Home
            </Menu.Item>
            <Menu.Item
              className="active:bg-gray-300"
              component={Link}
              to="/about"
            >
              About
            </Menu.Item>
            <Menu.Item
              className="active:bg-gray-300"
              component={Link}
              to="/contact"
            >
              Contact
            </Menu.Item>
            <Menu.Item
              className="active:bg-gray-300"
              component={Link}
              to="/portfolio"
            >
              Portfolio
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </header>
  );
}
