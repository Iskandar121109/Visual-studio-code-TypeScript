import React, { useState } from "react";
import './LeftNavbar.css'
import {
  VscChevronRight,
  VscCollapseAll,
  VscEllipsis,
  VscNewFile,
  VscNewFolder,
  VscRefresh,
} from "react-icons/vsc";
import "./LeftNavbar.css";
import { INewFile } from "../../models";


interface Props {
  setNewFiles: React.Dispatch<React.SetStateAction<INewFile>>;
  newFiles: INewFile;
  files: INewFile[];
  setFiles: React.Dispatch<React.SetStateAction<INewFile[]>>;
}

export const Explorer: React.FC<Props> = ({
  setNewFiles,
  newFiles,
  files,
  setFiles,
}) => {
  const [newFileOpen, setNewFileOpen] = useState(false);

  const saveFile = () => {
    const newFile = {
      id: crypto.randomUUID(),
      name: newFiles.name,
      content: newFiles.content,
    };
    const updateFiles = [...files, newFile];
    setFiles(updateFiles);
    setNewFiles({
      id: "",
      name: "",
      content: "",
    });
    localStorage.setItem("newFile", JSON.stringify(updateFiles));
  };

  const showOpenAndHideTextArea = () => {
    setNewFileOpen(!newFileOpen);
  };

  return (
    <div className="explorer">
      <div className="titleExplorer">
        EXPLORER
        <VscEllipsis className="VscEllipsisExplorer" />
      </div>
      <div className="taskExplorer">
        <h4>
          <VscChevronRight className="VscChevronRightExp" />
          ЗАДАЧА VS CODE
          <div className="expOpenIcons">
            <VscNewFile onClick={showOpenAndHideTextArea} />
            <VscNewFolder />
            <VscRefresh />
            <VscCollapseAll />
          </div>
        </h4>
      </div>
      <div>
        {newFileOpen && (
          <div className="newFileInputNameAdd">
            <input
              className="inputName"
              type="text"
              placeholder="Имя файла"
              onChange={(e) =>
                setNewFiles({ ...newFiles, name: e.target.value })
              }
              value={newFiles.name}
            />
            <button onClick={saveFile}>Add</button>
          </div>
        )}
        <div className="VscChevronBottom">
          {files.length > 0 &&
            files.map((file) => (
              <div key={file.id} className="nameToOpenFile">
                <p>
                  {file.name && <VscChevronRight />}
                  {file.name}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
