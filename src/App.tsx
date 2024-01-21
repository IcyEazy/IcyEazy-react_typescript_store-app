import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route
            path="/IcyEazy-react_typescript_store-app"
            element={<Home />}
          />
          <Route
            path="/IcyEazy-react_typescript_store-app/store"
            element={<Store />}
          />
          <Route
            path="/IcyEazy-react_typescript_store-app/about"
            element={<About />}
          />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
