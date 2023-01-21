// import logo from "./logo.svg";

import React from "react";
import DocTitleOne from "./customHook/DocTitleOne";
import DocTitleTwo from "./customHook/DocTwo";
import CounterOne from "./customHook/CounterOne";
import CounterTwo from "./customHook/CounterTwo";
import UserForm from "./customHook/UserForm";





function App() {
  return (
    
    <div className="App">
      <UserForm />
      <CounterOne />
      <CounterTwo />
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
    </div>
  );
}

export default App;
