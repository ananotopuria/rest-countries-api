import React from "react";

import Filter from "../components/Filter";
import Search from "../components/Search";
import Countries from "../components/Countries";

function Homepage() {
  return (
    <>
      <div>
        <Search />
        <Filter />
      </div>
      <div>
        <Countries />
      </div>
    </>
  );
}

export default Homepage;
