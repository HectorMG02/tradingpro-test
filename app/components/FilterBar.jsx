export default function FilterBar() {
  return (
    <div className="p-5">
      <select className="border border-gray-300 rounded p-2">
        <option value="">Todos los Géneros</option>
        <option value="fantasia">Fantasía</option>
        <option value="ciencia-ficcion">Ciencia Ficción</option>
        <option value="misterio">Misterio</option>
        {/* Añade más géneros aquí */}
      </select>
    </div>
  );
}
