import {useState} from "react";
import styled from "styled-components";

const TextArea = (props) => {
  const {name, on_change, value, default_value, required, place_holder, rows, cols} = props;

  const [focus, setFocus] = useState(false);

  const textarea_props = {
    name,
    rows,
    cols,
    value,
    defaultValue: default_value,
    placeholder: place_holder,
    required,
    focus,
  };

  return (
    <DetaultTextArea
      onFocus={() => {
        setFocus(true);
      }}
      onBlur={() => {
        setFocus(false);
      }}
      {...textarea_props}
      onChange={on_change}
    />
  );
};

export default TextArea;

const DetaultTextArea = styled.textarea`
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 10px;
  transition: 300ms;

  ${({focus, theme}) => (focus ? `border-color: ${theme.colors.primary}` : ``)}
`;
