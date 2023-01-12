import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initailState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCHING_SUCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCHING_ERROR":
      return {
        loading: false,
        post: {},
        error: "Something went wrong",
      };
    default:
      return state;
  }
};

function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initailState)
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            dispatch({ type: 'FETCHING_SUCESS', payload: response.data })
        })
        .catch(error => {
            dispatch({ type: 'FETCHING_ERROR' }) 
        })
    },[])
  return <div>
    {state.loading ? 'loading' : state.post.title}
        {state.error ? state.error : null}
  </div>;
}

export default DataFetchingTwo;
