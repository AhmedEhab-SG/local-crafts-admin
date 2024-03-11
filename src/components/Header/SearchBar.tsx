"use client";

import Input from "../shared/Input";

const SearchBar = () => {
  return (
    <div className="w-1/2 hidden lg:block">
      <Input id="search" label="search" serach />
    </div>
  );
};

export default SearchBar;
