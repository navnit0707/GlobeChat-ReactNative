import React from "react";
import Header from "./Header/Header";

export default function ChatUI() {
  return (
    <>
      <Header />
      <div style={{ height: "100px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ backgroundColor: "yellow" }}>hi</div>
          <div
            style={{
              backgroundColor: "red",
              display: "flex",
              flexDirection: "row",

              width: "100%",
            }}>
            <input style={{ flex: "4" }} type="text" />

            <div>send</div>
          </div>
        </div>
      </div>
    </>
  );
}
