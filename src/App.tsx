import Login from "./scenes/Login";
import Home from "./scenes/Home"
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />}></Route>
      <Route path="/*" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
