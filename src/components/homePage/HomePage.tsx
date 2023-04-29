import React from "react";
import { Content } from "../aside/Content";
import { Header } from "../header/Header";

interface HomePageProps {
  newFiles: {id: string; name: string; content: string };
  setNewFiles: React.Dispatch<
    React.SetStateAction<{ id: string; name: string; content: string }>
  >;
  files: { id: string; name: string; content: string }[];
  setFiles: React.Dispatch<
    React.SetStateAction<{ id: string; name: string; content: string }[]>
  >;
}

export const HomePage: React.FC<HomePageProps> = ({
  newFiles,
  setNewFiles,
  files,
  setFiles,
}) => {
  return (
    <div>
      <Header />
      <Content
        newFiles={newFiles}
        setNewFiles={setNewFiles}
        files={files}
        setFiles={setFiles}
      />
    </div>
  );
};
