import React from "react";
import ReactCustomDropdown from "../widgets/reactSingleCustomDropdown";
import ReactMultiCustomDropdown from "../widgets/reactMultiCustomDropdown";
import "./ReactCustomDropdownLayout.css";

const ReactCustomDropdownLayout = () => {
  const options = [
    { label: "Ludhiana", value: "ludhiana", category: "Punjab" },
    { label: "Patiala", value: "patiala", category: "Punjab" },
    { label: "Mumbai", value: "mumbai", category: "Maharashtra" },
    { label: "Bangalore", value: "bangalore", category: "Karnataka" },
    { label: "Goa", value: "goa" },
  ];

  const handleDropdownChange = (value) => {
    console.log("Selected:", value);
  };

  return (
    <div className="dropdown-container">
      <div>
        <p className="top-label">1. Single Selection</p>
        <ReactCustomDropdown
          options={options}
          onChange={handleDropdownChange}
        />
      </div>
      <div>
        <p className="top-label">2. Multi Selection</p>
        <ReactMultiCustomDropdown
          options={options}
          onChange={handleDropdownChange}
        />
      </div>
      <div>
        <p className="top-label">3. Search List</p>
        <ReactCustomDropdown
          options={options}
          onChange={handleDropdownChange}
          search={true}
        />
      </div>
      <div>
        <p className="top-label">4. Sort List</p>
        <ReactCustomDropdown
          options={options}
          onChange={handleDropdownChange}
          sort={true}
        />
      </div>
      <div>
        <p className="top-label">5. Group List</p>
        <ReactCustomDropdown
          options={options}
          onChange={handleDropdownChange}
          group={true}
        />
      </div>
    </div>
  );
};

export default ReactCustomDropdownLayout;
