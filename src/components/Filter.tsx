import React from "react";

function Filter() {
  return (
    <>
      <select name="region" id="region" defaultValue="">
        <option value="" disabled>
          Filter by region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </>
  );
}

export default Filter;
