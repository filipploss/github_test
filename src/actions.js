const searchStart = (payload) => ({ type: "FETCH_START", payload });
const searchSuccess = (payload) => ({ type: "FETCH_SUCCESS", payload });
const pageChange = (payload) => ({ type: "PAGE_CHANGE", payload });

export { searchStart, searchSuccess, pageChange };
