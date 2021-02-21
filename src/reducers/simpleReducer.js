const initialState = {
    result: "",
    selectedPost: "",
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "SIMPLE_ACTION":
        return {
          result: action.payload,
        };
      case "SET_SELECTED_POST":
        return {
          selectedPost: action.payload,
        };
      default:
        return state;
    }
  };