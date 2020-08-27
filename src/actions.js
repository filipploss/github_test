const searchStart = () => ({ type: "FETCH_START" });
const searchSuccess = (payload) => ({ type: "FETCH_SUCCESS", payload });

export { searchStart, searchSuccess };