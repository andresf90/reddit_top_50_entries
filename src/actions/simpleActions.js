/**
 * This source code is the confidential, proprietary information of
 * Amazon/Ring, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Amazon/Ring.
 *
 * Amazon/Ring
 * All Rights Reserved.
 */

export const simpleAction = () => (dispatch) => {
    dispatch({
      type: "SIMPLE_ACTION",
      payload: "result_of_simple_action",
    });
  };
  
  export const setSelectedPost = (selectedPost) => (dispatch) => {
    dispatch({
      type: "SET_SELECTED_POST",
      payload: selectedPost,
    });
  };

  export const deleteListPost= (deletePost) => (dispatch) => {
    dispatch({
      type: "DELETE_LIST_POST",
      payload: deletePost,
    });
  };
  export const setFullPost= (fullPost) => (dispatch) => {
    dispatch({
      type: "SET_FULL_POST",
      payload: fullPost,
    });
  };
  export const setSideBarPost= (sideBarPost) => (dispatch) => {
    dispatch({
      type: "SIDE_BAR_POST",
      payload: sideBarPost,
    });
  };

  export const SetDismissPost= (dismissPost) => (dispatch) => {
    dispatch({
      type: "SET_DISMISS_POST",
      payload: dismissPost,
    });
  };

  export const SetReadPost= (setReadPost) => (dispatch) => {
    dispatch({
      type: "SET_READ_POST",
      payload: setReadPost,
    });
  };

  export const SetDismissedPost= (dismissedPost) => (dispatch) => {
    dispatch({
      type: "SET_DISMISSED_POST",
      payload: dismissedPost,
    });
  };
  