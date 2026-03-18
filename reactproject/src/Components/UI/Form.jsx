import React, { useState } from "react";
import styles from './form.module.css';

const Form = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["form-container"]}>
      <h3>Name:</h3> {""}
      <input type="text" name="name" onChange={handleChange} />
      <h3>Email:</h3> {""}
      <input type="email" name="email" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
