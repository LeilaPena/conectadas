import { useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useMe } from "./hooks";
import { Home, Login, Movies, SignUp, Users } from "./pages";
function App() {

  const { loginWithToken } = useMe()

  useEffect(() => {
    loginWithToken();
  }, []);

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
