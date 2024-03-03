/* eslint-disable react/prop-types */
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export function LocationSlide() {
  const [location, setLocation] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  // do filtering on the back-end
  const fetchData = async (value) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    const results = data.filter((item) => {
      return (
        value &&
        item &&
        item.name &&
        item.name.toLowerCase().includes(value.toLowerCase())
      );
    });
    setSearchResults(results);
  };

  const handleSearch = (value) => {
    setLocation(value);
    fetchData(value);
  };

  return (
    <>
      <div className="info-slide-location">
        <p className="info-input-title2">{selectedLocation}</p>
        <div className="searchbar-location-container">
          <SearchBar
            setLocation={setLocation}
            location={location}
            handleSearch={handleSearch}
          />
          <SearchResultsList
            results={searchResults}
            setSelectedLocation={setSelectedLocation}
          />
        </div>
        {/* <input type="search" placeholder="Enter your location" /> */}
      </div>
    </>
  );
}

function SearchBar(props) {
  return (
    <>
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          className="location-input"
          type="search"
          placeholder="location"
          value={props.location}
          onChange={(e) => props.handleSearch(e.target.value)}
        />
      </div>
    </>
  );
}
function SearchResultsList(props) {
  console.log(props.results);
  const handleClick = (value) => {
    props.setSelectedLocation(value);
  };
  return (
    <div className="search-results">
      {props.results.length > 0 &&
        props.results.map((item, index) => {
          return (
            <div
              key={index}
              className="search-result-item"
              onClick={() => handleClick(item.name)}
            >
              {item.name}
            </div>
          );
        })}
    </div>
  );
}
