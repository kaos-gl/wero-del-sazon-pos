import { Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout.jsx";
import Home from "./pages/Home.jsx";
import Mesero from "./pages/mesero/Mesero.jsx";
import Cajero from "./pages/cajero/Cajero.jsx";
import Repartidor from "./pages/repartidor/Repartidor.jsx";
import Supervisor from "./pages/supervisor/Supervisor.jsx";
import Gerente from "./pages/gerente/Gerente.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/mesero" element={<Mesero />} />
        <Route path="/cajero" element={<Cajero />} />
        <Route path="/repartidor" element={<Repartidor />} />
        <Route path="/supervisor" element={<Supervisor />} />
        <Route path="/gerente" element={<Gerente />} />
      </Route>
    </Routes>
  );
}
