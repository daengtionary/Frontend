import React from "react";
import { SearchBarWrap } from "./SearchBar.styled";


const SearchBar = () => {
  return (
    <SearchBarWrap>
      <input type="text" placeholder="궁금한 후기를 검색하세요" />
    </SearchBarWrap>
  );
};

export default SearchBar;
