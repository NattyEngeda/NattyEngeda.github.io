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

// Images
import logo from '../assets/images/logo.png';

export default function Header() {
  return (
    <header className="z-40 w-full h-20 flex flex-row gap-20 items-center justify-center fixed md:px-20">
      <div className="container flex flex-row gap-20 items-center justify-between px-5 md:px-0">

        <div className="transition duration-300 glassy-header md:px-5 md:py-1 rounded-3xl flex flex-row gap-2 items-center justify-center">
          <div className="w-full">
            <img
              className="w-12 md:w-10 h-auto"
              src={logo}
              alt="Natty Engeda" />
          </div>
          <h1 className="hidden md:block link-underline text-2xl font-bold font-VT323 text-white">
            Natty.Engeda
          </h1>
        </div>

        <div className="hidden md:block px-10 py-3 rounded-3xl glassy-header">
          <ul className="flex flex-row gap-10 font-semibold">
            <LinkList link={"/"} name={"Home"} />
            <LinkList link={"/about"} name={"About"} />
            <LinkList link={"/projects"} name={"Projects"} />
            <LinkList link={"/blog"} name={"Blog"} />
            <LinkList link={"/contact"} name={"Contact"} /> */}
          </ul>
        </div>

        <div className="md:hidden block">
          <Menu
            shadow="md"
            width={200}
            styles={{

            }}
          >
            <Menu.Target>
              {/* <Button className="bg-violet-500 active:bg-violet-600 p-0 w-12 h-10"> */}
              <div className="w-12 h-12 glassy-header rounded-full flex items-center justify-center">
                <IconMenu2 size={25} />
              </div>
              {/* </Button> */}
            </Menu.Target>

            <Menu.Dropdown>
              {/* <Menu.Item className="active:bg-gray-300" component={Link} to="/">
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
              > */}
              {/* Portfolio
            </Menu.Item> */}
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
    </header >
  );
}
