import React, { useEffect, useState } from "react";

// export const Title = ({ text }) => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setCount(0);
//     console.log("from useEffect" + "" + text, count);
//   }, [text, count]);

//   const onClick = () => {
//     setCount(count + 1);
//   };

//   console.log("count: " + count);
//   //   useEffect(() => {
//   //     window.title = "Hello World";
//   return (
//     <botton onClick={onClick}>
//       {text} : {count}
//     </botton>
//   );
// };

export const Title = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://google.com").then((res) => {
      setText(res.title);
      setLoading(false);
    });
  }, [setText, setLoading]);
  if (loading) return "loading...";
  return <h1>{text}</h1>;
};
