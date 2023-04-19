import { Routes, Route, Navigate } from "react-router-dom";
import { Container, Homepages, Services } from "./components";
// import { Router } from "react-router-dom";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <header className="bg-dark txt-cntr pd-md">Practice TodoList</header>

      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path="/todo" element={<Container />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>

      <footer className="bg-dark txt-cntr">Footer</footer>
    </>
  );
}

export default App;
