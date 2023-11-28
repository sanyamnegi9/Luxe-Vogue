import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // ---search logic here---
    // Close the search bar after searching
    onClose();
  };

  return (
    <div className={`search ${isOpen ? "open" : ""}`}>
      <div className="search-container">
        <Link onClick={handleSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" />
        </Link>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <Link onClick={onClose}>
        <FontAwesomeIcon icon={faXmark} size="2xl" />
      </Link>
    </div>
  );
};

export default Search;
