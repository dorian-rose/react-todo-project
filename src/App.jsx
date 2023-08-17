import { UserProvider } from "./context/UserProvider";
import { AppRouter } from "./routes/AppRouter";
import { FooterComp } from "./ui/FooterComp";

function App() {
  return (
    <>
      <header>Practice TodoList</header>
      <UserProvider>
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
      <FooterComp />
    </>
  );
}

export default App;
