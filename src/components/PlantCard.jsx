export default function PlantCard({ plants }) {

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition hover:scale-105 flex flex-col">
      <img
        className="w-full h-48 object-cover"
        src={plants.image}
        alt={plants.name}

      />
      <div className="p-4 flex flex-col gap-2 flex-grow">
        <h2 className="text-xl font-semibold"> {plants.name} </h2>
        <p className="text-sm text-gray-600"> {plants.description} </p>
        <div className="mt-auto flex flex-col gap-2">
          <p className="text-green-600 font-bold text-lg"> ${plants.price} </p>
          <button className="mt-auto py-2 px-4 rounded bg-emerald-600 hover:bg-emerald-700 text-white transition">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}