import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import db from "../../../db.json";

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: ${db.theme.borderRadius};
  background-color: ${db.theme.colors.mainBg};
  color: #ccc;
  font-weight: 600;
  font-size: 0.9rem;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  height: 3rem;
  margin-top: 1rem;
  border-radius: ${db.theme.borderRadius};
  background-color: ${db.theme.colors.secondary};
  font-size: 0.9rem;
  font-weight: 700;
`;

const Form = () => {
  const router = useRouter();
  const [name, setName] = React.useState("");

  function formSubmit(event) {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  }

  function handleInput({ target }) {
    setName(target.value);
  }
  return (
    <FormStyle onSubmit={formSubmit}>
      <Input onChange={handleInput} type="text" placeholder="Nome do Jogador" />
      <Button type="submit" disabled={name.length === 0}>
        Jogar {name}
      </Button>
    </FormStyle>
  );
};

export default Form;
