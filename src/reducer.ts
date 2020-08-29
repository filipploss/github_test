import { AnyAction } from "redux";

interface IAppState {
  companyName: string;
  data: string;
  currentPage: number;
  postsPerPage: number;
  error: null | boolean;
  errorMessage: string;
  loading: boolean;
}

const initialState: IAppState = {
  companyName: "",
  data: "",
  currentPage: 1,
  postsPerPage: 5,
  error: null,
  errorMessage: "",
  loading: false,
};

const reducer = (state = initialState, action: AnyAction) => {
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
