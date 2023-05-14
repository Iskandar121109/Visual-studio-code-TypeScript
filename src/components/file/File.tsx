import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface FileProps {
  files: { id: string; content: string }[];
}

export const File: React.FC<FileProps> = ({ files }) => {
  const { id } = useParams<{ id: string }>();
  const [incomingFile, setIncomingFile] = useState<
    { id: string; content: string } | undefined
  >();

  useEffect(() => {
    setIncomingFile(files.find((file) => file.id === id));
  }, [files, id]);

  return (
    <div
      style={{ fontSize: "1.5rem", color: "#fff", padding: "10px 0 10px 0" }}
    >
      {incomingFile && incomingFile.content}
    </div>
  );
};
