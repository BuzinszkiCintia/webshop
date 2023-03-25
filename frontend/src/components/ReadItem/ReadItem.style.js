import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "../../images/box.jpg";

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: "Alkatra", cursive;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    margin: 1rem;
    text-align: center;
  }
`;
export const GridConatiner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
export const GridCard = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 1.5rem;
  box-shadow: 0.5rem 0.5rem rgba(37, 36, 34, 0.2);
  background-image: url(${background});
  background-size: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    box-shadow: none;
  }
`;
export const BoxName = styled.h2`
  color: white;
  text-shadow: 0.1rem 0.1rem black;
`;

export const BoxDescript = styled.h3`
  color: white;
  width: 100%;
  height: 8rem;
  padding: 1rem;
  background-color: rgba(37, 36, 34, 0.3);
`;
export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(37, 36, 34, 0.7);
`;
export const ModifyLink = styled(Link)`
  .material-symbols-outlined {
    color: black;
    background-color: white;
    border-radius: 0.2rem;
    font-size: 30px;
    &:hover {
      background-color: rgb(86, 3, 173);
    }
  }
`;

export const BoxQuantity = styled.h4`
  color: white;
`;
export const DeleteButton = styled.button`
  border-radius: 0.2rem;
  .material-symbols-outlined {
    color: black;
    font-size: 23px;
  }
  &:hover {
    background-color: red;
  }
`;
export const Loader = styled.img`
  position: relative;
  height: 100px;
  width: 100px;

  animation: spin 1s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
