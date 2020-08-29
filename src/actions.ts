const searchStart = (payload: string) => ({ type: "FETCH_START", payload });
const searchSuccess = (payload: string) => ({ type: "FETCH_SUCCESS", payload });
const pageChange = (payload: number) => ({ type: "PAGE_CHANGE", payload });

export { searchStart, searchSuccess, pageChange };
