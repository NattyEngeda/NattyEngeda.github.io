import React, { useEffect, useState } from "react";
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
import { Link, useLocation, NavLink } from "react-router-dom";
import "../styles/underline-style.css";
import LinkList from "./components/LinkList";

export default function Header() {
  return (
    <header className="w-full h-20 flex flex-row gap-20 items-center justify-center shadow-xl glassy-header fixed">
      <div className="container flex flex-row gap-20 items-center justify-between px-5 md:px-0">
        <div className="transition duration-300">
          <h1 className="link-underline  text-2xl font-bold font-VT323 text-white">
            Natty.Engeda
          </h1>
        </div>
        <div className="hidden md:block">
          <ul className="flex flex-row gap-10 font-semibold">
            <LinkList link={"/"} name={"Home"} />
            <LinkList link={"/about"} name={"About"} />
            <LinkList link={"/portfolilo"} name={"Portfolio"} />
            <LinkList link={"/blog"} name={"Blog"} />
            <LinkList link={"/contact"} name={"Contact"} />
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
      </div>
    </header>
  );
}
