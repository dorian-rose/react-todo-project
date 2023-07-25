import { UserProvider } from "./context/UserProvider";
import { AppRouter } from "./routes/AppRouter";
import { NavBar } from "./todo/components/NavBar";

function App() {
  return (
    <>
      <header className="bg-dark txt-cntr pd-md">Practice TodoList</header>
      <UserProvider>
        <NavBar />

        <main>
          <AppRouter />
          {/* <Routes> */}
          {/* <Route path="/" element={<StartPage />} /> */}
          {/* <Route path="/login" element={<LoginPage />} /> */}
          {/* <Route path="/register" element={<RegisterPage />} /> */}
          {/* <Route path="/home" element={<HomePage />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/services" element={<Services />} /> */}
          {/* </Routes> */}
        </main>
      </UserProvider>
      <footer className="bg-dark txt-cntr">Footer</footer>
    </>
  );
}

export default App;
