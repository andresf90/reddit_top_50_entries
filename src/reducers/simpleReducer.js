const initialState = {
    result: "",
    selectedPost: "",
    deletePost: "",
    fullPost: [],
    sideBarPosts: [],
    dismissPost: "",
    setReadPost: [],
    dismissedPost: [],
  };


  
  export default (state = initialState, action = {}) => {
    switch (action.type) {
      case "SIMPLE_ACTION":
        return {
          result: action.payload,
        };
      case "SET_SELECTED_POST":
          return {
          selectedPost: action.payload,
        };
      case "SET_FULL_POST":
          return {
          ...state,
          fullPost: action.fullPost,
        };
      case "SIDE_BAR_POST":
          return {
          ...state,
          sideBarPosts: action.sideBarPosts,
        };
        case "SET_DISMISS_POST":
          
          return {
            ...state,
            sideBarPosts: [state.sideBarPosts.splice(action.dismissPost,1)],
          };
          case "SET_READ_POST":            
            return {
              ...state,
              setReadPost: [...state.setReadPost, action.setReadPost],
            };
            case "SET_DISMISSED_POST":            
            return {
              ...state,
              dismissedPost: [...state.dismissedPost, action.dismissedPost],
            };
      default:
        return state;
    }
  };