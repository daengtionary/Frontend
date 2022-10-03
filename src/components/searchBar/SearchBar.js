import React from "react";
import { SearchBarWrap } from "./SearchBar.styled";


const SearchBar = () => {
  return (
    <SearchBarWrap>
      <input 
        // onChange={alert("글 검색 기능은 아직 구현중입니다.")} 
        // type="text" placeholder="궁금한 후기를 검색하세요"
        type="text" placeholder="글 검색 기능은 아직 구현중입니다."
      />
    </SearchBarWrap>
  );
};

export default SearchBar;
