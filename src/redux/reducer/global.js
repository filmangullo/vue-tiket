const initGlobalState = {
  isError: false,
  message: 'Error',
  isLoading: false,
};

export const globalReducer = (state = initGlobalState, action) => {
  if (action.type === 'SET_ERROR') {
    return {
      ...state, //copy old state (copy state lama yg masih kosong / berisi)
      isError: action.value.isError,
      message: action.value.message,
    };
  }

  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      isLoading: action.value,
    };
  }

  return state;
};
