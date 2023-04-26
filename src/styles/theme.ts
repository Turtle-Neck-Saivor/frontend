export const theme = {
  flexBox: (direction = 'row', align = 'center', justify = 'center') => `
      display: flex;
      flex-direction: ${direction};
      align-items: ${align};
      justify-content: ${justify};
    `,
};
