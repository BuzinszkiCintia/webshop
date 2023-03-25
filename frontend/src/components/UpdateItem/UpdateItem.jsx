import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateItem = (props) => {
  const itemValue = useLocation().state.item;
  const indexValue = useLocation().state.index;

  const [name, setName] = useState(itemValue.name);
  const [descript, setDescript] = useState(itemValue.descript);
  const [quantity, setQuantity] = useState(itemValue.quantity);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const updateData = async () => {
    return fetch("http://localhost:8080/update", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, descript, quantity, indexValue }),
    }).then((res) => {
      if (res.ok) {
        setLoading(false);
        navigate("/");
      } else {
        throw new Error("Wrong credentials");
      }
    });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDesChange = (e) => {
    setDescript(e.target.value);
  };
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name || descript || quantity) {
      setLoading(true);
      return updateData();
    } else {
      alert("Please, fill in all the fields.");
    }
  };

  return (
    <div>
      <h1>Update</h1>
      <input type="text" onChange={handleNameChange} value={name} />
      <input type="text" onChange={handleDesChange} value={descript} />
      <input type="number" onChange={handleQuantityChange} value={quantity} />
      <button type="submit" onClick={handleSubmit}>
        Update
      </button>
    </div>
  );
};

export default UpdateItem;
