import React from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { INewFile } from '../../models';
import './LeftNavbar.css';

interface Props {
  file: INewFile;
  files: INewFile[];
  setFiles: React.Dispatch<React.SetStateAction<INewFile[]>>;
}

export const TitleContent: React.FC<Props> = ({ file, files, setFiles }) => {
  const deleteFile = (id: string) => {
    const deleteFiles = files.filter((file) => file.id !== id);
    setFiles(deleteFiles);
    localStorage.setItem('newFile', JSON.stringify(deleteFiles));
  };
  return (
    <div className="titleContent">
      <Link className="titleLink" to={`/file/${file.id}`}>
        {file.name} {<VscChromeClose onClick={() => deleteFile(file.id)} className="VscChromeCloseTitle" />}
      </Link>
    </div>
  );
};
