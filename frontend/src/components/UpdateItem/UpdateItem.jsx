import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BaseMainContainer,
  InputContainer,
  Title,
  Input,
  TextArea,
  Button,
} from "../CreateItem/CreateItem.styled";
import { Loader } from "../ReadItem/ReadItem.style";
import loaderIMG from "../../images/loader.png";

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
    if (name && descript && quantity) {
      setLoading(true);
      return updateData();
    }
    alert("Please, fill in all the fields.");
  };

  return (
    <BaseMainContainer>
      {loading ? (
        <Loader src={loaderIMG} alt="loader" />
      ) : (
        <InputContainer>
          <Title>Update box</Title>
          <Input type="text" onChange={handleNameChange} value={name} />
          <TextArea
            type="text"
            onChange={handleDesChange}
            value={descript}
            rows="5"
          />
          <Input
            type="number"
            onChange={handleQuantityChange}
            value={quantity}
          />
          <Button type="submit" onClick={handleSubmit}>
            Update
          </Button>
        </InputContainer>
      )}
    </BaseMainContainer>
  );
};

export default UpdateItem;
