import React from "react";

function Search({search, setSearch}) {
  return (
  <input
   type="text"
    placeholder="Search plants..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="border p-2 rounded w-1/2 mb-4"
    />
  );
}

export default Search;
