import React, { useState } from "react";

// export default function ClassCounter() {
//     const [count, setCounter] = useState(0)
//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={() => setCounter(c => c + 1)}>+ Increase</button>
//     </div>
//   )
// }

// export default function ClassCounter() {
//     // const [state, setState] = useState({count: 4, theme: "blue"})
//     // const count = state.count
//     // const theme = state.theme
//     const [ count, setCount ] = useState(4)
//     const [ theme, setTheme ] = useState("blue")

//     function Increment () {
//       // setState(prevState => {
//       //   return {...prevState, count: prevState.count + 1}
//       // })
//       setCount(prevCount => prevCount + 1)
//     }

//     function Decrement() {
//       setTheme("red")
//     }

//   return (
//     <div>
//         <h1><span>{count}</span> {theme}</h1>

//         <button onClick={Increment} >+ Increment</button>
//         <button onClick={Decrement} >- decrease</button>
//     </div>
//   )
// }

export default function Person() {
  const [person, setPerson] = useState({
    name: "John",
    age: 40,
    email: "adex@gmail.com",
    color: "blue",
  });

  function handleName(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }
  function handleAge(e) {
    setPerson({
      ...person,
      age: e.target.value,
    });
  }
  function handleEmail(e) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }
  function handleColor(e) {
    setPerson({
      ...person,
      color: e.target.value,
    });
  }
  return <div>
    <lable>Name</lable>
    <input value={person.name} onChange={handleName} />
    <lable>Age</lable>
    <input value={person.age} onChange={handleAge} />
    <lable>Email</lable>
    <input value={person.email} onChange={handleEmail} />
    <lable>Color</lable>
    <input value={person.color} onChange={handleColor} />
    <p>
      {person.name} 
       {person.age} {person.email} 
       {person.color}
    </p>
  </div>;
}
