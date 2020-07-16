export const languageReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ENGLISH':
      return (state = payload);

    case 'SLOVAK':
      return (state = payload);

    case 'SPANISH':
      return (state = payload);

    default:
      return state;
  }
};
