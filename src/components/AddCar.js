import { useState } from 'react';

const AddCar = () => {
  const [formData, setFormData] = useState({
    model: '',
    motorisation: '',
    miles: 0,
    isNew: false,
  });

  console.log(formData);

  const handleChange = e => {
    const { name } = e.target;

    console.log(e.target.value);

    setFormData(prevState => ({
      ...prevState,
      [name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(formData);

    if (formData.isNew) console.log('la voiture est neuve');
    else console.log('voiture occasion');
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
        <input
          name='isNew'
          type='checkbox'
          checked={formData.isNew}
          onChange={handleChange}
        />
      </div>
      <button>Ajouter ma voiture</button>
    </form>
  );
};

export default AddCar;
