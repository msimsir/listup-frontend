import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { searchPlaceholder } from "../../../constants/ui-elements";
import { SearchWrapper, SearchInput } from "./styles";

const Search = () => {
  return (
    <SearchWrapper>
      <SearchInput placeholder={searchPlaceholder} />
      <IoSearchOutline />
    </SearchWrapper>
  );
};

export default Search;
