import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
//w

const Header = ({ OpenSideBar }) => {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSideBar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
      <div className="header-right">
        <BsFillBellFill className="icon-1" />
        <BsFillEnvelopeFill className="icon-1" />
        <BsPersonCircle className="icon-1" />
      </div>
    </header>
  );
};
//hh
export default Header;
