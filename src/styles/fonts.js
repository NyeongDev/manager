const fonts = {
  size20: (weight = 500) => `
    font-size: 20px;
    font-weight: ${weight};
    line-height: 31px;
  `,
  size16: (weight) => `
    font-size: 16px;
    font-weight: ${weight};
    line-height: 26px;
  `,
  size14: (weight) => `
    font-size: 14px;
    font-weight: ${weight};
    line-height: 22px;
  `,
};

export default fonts;
