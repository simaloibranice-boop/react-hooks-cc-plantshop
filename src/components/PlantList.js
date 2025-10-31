import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onToggle, onDelete, onUpdate}) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {plants.map((p) => (
        <PlantCard
          key={p.id}
          plant={p}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
   
  );
}

export default PlantList;
