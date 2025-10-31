import React, {useState} from "react";

function NewPlantForm({onAdd}) {
 const [form, setForm] = useState({name: "", image: "", price: ""});

 function handleChange(e) {
  setForm({...form, [e.target.name]: e.target.value});
 }

 function handleSubmit(e) {
  e.preventDefault();
  fetch("http://localhost:6001/plants", {
   method: "POST",
   headers: {"Content-Type": "application/json"},
   body: JSON.stringify({ ...form, price: parseFloat(form.price) }),
  })
   .then((r) => r.json())
   .then((newPlant) => {
    onAdd(newPlant);
    setForm({name: "", image: "", price: ""});
   });
 }
   
 return (
  <form onSubmit={handleSubmit} className="flex gap-2 justify-center mb-6">
    <input
     name="name"
     value={form.name}
     onChange={handleChange}
     placeholder="Name"
     className="border p-2 rounded"
     />
    <input
     name="image"
     value={form.image}
     onChange={handleChange}
     placeholder="Image URL"
     className="border p-2 rounded"
     />
    <input
     name="price"
     type="number"
     value={form.price}
      onChange={handleChange}
      placeholder="Price"
      className="border p-2 rounded"
      />
        <button className="bg-green-600 text-white px-3 rounded">
          Add
        </button>
    </form>
  );
}

export default NewPlantForm;
