import React from 'react';
import './LeftNavbar.css';
import { VscClearAll, VscCollapseAll, VscListFlat, VscNewFile, VscRefresh } from 'react-icons/vsc';

export const Search: React.FC = () => {
  return (
    <div className="search">
      <div className="searchTitle">
        <div className="title">SEARCH</div>
        <div className="icons">
          <VscRefresh />
          <VscClearAll />
          <VscNewFile />
          <VscListFlat />
          <VscCollapseAll />
        </div>
      </div>
      <div className="searchInputs">
        <input type="text" placeholder='Search'/>
        <input type="text" placeholder='Replace' className="replace"/>
      </div>
    </div>
  );
};
