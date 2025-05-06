import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Registro from "./pages/registro/Registro";
import Loading from "./components/Loading/Loading";
import "./global.scss";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Registro" element={<Registro />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
