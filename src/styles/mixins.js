const mixins = {
  flexBox: (direction, justify, align) => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,
};

export default mixins;
