import styled from "styled-components";

const Text = (props) => {
  const {tag, size = 16, weight = 500, color = "black", ellipsis, children} = props;

  const textProps = {
    size,
    weight,
    color,
    ellipsis,
  };

  return (
    <Typography as={tag} {...textProps}>
      {children}
    </Typography>
  );
};

export default Text;

const Typography = styled.p`
  ${({size, weight, theme}) => theme.fonts[`size${size}`](weight)};

  width: 100%;
  word-break: break-word;
  white-space: pre-line;
  
  color: ${({color, theme}) => theme.colors[color]};

  ${({ellipsis}) => {
    switch (ellipsis) {
      case "multiple":
        return `
          overflow: hidden;
          text-overflow: ellipsis;
          
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        `;
      case "single":
        return `
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        `;
      default:
    }
  }};
`;
