import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AdminLogin from "./components/admin/AdminLogin";
import { Route, Routes, Link } from "react-router-dom";
import Adminhome from "./components/admin/Adminhome";
import AddEvent from "./components/admin/AddEvent";
import ShowEvents from "./components/ShowEvents";
import ShowCategories from "./components/ShowCategories";
import EventDetails from "./components/EventDetails";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full">
        <nav className="bg-blue-500 text-white">
          <Link to="/adminlogin">Admin Login</Link> |<Link to="/"> Events</Link>
        </nav>
        <div className="w-full flex flex-row flex-wrap gap-10">
          <Routes>
            <Route path="/" element={<ShowCategories></ShowCategories>}></Route>
            <Route path="/Addevent" element={<AddEvent></AddEvent>}></Route>
            <Route
              path="/adminlogin"
              element={<AdminLogin></AdminLogin>}
            ></Route>
            <Route
              path="/showevents"
              element={<ShowEvents></ShowEvents>}
            ></Route>
            <Route
              path="/showevents/:eventname"
              element={<ShowEvents></ShowEvents>}
            ></Route>
            <Route path="/adminhome" element={<Adminhome></Adminhome>}></Route>
            <Route
              path="/EventDetails/:eid"
              element={<EventDetails></EventDetails>}
            ></Route>
          </Routes>
        </div>
      </div>
    </>
  );
  
}

export default App;
