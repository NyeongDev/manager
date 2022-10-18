import styled from "styled-components";

const Button = (props) => {
  const {type, color, size, disabled, children, on_click, style} = props;

  const button_props = {
    color,
    size,
    style,
    disabled,
  };

  return (
    <ButtonContainer type={type} onClick={on_click} {...button_props}>
      {children}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button`
  ${({theme}) => theme.fonts.size14}

  border: none;
  border-radius: 3px;
  font-size: 17px;
  white-space: nowrap;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }

  ${({theme, color}) => {
    let fontColor = theme.colors.black;
    let backgroundColor = "transparent";

    switch (color) {
      case "primary":
      case "secondary":
        backgroundColor = theme.colors[color];
        fontColor = theme.colors.white;
        break;
      default:
    }

    return `background-color: ${backgroundColor}; color: ${fontColor};`;
  }}

  ${({size}) => {
    switch (size) {
      case "fill":
        return `width: 100%; height: 30px`;
      case "fit":
        return `width: fit-content; height: fit-content`;
      case "circle":
        return `width: 50px; height: 50px; border-radius: 25px; position: fixed; bottom: 50px; right: 50px;`;
      default:
    }
  }}
`;
