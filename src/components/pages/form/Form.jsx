import { useState } from "react";

export const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    lastName: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
        userName: userData.name,
        userLastName: userData.lastName
    }
    console.log(data)
  };

  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value})
  };

  return (
    <div>
      <h2>Este es el form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingresa tu apellido"
          name="lastName"
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
