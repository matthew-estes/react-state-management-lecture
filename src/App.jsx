import { useState } from "react";
import "./App.css";
import Example from "./components/Example";

/* dark mode */
// function App() {
//   const [mode, setMode] = useState("light");

//   function handleMode(modeValue) {
//     setMode(modeValue);
//   }

//   return (
//     <>
//       <button onClick={() => handleMode('dark')}>Dark Mode</button>
//       <button onClick={() => handleMode('light')}>Light Mode</button>
//       <div className={mode}>
//         <h1>Hello World</h1>
//       </div>
//     </>
//   );
// }

// export default App;


function App() {
  const [mode, setMode] = useState("neon");

  function handleMode(modeValue) {
    setMode(modeValue);
  }

  return (
    <>
      <button onClick={() => handleMode('dark')}>Dark Mode</button>
      <button onClick={() => handleMode('light')}>Light Mode</button>
      <button onClick={() => handleMode('neon')}>Neon Mode</button>
      <button onClick={() => handleMode('night')}>Night Mode</button>
      <div className={mode}>
        <h1>Hello World</h1>
      </div>
      <Example/>
    </>
  );
}

export default App;