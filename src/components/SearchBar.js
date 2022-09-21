import React from "react";

function SearchBar({ filters, setFilters }) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={() => setFilters({
            ...filters,
            alphabetically : !filters.alphabetically,
            price: false
          })}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={() => setFilters({
            ...filters,
            price : !filters.price,
            alphabetically : false
          })}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => setFilters({
          ...filters,
          category : e.target.value
        })}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
