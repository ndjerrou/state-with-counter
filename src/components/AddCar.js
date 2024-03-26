import { useState } from 'react';

const AddCar = () => {
  const [model, setModel] = useState('');
  const [motorisation, setMotorisation] = useState('');
  const [miles, setMiles] = useState(0);

  const handleModelCar = e => {
    setModel(e.target.value);
  };

  const handleMotorisation = e => {
    setMotorisation(e.target.value);
  };

  const handleMiles = e => {
    setMiles(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(model);
    console.log(motorisation);
    console.log(miles);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Modèle :</label>
        <input value={model} onChange={handleModelCar} />
      </div>
      <div>
        <label>Motorisation : </label>
        <select value={motorisation} onChange={handleMotorisation}>
          <option>--Choisissez une motorisation--</option>
          <option value='Diesel'>Diesel</option>
          <option value='Essence'>Essence</option>
        </select>
      </div>
      <div>
        <label>KM : </label>
        <input type='number' value={miles} onChange={handleMiles} />
      </div>
      <button>Ajouter ma voiture</button>
    </form>
  );
};

export default AddCar;
