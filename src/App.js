// import logo from "./logo.svg";

import { useEffect } from "react";
import Form from "./Component/ArtWork";
import Person from "./Component/ClassCounter";
import SiteHeader from "./Component/useffHook";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SiteHeader />
        <Person />
        <br />
        <Form />
      </header>
    </div>
  );
}

export default App;
