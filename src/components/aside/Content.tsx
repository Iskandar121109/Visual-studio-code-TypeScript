import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { INewFile } from "../../models";
import { LeftNavbar } from "./LeftNavbar";
import "./LeftNavbar.css";
import { TitleContent } from "./TitleContent";

interface ContentProps {
  newFiles: INewFile;
  setNewFiles: React.Dispatch<
    React.SetStateAction<INewFile>
  >;
  files: INewFile[];
  setFiles: React.Dispatch<
    React.SetStateAction<INewFile[]>
  >;
}

export const Content: React.FC<ContentProps> = ({
  newFiles,
  setNewFiles,
  files,
  setFiles,
}) => {
  const [hideTextArea, setHideTextArea] = useState(false);
  const { id } = useParams<{ id: string }>();
  const codeText = files.find((file) => file.id === id);

  return (
    <div>
      <div
        className="titleContentDiv"
        onClick={() => setHideTextArea(!hideTextArea)}
      >
        {files.length > 0 &&
          files.map((file) => (
            <div key={file.id}>
              <TitleContent files={files} setFiles={setFiles} file={file} />
            </div>
          ))}
      </div>

      <div className="content">
        <LeftNavbar
          newFiles={newFiles}
          setNewFiles={setNewFiles}
          setFiles={setFiles}
          files={files}
        />
        <div className="contentEdit">
          {!hideTextArea ? (
            <textarea
              value={newFiles.content}
              onChange={(e) =>
                setNewFiles({ ...newFiles, content: e.target.value })
              }
            />
          ) : (
            <SyntaxHighlighter
              className="highLighter"
              language="javascript"
              style={docco}
            >
              {codeText ? codeText.content : ""}
            </SyntaxHighlighter>
          )}
        </div>
      </div>
    </div>
  );
};