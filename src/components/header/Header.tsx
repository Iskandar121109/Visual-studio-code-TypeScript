import React from "react";
import "./Header.css";
import { TbBrandVscode } from "react-icons/tb";
import {
  VscChromeClose,
  VscChromeMinimize,
  VscChromeRestore,
  VscLayout,
  VscLayoutPanel,
  VscLayoutSidebarLeft,
  VscLayoutSidebarRightOff,
} from "react-icons/vsc";

export const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="containerLogoTitle">
        <div className="logo">
          <TbBrandVscode className="TbBrandVscode" />
        </div>
        <div className="links">
          <ul className="ul">
            <li>File</li>
            <li>Edit</li>
            <li>Selection</li>
            <li>View</li>
            <li>Go</li>
            <li>Run</li>
            <li>Terminal</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div className="title">Задача - Visual Studio Code</div>
      <div className="containerIconWindowClose">
        <div className="iconsWindow">
          <VscLayoutSidebarLeft />
          <VscLayoutPanel />
          <VscLayoutSidebarRightOff />
          <VscLayout />
        </div>
        <div className="close">
          <VscChromeMinimize />
          <VscChromeRestore />
          <VscChromeClose />
        </div>
      </div>
    </div>
  );
};
