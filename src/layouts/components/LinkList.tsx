import React from "react";
import { NavLink } from "react-router-dom";

interface props {
  link: string;
  name: String;
}

const LinkList: React.FC<props> = ({ link, name }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "active-header link-active " : "normal-header link-underline hover:line-height-normal"
      }
      to={link}
    >
      {name}
    </NavLink>
  );
};

export default LinkList;
