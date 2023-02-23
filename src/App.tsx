import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { Home, Login, Movies, SignUp, Users } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/movies" element={<Movies />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
