import { useState } from "react";
import Home from "./Home";
// import About from "./About";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // const [nextPage, setNextPage] = useState(false);
  return (
    <div className="App">
      {/* {nextPage ? <About /> : <Home />} */}
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
      <Home />
      <a href="">
        <button>Next page</button>
      </a>
    </div>
  );
}

export default App;
