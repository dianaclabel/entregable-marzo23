import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    color: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    lastname: false,
    color: false,
  });

  const [showCard, setShowCard] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  console.log(formData);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("hola");

    const upgradeErrors = {
      name: formData.name.trim().length <= 3,
      lastname: formData.lastname.trim().length <= 3,
      color: formData.color.trim().length <= 6,
    };

    console.log(upgradeErrors);

    if (Object.values(upgradeErrors).some((error) => error)) {
      setErrors(upgradeErrors);
      return;
    }

    setShowCard(true);
  };

  return !showCard ? (
    <div className="App">
      <h1>Elige un color</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" onChange={handleChange} />
          {errors.name && (
            <p>Por favor chequea que la información sea correcta</p>
          )}
        </div>
        <div>
          <label htmlFor="lastname">Apellido</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            onChange={handleChange}
          />
          {errors.lastname && (
            <p>Por favor chequea que la información sea correcta</p>
          )}
        </div>
        <div>
          <label htmlFor="color">
            Ingresa tu color favorito (En hexadecimal empezando con "#")
          </label>
          <input type="text" id="color" name="color" onChange={handleChange} />
          {errors.color && (
            <p>Por favor chequea que la información sea correcta</p>
          )}
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  ) : (
    <Card data={formData} />
  );
}

export default App;
