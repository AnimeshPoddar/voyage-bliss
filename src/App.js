import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Main } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
