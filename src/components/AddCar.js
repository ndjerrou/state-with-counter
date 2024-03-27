import { useState, useRef } from 'react';

const AddCar = () => {
  const modelRef = useRef({});

  const [formData, setFormData] = useState({
    model: '',
    motorisation: '',
    miles: 0,
    isNew: false,
  });

  //   const [disabled, setDisabled] = useState(true);

  const { model, motorisation, miles } = formData;

  // don't update state inside a if statement !!

  //   if (model.length >= 4 && miles > 0 && motorisation) {
  //     setDisabled(false);
  //   }

  const disabled =
    model.length >= 4 && miles > 0 && motorisation ? false : true;

  const handleChange = e => {
    // get the value of model input
    console.log(modelRef.current.value);
    const { name } = e.target;

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
        <input
          ref={modelRef}
          name='model'
          value={formData.model}
          onChange={handleChange}
        />
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
      {/* @TODO : enable the button if we have some values inside the formula : 
        model ==> min 4 characters length
        motorisation ==> pick one motorisation (a real one !)
        km > 0
      */}
      <button disabled={disabled}>Ajouter ma voiture</button>
    </form>
  );
};

export default AddCar;
