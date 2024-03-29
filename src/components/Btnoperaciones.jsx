import styled from "styled-components";
import PropTypes from "prop-types";

export function Btnoperaciones({ titulo, icono, funcion}) {
  return (
    <Btn onClick={funcion}>
      {icono}
      <span>{titulo}</span>
    </Btn>
  );
}
Btnoperaciones.propTypes = {   // Valida las props del componente usando PropTypes
  titulo: PropTypes.string.isRequired,
  icono: PropTypes.element.isRequired,
  funcion: PropTypes.func,
};
const Btn = styled.button`
  display: flex;
  align-items: center;
  font-family: inherit;
  font-weight: 600;
  font-size: 17px;
  padding: 0.8em 1.3em 0.8em 0.9em;
  color: black;
  background-color: #fbfefc;
  border: none;
  letter-spacing: 0.05em;
  border-radius: 16px;
  cursor: pointer;
  svg {
    margin-right: 3px;
    transform: rotate(30deg);
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  }
  span {
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  }
  &:hover {
    color: #262524;
    svg {
      transform: translateX(5px) rotate(90deg);
    }
    span {
      transform: translateX(7px);
    }
  }
`;
