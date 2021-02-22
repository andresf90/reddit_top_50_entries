
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
// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Post from '../Post'



const Posts = ({ posts }) => (
  <ul>
    { 
    posts.map((post, index) => (<Post post={post.data} index={index} />))
    }
  </ul>
)


  Posts.propTypes = {
     posts: PropTypes.arrayOf(PropTypes.array).isRequired,
    // setFullPost: PropTypes.func.isRequired
  }

  /* const mapStateToProps = (state) => ({
    fullPost: state.simpleReducer.fullPost
  }); */

  export default Posts;