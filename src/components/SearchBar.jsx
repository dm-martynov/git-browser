import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function SearchBar() {
  const [value, setvalue] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/${value}`);
  };

  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  return (
    <div>
      <span>Search</span>
      <input
        id="input-field"
        onChange={handleChange}
        type="text"
        placeholder=""
        name="Search"
        value={value}
      />
      <button onClick={handleSubmit} id="search-button">
        Submit
      </button>
    </div>
  );
}
