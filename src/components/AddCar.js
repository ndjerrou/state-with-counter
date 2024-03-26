import { useState } from 'react';

const AddCar = () => {
  const [formData, setFormData] = useState({
    model: '',
    motorisation: '',
    miles: 0,
  });

  console.log(formData);

  const handleChange = e => {
    const { name } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(formData.model);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Modèle :</label>
        <input name='model' value={formData.model} onChange={handleChange} />
      </div>
      <div>
        <label>Motorisation : </label>
        <select
          name='motorisation'
          value={formData.motorisation}
          onChange={handleChange}
        >
          <option>--Choisissez une motorisation--</option>
          <option value='Diesel'>Diesel</option>
          <option value='Essence'>Essence</option>
        </select>
      </div>
      <div>
        <label>KM : </label>
        <input
          name='miles'
          type='number'
          value={formData.miles}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Etat neuf ?</label>
        <input type='checkbox' />
      </div>
      <button>Ajouter ma voiture</button>
    </form>
  );
};

export default AddCar;
