import { BrowserRouter } from "react-router-dom";
import RotaLoading from "./components/RotaLoading/RotaLoading";
import "./global.scss";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <RotaLoading />
      </BrowserRouter>
    </>
  );
}
