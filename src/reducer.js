const initialState = {
  data: "",
  error: null,
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        error: true,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
