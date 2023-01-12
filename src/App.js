// import logo from "./logo.svg";

import React, { useEffect, useReducer } from "react";
import DataFectingOne from "./Reducer/DataFectingOne";
import DataFetchingTwo from "./Reducer/DataFetchingTwo";
import ParentComponent from "./useCallback/ParentComponent";



export const CountContext = React.createContext()

const initialState = 0

function App() {
  return (
    
    <div className="App">
      <ParentComponent />
     {/* <DataFectingOne /> */}
     {/* <DataFetchingTwo /> */}
    </div>
  );
}

export default App;
