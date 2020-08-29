const initialState = {
  companyName: "",
  data: "",
  currentPage: 1,
  postsPerPage: 5,
  error: null,
  errorMessage: "",
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        companyName: action.payload,
        error: null,
        errorMessage: "",
        loading: true,
      };
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
        errorMessage: action.payload,
        loading: false,
      };
    case "PAGE_CHANGE":
      return {
        ...state,
        currentPage: action.payload,
        error: null,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
