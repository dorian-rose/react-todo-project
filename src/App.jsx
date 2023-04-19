import { Container } from "./components/Container";

function App() {
  return (
    <>
      <header className="bg-dark txt-cntr pd-md">Practice TodoList</header>
      <main>
        <Container />
      </main>

      <footer className="bg-dark txt-cntr">Footer</footer>
    </>
  );
}

export default App;
