import React from "react";

function PlantCard({ plant, onToggle, onDelete, onUpdate }) {
  return (
    <div className="border p-3 rounded shadow">
      <img
       src={plant.image}
       alt={plant.name}
       className="w-full h-40 object-cover rounded"
       />
       <h3 className="font-semibold mt-2">{plant.name}</h3>
       <p>${plant.price}</p>

       <input
        type="number"
        placeholder="New price"
        className="border p-1 rounded w-20 text-center"
        onBlur={(e) => onUpdate(plant.id, e.target.value)}
        />
        <button
        onClick={() => onToggle(plant.id)}
        className={`block w-full my-2 py-1 rounded text-white ${plant.sold ? "bg-red-500" : "bg-green-500"}`}
        >
          {plant.sold ? "Sold Out" : "In Stock"}
        </button>

        <button
        onClick={() => onDelete(plant.id)}
        className="bg-gray-700 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
        </div>
  );
}

export default PlantCard;
