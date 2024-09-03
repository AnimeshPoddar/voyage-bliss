import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<>kakak</>} />
          <Route path="/about-us" exact element={<></>} />
          <Route path="/services" exact element={<></>} />
          <Route path="/contact-us" exact element={<></>} />
          <Route path="/sign-up" exact element={<></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
