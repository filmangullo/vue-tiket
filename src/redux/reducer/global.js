const initGlobalState = {
  isError: false,
  message: 'Error',
};

export const globalReducer = (state = initGlobalState, action) => {
  if (action.type === 'SET_ERROR') {
    return {
      ...state, //copy old state (copy state lama yg masih kosong / berisi)
      isError: action.value.isError,
      message: action.value.message,
    };
  }

  return state;
};
