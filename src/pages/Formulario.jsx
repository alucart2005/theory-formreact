import styled from "styled-components";
import { Btnoperaciones } from "../components/Btnoperaciones";
import {FcPicture} from "react-icons/fc"

export function Formulario() {
  return (
    <Container>
      <div className="sub-contenedor">
        <div className="header">
          <h1> 🔑 Registration</h1>
        </div>
        <form className="entradas">
          <ContainerInputs>
            <div className="subcontainer">
              <h4>Description:</h4>
              <Inputs placeholder="Enter a description" type="text"/>
            </div>
          </ContainerInputs>
          <ContainerInputs>
            <div className="subcontainer">
              <h4>Price:</h4>
              <Inputs placeholder="Enter the price" type="number" step="0.01"/>
            </div>
          </ContainerInputs>
          <div className="footercontent">
            <Btnoperaciones titulo="enviar" icono={<FcPicture />} />
          </div>
        </form>
      </div>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .sub-contenedor {
    width: 100%;
    background-color: #e7ebf0;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 0px 20px;
    .header {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
    }
    .pictureContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      flex-direction: column;
      img {
        width: 100px;
        object-fit: cover;
      }
      input {
        display: none;
      }
    }
    .entradas {
      .footercontent {
        display: flex;
        align-items: center;
        height: 100%;
        gap: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
        justify-content: center;
      }
    }
  }
`;
const ContainerInputs = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  .subcontainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
const Inputs = styled.input`
  border: 2px solid #e8e8e8;
  padding: 15px;
  border-radius: 10px;
  background-color: #212121;
  font-size: small;
  font-weight: bold;
  text-align: center;
  color: white;
  text-align: start;
  width: 70%;
  &:focus {
    outline-color: white;
    background-color: #212121;
    color: #e8e8e8;
    box-shadow: 5px 5px #888888;
  }
`;
