import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import "./styles/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/users" element={<List />} />
          <Route path="/user/:userId" element={<Single />} />
          <Route
            path="/user/new"
            element={<New inputs={userInputs} title="Add New User" />}
          />
          <Route exact path="/products" element={<List />} />
          <Route path="/product/:productId" element={<Single />} />
          <Route
            path="/product/new"
            element={<New inputs={productInputs} title="Add New Product" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
