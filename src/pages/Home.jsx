import { Link } from "react-router-dom";

const modulos = [
  { to: "/mesero", nombre: "Mesero", icono: "🧑‍🍳", desc: "Tablet · comandas con modificadores" },
  { to: "/cajero", nombre: "Cajero", icono: "💵", desc: "Escritorio · cobro fraccionado y cambio" },
  { to: "/repartidor", nombre: "Repartidor", icono: "🛵", desc: "Móvil · rutas y confirmación de entregas" },
  { to: "/supervisor", nombre: "Supervisor", icono: "🔐", desc: "Escritorio/Tablet · autorización con PIN" },
  { to: "/gerente", nombre: "Gerente", icono: "📊", desc: "Escritorio · dashboard y alertas" },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-1 text-2xl font-bold">Selecciona tu módulo</h1>
      <p className="mb-6 text-slate-600 dark:text-slate-400">
        Prototipo sin backend. Los datos son simulados.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {modulos.map((m) => (
          <Link
            key={m.to}
            to={m.to}
            className="flex min-h-12 items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 hover:border-amber-500 dark:border-slate-700 dark:bg-slate-800"
          >
            <span className="text-3xl">{m.icono}</span>
            <span>
              <span className="block font-semibold">{m.nombre}</span>
              <span className="block text-sm text-slate-600 dark:text-slate-400">{m.desc}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
