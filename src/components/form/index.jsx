import { useState } from "react";
import "./form.css";
import Button from "../button";
import { emailPersonal } from "../../constants/personalConfig";

const Form = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const handleSubmit = (e) => {
    window.open(
      `mailto:${emailPersonal}?subject=${data.fullName}&body=${
        data.message + ". Telefono: " + data.phoneNumber
      }`
    );
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="form-container" id="form">
      <h2 className="form-title">
        {" "}
        Llená este formulario y te contactaremos a la brevedad{" "}
      </h2>
      <form className="form">
        <input
          onChange={handleChange}
          name="fullName"
          className="input"
          type="text"
          placeholder="Nombre Y Apellido"
        />
        <input
          onChange={handleChange}
          name="email"
          className="input"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          name="phoneNumber"
          className="input"
          type="number"
          placeholder="N° de Teléfono"
        />
        <textarea
          onChange={handleChange}
          className="input"
          placeholder="Mensaje"
          cols="30"
          rows="5"
          name="message"
        ></textarea>
        <Button onClick={handleSubmit} text="Solicitar Ahora" type="submit" />
      </form>
    </div>
  );
};

export default Form;
