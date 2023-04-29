import React, { useState } from "react";
import {
  VscAccount,
  VscDebugAlt,
  VscExtensions,
  VscFiles,
  VscGear,
  VscSearch,
  VscSourceControl,
} from "react-icons/vsc";
import { Explorer } from "./Explorer";
import { Search } from "./Search";
import "./LeftNavbar.css";
import { INewFile } from "../../models";


interface Props {
  newFiles: INewFile;
  setNewFiles: React.Dispatch<React.SetStateAction<INewFile>>;
  files: INewFile[];
  setFiles: React.Dispatch<React.SetStateAction<INewFile[]>>;
}

interface Active {
  explorer: boolean;
  search: boolean;
  sourse: boolean;
  runDebug: boolean;
  extensions: boolean;
  account: boolean;
  gear: boolean;
}

export const LeftNavbar: React.FC<Props> = ({
  newFiles,
  setNewFiles,
  files,
  setFiles,
}) => {
  const [active, setActive] = useState<Active>({
    explorer: false,
    search: false,
    sourse: false,
    runDebug: false,
    extensions: false,
    account: false,
    gear: false,
  });

  return (
    <div className="containerLeftNavbar">
      <div className="leftNavbar">
        <div className="topIcons">
          <VscFiles
            onClick={() =>
              setActive(
                !active.explorer
                  ? { ...active, explorer: true }
                  : { ...active, explorer: false }
              )
            }
            className={!active.explorer ? "VscFiles" : "active"}
          />
          <VscSearch
            onClick={() =>
              setActive(
                !active.search
                  ? { ...active, search: true }
                  : { ...active, search: false }
              )
            }
            className={!active.search ? "VscSearch" : "active"}
          />
          <VscSourceControl
            onClick={() =>
              setActive(
                !active.sourse
                  ? { ...active, sourse: true }
                  : { ...active, sourse: false }
              )
            }
            className={
              !active.sourse ? "VscSourceControl" : "active"
            }
          />
          <VscDebugAlt
            onClick={() =>
              setActive(
                !active.runDebug
                  ? { ...active, runDebug: true }
                  : { ...active, runDebug: false }
              )
            }
            className={!active.runDebug ? "VscDebugAlt" : "active"}
          />
          <VscExtensions
            onClick={() =>
              setActive(
                !active.extensions
                  ? { ...active, extensions: true }
                  : { ...active, extensions: false }
              )
            }
            className={
              !active.extensions ? "VscExtensions" : "active"
            }
          />
        </div>
        <div className="bottomIcons">
          <VscAccount
            onClick={() =>
              setActive(
                !active.account
                  ? { ...active, account: true }
                  : { ...active, account: false }
              )
            }
            className={!active.account ? "VscAccount" : "active"}
          />
          <VscGear
            onClick={() =>
              setActive(
                !active.gear
                  ? { ...active, gear: true }
                  : { ...active, gear: false }
              )
            }
            className={!active.gear ? "VscGear" : "active"}
          />
        </div>
      </div>
      {
        <Explorer
          newFiles={newFiles}
          setNewFiles={setNewFiles}
          files={files}
          setFiles={setFiles}
        />
      }
      {active.search && <Search />}
    </div>
  );
};
