import React from "react";
import { SearchBarWrap } from "./SearchBar.styled";


const SearchBar = () => {
  return (
    <SearchBarWrap>
      <input 
        type="text" placeholder="글 검색 기능은 아직 구현중입니다."
      />
    </SearchBarWrap>
  );
};

export default SearchBar;
