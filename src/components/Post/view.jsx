
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
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Post = ({ setSelectedPost, post }) => {

  const setSelectedPostAction = () => {  
    setSelectedPost(post);   
  };

  return (
    <ListGroup id={post.id}>
    <ListGroup.Item>
    <Container>
      <Row>
        <Col md="8"><h5 className="text-capitalize line_height_author">{post.author}</h5></Col>
        <Col md="4">{post.created_utc}</Col>
      </Row>
      <Row>
        <Col sm="12" md="4">{post.thumbnail && <img src={post.thumbnail} width="100px" height="100px" alt=""/>}</Col>
        <Col sm="12" md="8">
          <div onClick={setSelectedPostAction} onKeyDown={setSelectedPostAction} className="text-justify">{post.title}</div> <br/>
        </Col>
      </Row>
      <Row>
      <Col sm="6" md="6">  
        <a className="color_bottom">
          <FontAwesomeIcon icon={faTimesCircle} /> Dismiss post
        </a>
       </Col>
      <Col sm="6" md="6">
    
              <p className="color_bottom">{post.num_comments} Comments</p>
      </Col>
      
      </Row> 
     
    </Container>
      
    
      </ListGroup.Item>
    </ListGroup>
  );
};

Post.propTypes = {
  setSelectedPost: PropTypes.func.isRequired,
  post: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Post;
