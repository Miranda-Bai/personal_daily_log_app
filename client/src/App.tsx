import Login from "./scenes/Login";
import Home from "./scenes/Home";
import { Route, Routes, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { UserType } from "src/shared/types";

function App() {
  const [user, setUser] = useState<UserType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("login");
    }
  }, [user, navigate]);

  return (
    <Routes>
      <Route path="login" element={<Login setUser={setUser} />}></Route>
      <Route path="/" element={<Home user={user} />}></Route>
    </Routes>
  );
}

export default App;
