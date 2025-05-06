import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Registro from "../../pages/registro/Registro";
import Login from "../Login/Login";
import Loading from "../Loading/Loading";

export default function RotaLoading() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // durtação do carregamento
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Registro" element={<Registro />} />
        </Routes>
      )}
    </>
  );
}
