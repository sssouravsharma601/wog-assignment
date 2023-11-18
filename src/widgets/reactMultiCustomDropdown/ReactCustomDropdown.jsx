import React, { useState } from "react";
import "./ReactCustomDropdown.css";

const ReactCustomDropdown = ({ options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionClick = (option) => {
    const isSelected = selectedOptions.some(
      (selectedOption) => selectedOption.value === option.value
    );

    if (isSelected) {
      const updatedOptions = selectedOptions.filter(
        (selectedOption) => selectedOption.value !== option.value
      );
      setSelectedOptions(updatedOptions);
    } else {
      const updatedOptions = [...selectedOptions, option];
      setSelectedOptions(updatedOptions);
    }
    setShowOptions(false);
    onChange &&
      onChange(selectedOptions.map((selectedOption) => selectedOption.value));
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  return (
    <div className="custom-dropdown">
      <div className="selected-option" onClick={toggleOptions}>
        {selectedOptions.length > 0
          ? selectedOptions.map((option) => option.label).join(", ")
          : "Select options"}
      </div>
      <div className={`options ${showOptions ? "show" : ""}`}>
        {options.map((option, index) => (
          <div
            key={index}
            className={`option ${
              selectedOptions.some(
                (selectedOption) => selectedOption.value === option.value
              )
                ? "selected"
                : ""
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
