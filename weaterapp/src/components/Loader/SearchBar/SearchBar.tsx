import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export type SearchBarProps = {
  onSearchClick: (value: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearchClick }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSearchButtonClick = () => {
    inputValue !== "" && onSearchClick(inputValue);
    setInputValue("");
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      inputValue !== "" && onSearchClick(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="search-bar">
      <div className="search-input">
        <input
          type="text"
          placeholder="도시를 입력해주세요."
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            setInputValue(e.target.value);
          }}
          onKeyDown={handleEnterKeyPress}
        />
      </div>

      <button className="search-button" onClick={handleSearchButtonClick}>
        <FontAwesomeIcon icon={faSearch} className="icon-search" />
      </button>
    </div>
  );
};

export default SearchBar;
