/**
 * This source code is the confidential, proprietary information of
 * Amazon/Ring, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Amazon/Ring.
 *
 * Amazon/Ring
 * All Rights Reserved.
 */

  /**
 * @file App.js
 * @author Andres Felipe Albarracin Arroyave
 * @description simpleReducers.js  
 */

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