import styled from "styled-components";
import {useState} from "react";

const Input = (props) => {
  const {name, value, default_value, place_holder, on_change, required} = props;

  const [focus, setFocus] = useState(false);

  const input_props = {
    name,
    value,
    defaultValue: default_value,
    placeholder: place_holder,
    required,
    focus,
  };

  return (
    <DetaultInput
      onFocus={() => {
        setFocus(true);
      }}
      onBlur={() => {
        setFocus(false);
      }}
      {...input_props}
      onChange={on_change}
    />
  );
};

export default Input;

const DetaultInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 0 10px;
  transition: 300ms;

  ${({focus, theme}) => (focus ? `border-color: ${theme.colors.primary}` : ``)}
`;
