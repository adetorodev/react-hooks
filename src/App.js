// import logo from "./logo.svg";

import React, { useEffect } from "react";
import Form from "./Component/ArtWork";
import Person from "./Component/ClassCounter";
import SiteHeader from "./Component/useffHook";
import { Title } from "./Component/UseEff";
import ClassCounterOne from "./useEffectHooks/ClassCounterOne";
import HookCountOne from "./useEffectHooks/HookCountOne";
import ClassMouse from "./useEffectHooks/ClassMouse";
import HookMouse from "./useEffectHooks/HookMouse";
import MouseContainer from "./useEffectHooks/MouseContainer";
import IntervalClassCounter from "./useEffectHooks/IntervalClassCounter";
import IntervalHookCounter from "./useEffectHooks/IntervalHookCounter";
import DataFetching from "./useEffectHooks/DataFetching";
import ComponentC from "./useContext/ComponentC";
// import { Nav, Title } from "./Component/book/Chapt1";

const menus = [
  { key: "home", label: "Home" },
  { key: "product", label: "Product" },
  { key: "about", label: "About" },
  { key: "secure", label: "Secure", disabled: true },
];

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Ezekiel"}>
        <ChannelContext.Provider value={'ZestDev'}>
          <ComponentC />
        </ChannelContext.Provider >
      </UserContext.Provider>

      {/* <DataFetching /> */}
      {/* < IntervalHookCounter /> */}
      {/* <IntervalClassCounter/> */}
      {/* <MouseContainer /> */}

      {/* <HookMouse /> */}
      {/* <ClassMouse /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCountOne /> */}
      {/* <header className="App-header">
        <SiteHeader />
        <Person />
        <br />
        <Form />
      </header> */}
      {/* <Title /> */}
      {/* <Nav items={menus} selected="home" /> */}
      {/* <Title text="Click"/> */}
    </div>
  );
}

export default App;
