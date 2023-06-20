import { Link } from "react-router-dom";

import HeaderSchema from "./components/Header/HeaderSchema";
import Body from "./components/Body/Body";
function App() {
  return (
    <div style={{ margin: "0px", padding: "0px" }} className="App">
      <HeaderSchema />
      <Body />
    </div>
  );
}

export default App;
