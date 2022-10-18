import styled from "styled-components";

export const LAYOUT_THEMPLATE_CUSTOM = "custom";
export const LAYOUT_THEMPLATE_CENTER = "center";

const Layout = (props) => {
  const {
    children,
    style,
    on_submit,
    on_click,
    template = LAYOUT_THEMPLATE_CUSTOM,
    tag,
    align,
    justify,
    direction = "row",
    gap = 10,
  } = props;

  const layout_props = {template, align, justify, direction, gap, style};

  return (
    <LayoutContainer as={tag} onSubmit={on_submit} onClick={on_click} {...layout_props}>
      {children}
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div`
  ${({template, theme, align, justify, direction}) => {
    switch (template) {
      case LAYOUT_THEMPLATE_CENTER:
        return theme.mixins.flexBox(direction, "center", "center");
      default:
        return theme.mixins.flexBox(direction, justify, align);
    }
  }}

  ${({theme, align, justify, direction}) => theme.mixins.flexBox(direction, justify, align)}

  gap: ${({gap}) => `${gap}px`};
`;
