import { Export } from "phosphor-react";
import styled from "styled-components";

export const Context = styled.div`
  width: 100%;
  min-height: 92vh;
  overflow-y: none;
  padding: 1rem;
`;

export const CustomForm = styled.form`
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1rem;
  letter-spacing: 0.5px;
  position: relative;
  text-transform: uppercase;
  padding: 40px 10px;
  border-bottom: 2px solid #fff;
`;

export const CustomDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-bottom: 30px;

  div {
    position: relative;
    .inputName,
    .inputEmail,
    .inputDescricao {
      width: 100%;
      padding: 16px 12px;
      border-bottom: 2px solid #fff;
      transition: all 0.5s ease;
      position: relative;
      background-color: transparent;
      color: #fff;
    }
    .nameLabel,
    .emailLabel,
    .descricaoLabel {
      position: absolute;
      font-weight: bold;
      top: 7px;
      left: 12px;
      transition: all 0.2s ease;
      color: white;
      font-size: 16px;
    }

    .inputName:focus,
    .inputEmail:focus,
    .inputDescricao:focus {
      outline: none;
    }
    .inputName:focus + .nameLabel,
    .inputName:valid + .nameLabel,
    .inputEmail:focus + .emailLabel,
    .inputEmail:valid + .emailLabel,
    .inputDescricao:focus + .descricaoLabel,
    .inputDescricao:valid + .descricaoLabel {
      font-size: 18px;
      top: -25px;
      left: 0px;
    }
    .inputDescricao {
      height: 10rem;
    }
  }
`;

export const CustomButton = styled.button`
  cursor: pointer;
  padding: 10px 70px;
  font-size: 1rem;
  background: transparent;
  color: whitesmoke;
  border: 1.5px solid whitesmoke;
  border-radius: 5px;
  font-weight: bold;

  &:hover {
    color: #000;
    background: whitesmoke;
  }
`;
