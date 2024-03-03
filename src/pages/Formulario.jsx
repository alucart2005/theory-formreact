import styled from "styled-components";
import { Btnoperaciones } from "../components/Btnoperaciones";
import { FcPicture } from "react-icons/fc";
import { useForm } from "react-hook-form";
import sweetalert from "sweetalert";
import { ValidarOtaku } from "../utils/validarOtaku";

export function Formulario() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm({
    defaultValues:{
      description: "psg",
      email: "psg@psg.com"
    }
  }); //destructucion de useForm()
  function insert(data) {
    sweetalert("Welcome new user", data.description);
    reset();
  }
  return (
    <Container>
      <div className="sub-contenedor">
        <div className="header">
          <h1> 🔑 registering to {watch("description")}</h1>
        </div>
        <form className="entradas" onSubmit={handleSubmit(insert)}>
          <ContainerInputs>
            <div className="subcontainer">
              <h4>Description:</h4>
              <Inputs
                placeholder="Enter a description"
                type="text"
                {...register("description", {
                  required: true,
                  minLength: 2,
                  maxLength: 20,
                })}
              />
              {errors.description?.type === "required" && (
                <p>😵Input a description</p>
              )}
              {errors.description?.type === "minLength" && (
                <p>😵Enter minimum 2 chararacers</p>
              )}
              {errors.description?.type === "maxLength" && (
                <p>😵Enter maximum 20 chararacers</p>
              )}
            </div>
          </ContainerInputs>
          <ContainerInputs>
            <div className="subcontainer">
              <h4>Price:</h4>
              <Inputs
                placeholder="Enter the price"
                type="number"
                step="0.01"
                {...register("price", {
                  required: true,
                  valueAsNumber: true,
                })}
              />
              {errors.price?.type === "required" && <p>😰Input price</p>}
            </div>
          </ContainerInputs>
          <ContainerInputs>
            <div className="subcontainer">
              <h4>Email:</h4>
              <Inputs
                placeholder="Enter @email"
                type="text"
                {...register("email", {
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                  required: true,
                })}
              />
                {
                  errors.email?.type==="pattern" &&  <p>Enter a valid email</p>
                }
                {
                  errors.email?.type==="required" && <p>email is required</p>
                }
            </div>
          </ContainerInputs>
          <ContainerInputs>
            <div className="subcontainer">
              <h4>Age:</h4>
              <Inputs
                placeholder="Valid Age"
                type="text"
                {...register("napoleon",{required:true,validate:ValidarOtaku})}
              />
              {
                errors.napoleon && <p>Invalid age !!!</p> 
              }
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
//#region STYLED COMPONENTS
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

//#endregion
