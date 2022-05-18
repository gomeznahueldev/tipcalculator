import React from "react";

const Input = ({ label, name, type, value, onChange, placeholder, id }) => {
  return <input type={type} value={value} onChange={onChange} placeholder={placeholder} label={label} name={name} id={id} />
};

export default Input;
