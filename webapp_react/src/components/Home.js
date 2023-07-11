import React from "react";

import HeaderSchema from "./Header/HeaderSchema";
import Body from "./Body/Body";
export default function Home() {
  return (
    <div style={{ margin: "0px", padding: "0px" }} className="App">
      <HeaderSchema />
      <Body />
    </div>
  );
}
