"use client";

import InputStyled from "../shared/InputStyled";

const SearchBar = () => {
  return (
    <div className="w-1/2 hidden lg:block">
      <InputStyled id="search" label="search" serach />
    </div>
  );
};

export default SearchBar;
