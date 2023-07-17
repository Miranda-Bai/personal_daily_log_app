import Login from "./scenes/Login";
import Home from "./scenes/Home";
import { Route, Routes, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { UserType } from "src/shared/types";
import { useLocation } from "react-router-dom";
import TopMenu from "./scenes/TopMenu";
import TableView from "./scenes/Home/TableView";

function App() {
  const [user, setUser] = useState<UserType | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user && location.pathname !== "/login") {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="w-full h-full">
      {location.pathname !== "/login" && <TopMenu />}
      <Routes location={location}>
        <Route path="/login" element={<Login setUser={setUser} />}></Route>
        <Route path="/" element={<Home user={user} />}></Route>
        <Route path="/tableview" element={<TableView />}></Route>
      </Routes>
    </div>
  );
}

export default App;
