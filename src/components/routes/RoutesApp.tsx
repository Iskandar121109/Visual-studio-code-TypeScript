import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom"
import { INewFile } from "../../models";
import { File } from "../file/File";
import { HomePage } from "../homePage/HomePage";

// interface NewFile {
//   id: string;
//   name: string;
//   content: string;
// }

interface RouteProps {
  newFiles: INewFile;
  setNewFiles: React.Dispatch<React.SetStateAction<INewFile>>;
  files: INewFile[];
  setFiles: React.Dispatch<React.SetStateAction<INewFile[]>>;
}

export const RoutesApp: React.FC = () => {
  const [newFiles, setNewFiles] = useState<INewFile>({
    id: "",
    name: "",
    content: "",
  });
  const [files, setFiles] = useState<INewFile[]>([]);

  useEffect(() => {
    const savedFiles = JSON.parse(localStorage.getItem("newFile") || "[]");
    if (savedFiles.length > 0) {
      setFiles(savedFiles);
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            newFiles={newFiles}
            setNewFiles={setNewFiles as RouteProps["setNewFiles"]}
            files={files}
            setFiles={setFiles as RouteProps["setFiles"]}
          />
        }
      >
        <Route path="/file/:id" element={<File files={files} />} />
      </Route>
    </Routes>
  );
};
