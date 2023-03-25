import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BaseMainContainer,
  InputContainer,
  Title,
  Input,
  TextArea,
  Button,
} from "./CreateItem.styled";
import { Loader } from "../ReadItem/ReadItem.style";
import loaderIMG from "../../images/loader.png";

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
    if (name && descript && quantity) {
      setLoading(true);
      return pushData();
    }
    alert("Please, fill in all the fields.");
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
    <BaseMainContainer>
      {loading ? (
        <Loader src={loaderIMG} alt="loader" />
      ) : (
        <InputContainer>
          <Title>Create new box to save</Title>
          <Input
            type="text"
            onChange={handleNameChange}
            placeholder="Item name"
          />
          <TextArea
            type="text"
            onChange={handleDesChange}
            placeholder="Item decription"
            rows="5"
          />
          <Input
            type="number"
            onChange={handleQuantityChange}
            placeholder="Quantity"
          />
          <Button type="submit" onClick={handleSubmit}>
            Add
          </Button>
        </InputContainer>
      )}
    </BaseMainContainer>
  );
};

export default CreateItem;
