import styled from "styled-components";
import { MainContainer } from "../ReadItem/ReadItem.style";

export const BaseMainContainer = styled(MainContainer)`
  height: 100vh;
`;
export const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  color: rgb(86, 3, 173);
  font-style: italic;
  font-family: "Alkatra", cursive;
`;
export const Input = styled.input`
  margin: 1rem;
  height: 2rem;
  width: 20%;
  border-radius: 0.5rem;
  border: solid 1px rgb(131, 103, 199);

  @media (max-width: 900px) {
    width: 100%;
  }
`;
export const TextArea = styled.textarea`
  margin: 1rem;
  width: 20%;
  border-radius: 0.5rem;
  border: solid 1px rgb(131, 103, 199);

  @media (max-width: 900px) {
    width: 100%;
  }
`;
export const Button = styled.button`
  width: 10rem;
  height: 2.5rem;
  border: none;
  border-radius: 1rem;
  background-color: rgb(86, 3, 173);
  color: white;
  font-size: large;

  &:hover {
    background-color: rgb(131, 103, 199);
  }
`;
