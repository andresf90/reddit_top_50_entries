/**
 * This source code is the confidential, proprietary information of
 * Amazon/Ring, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Amazon/Ring.
 *
 * Amazon/Ring
 * All Rights Reserved.
 */

import React from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import Post from './Post'

// Redux
import { deleteListPost } from "../actions/simpleActions";



const Posts = ({ posts, setFullPost }) => {

  setFullPost(posts);
  return(
  <ul>
    { posts.map((post) => <Post post={post.data} id={post.data.id} onClickDeletePost={deleteListPost} key={`item-${post.data.id}`} />) }
  </ul>
  )

  }

const mapDispatchToProps = (dispatch) => ({
  setFullPost: (fullPost) => dispatch(setFullPost(fullPost))
});


Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.array).isRequired,
  setFullPost: PropTypes.func.isRequired
}


export default connect(mapDispatchToProps, null)(Posts);
