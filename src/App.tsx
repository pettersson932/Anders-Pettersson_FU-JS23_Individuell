import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import Status from "./pages/Status";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/status" element={<Status />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
