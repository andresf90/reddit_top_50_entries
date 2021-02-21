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
  
 