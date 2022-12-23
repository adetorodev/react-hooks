import React, { useState, useEffect } from "react";

export default function SiteHeader() {
  const [resourceType, setResourceType] = useState("posts");
  const [item, setItem] = useState([])
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItem(json));
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Post</button>
        <button onClick={() => setResourceType("user")}>User</button>
        <button onClick={() => setResourceType("comment")}>Comment</button>
      </div>
      <h2>{resourceType}</h2>
      {item.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  );
}
