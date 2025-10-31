import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";
import PlantList from "./PlantList";

function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []);

  function addPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }
  function toggleSold(id) {
    setPlants(plants.map(p => p.id === id ? {...p, sold: !p.sold} : p));
  }

function updatePrice(id, price) {
  fetch(`http://localhost:6001/plants/${id}`, {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({price: parseFloat(price)}),
  })
    .then((r) => r.json())
    .then((updatedPlant) => {
      setPlants(plants.map(p => p.id === id ? updatedPlant : p));
    });
}

function deletePlant(id) {
  fetch(`http://localhost:6001/plants/${id}`, {
    method: "DELETE",
  })
    .then(() => {
      setPlants(plants.filter(p => p.id !== id));
    });
  }
  const filteredPlants = plants.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">
        Plantsy Admin
      </h1>
      <Search search={search} setSearch={setSearch} />
      <NewPlantForm onAdd={addPlant} />
      <PlantList
       plants={filteredPlants}
       onToggle={toggleSold}
       onDelete={deletePlant}
       onUpdate={updatePrice}
       />
      
    </div>
  );

}

export default App;
