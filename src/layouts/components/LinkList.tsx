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
        isActive ? "link-active text-white" : "normal-header link-underline"
      }
      to={link}
    >
      {name}
    </NavLink>
  );
};

export default LinkList;
