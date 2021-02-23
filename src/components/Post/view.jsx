
/**
 * This source code is the confidential, proprietary information of
 * Amazon/Ring, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Amazon/Ring.
 *
 * Amazon/Ring
 * All Rights Reserved.
 */

import React from "react";
import PropTypes from 'prop-types';
import { ListGroup, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

/**
 * @file Post/view.jsx
 * @author Andres Felipe Albarracin Arroyave
 * @description view component Post
 */

const Post = ({ dispatch, post, index }) => {

  const updatePost = (data) => ({
    type: "SET_FULL_POST",
    fullPost: data,
  })

  const deleteIndex = (data) => ({
    type: "SET_DISMISS_POST",
    dismissPost: data,
  }) 

  const readPost = (data) => ({
    type: "SET_READ_POST",
    setReadPost: data,
  }) 

  const dismissedPost = (data) => ({
    type: "SET_DISMISSED_POST",
    dismissedPost: data,
  }) 

  const setSelectedPostAction = () => { 
    dispatch(updatePost(post));  
    dispatch(readPost(post.id));
  };

  const convertDate = (utcDate) =>{
    const dateCreated = new Date(utcDate * 1000);
    const dateNow = new Date();
    const hours = Math.abs(dateCreated - dateNow) / 36e5;

    return Math.round(hours,0);
  };

  const dismissPost = () => {    
    dispatch(deleteIndex(index));
    dispatch(dismissedPost(post.id));
  }; 

  const setReadPost = useSelector(state => state.simpleReducer.setReadPost);
  const SetDismissedPost = useSelector(state => state.simpleReducer.dismissedPost);
  const addDefaultSrc = (e) => {
    e.target.src = 'https://b.thumbs.redditmedia.com/N23Zz0q7Dv8hQPOf3ajVZoq4IOpp5jCN_KTo29RyYXM.jpg';
  }
  
  return (
    <ListGroup > { !SetDismissedPost.includes(post.id) &&
    <ListGroup.Item as="li" >
    <Container>
      <Row>
        <Col md="8"><h5 className="text-capitalize line_height_author">{ !setReadPost.includes(post.id)  && <FontAwesomeIcon className="indicator_read" icon={faCircle} />} {post.author}</h5></Col>
        <Col md="4">{convertDate(post.created_utc)} hours ago</Col>
      </Row>
      <Row>
        <Col sm="12" md="4" onClick={setSelectedPostAction} onKeyDown={setSelectedPostAction}>{post.thumbnail && <img src={post.thumbnail} onError={addDefaultSrc} width="100px" height="100px" alt=""/>}</Col>
        <Col sm="12" md="8" className="title-content" onClick={setSelectedPostAction} onKeyDown={setSelectedPostAction}>
          <div className="title_pointer"  >{post.title}</div> <br/>
        </Col>
       </Row>
      <Row>        
      <Col sm="6" md="6">  
        <br/>
        <div className="color_bottom" onClick={dismissPost} onKeyDown={dismissPost} ><FontAwesomeIcon icon={faTimesCircle} /> <span style={{color:'white'}}>Dismiss post</span></div>
       </Col>
      <Col sm="6" md="6">
        <br/>
        <span className="color_comments">{post.num_comments} Comments</span>
      </Col>      
      </Row>      
    </Container>    
      </ListGroup.Item>
    }
    </ListGroup>
  );
};

Post.propTypes = {
  dispatch: PropTypes.func.isRequired,
  post: PropTypes.arrayOf(PropTypes.array).isRequired,
  index: PropTypes.string.isRequired,
};

export default Post;
