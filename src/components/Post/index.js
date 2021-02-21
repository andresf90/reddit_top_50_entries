/**
 * This source code is the confidential, proprietary information of
 * Amazon/Ring, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Amazon/Ring.
 *
 * Amazon/Ring
 * All Rights Reserved.
 */

import { connect } from "react-redux";

// Redux
import { setSelectedPost } from "../../actions/simpleActions";

// View
import Post from './view';

const mapDispatchToProps = (dispatch) => ({
  setSelectedPost: (selectedPost) => dispatch(setSelectedPost(selectedPost)) 
});

export default connect(null, mapDispatchToProps)(Post);
