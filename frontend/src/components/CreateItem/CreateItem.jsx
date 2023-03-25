import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateItem = () => {
  const [name, setName] = useState("");
  const [descript, setDescript] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const pushData = async () => {
    return fetch("http://localhost:8080/create", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, descript, quantity }),
    }).then((res) => {
      if (res.ok) {
        setLoading(false);
        navigate("/");
      } else {
        throw new Error("Wrong credentials");
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name || descript || quantity) {
      setLoading(true);
      return pushData();
    } else {
      alert("Please, fill in all the fields.");
    }
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

  return (
    <div>
      <input type="text" onChange={handleNameChange} placeholder="Item name" />
      <input
        type="text"
        onChange={handleDesChange}
        placeholder="Item decription"
      />
      <input
        type="number"
        onChange={handleQuantityChange}
        placeholder="Quantity"
      />
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default CreateItem;
