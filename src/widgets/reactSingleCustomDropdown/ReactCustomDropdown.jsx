import React, { useState } from "react";
import "./ReactCustomDropdown.css";

const ReactCustomDropdown = ({
  options,
  onChange,
  sort = false,
  search = false,
  group = false,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
    onChange && onChange(option.value);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let foptions = search ? [...filteredOptions] : [...options];

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortedOptions = foptions.sort((a, b) => {
    const orderMultiplier = sortOrder === "asc" ? 1 : -1;
    return a.label.localeCompare(b.label) * orderMultiplier;
  });

  const groupedOptions = {};
  filteredOptions.forEach((option) => {
    const category = option.category || "Uncategorized";
    if (!groupedOptions[category]) {
      groupedOptions[category] = [];
    }
    groupedOptions[category].push(option);
  });

  const opt = sort
    ? sortedOptions
    : search
    ? [...filteredOptions]
    : [...options];

  return (
    <div className="custom-dropdown">
      <div className="selected-option" onClick={toggleOptions}>
        {selectedOption ? selectedOption.label : "Select an option"}
      </div>
      <div className={`options ${showOptions ? "show" : ""}`}>
        {search && (
          <div className="search-input">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        )}
        {sort && (
          <div className="sort-option" onClick={handleSort}>
            Sort {sortOrder === "asc" ? "A-Z" : "Z-A"}
          </div>
        )}
        {group
          ? Object.keys(groupedOptions).map((category) => (
              <div key={category} className="option-group">
                <div className="category-label">{category}</div>
                {groupedOptions[category].map((option, index) => (
                  <div
                    key={index}
                    className={`option ${
                      selectedOption?.value === option.value ? "selected" : ""
                    }`}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            ))
          : opt.map((option, index) => (
              <div
                key={index}
                className={`option ${
                  selectedOption?.value === option.value ? "selected" : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            ))}
      </div>
    </div>
  );
};

export default ReactCustomDropdown;
