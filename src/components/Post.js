

import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

//const [list, setList] = React.useState(initialList);

function handleRemove(id) {
  
  console.log(id);


  // remove item
}

function onClickItem(id) {
  
  console.log('post.id',id);
  

  // remove item
}

function convertUtcTime(time_utc) {

  
return time_utc;
  // remove item
}

const Post = ({ post }) => (
  

<ListGroup id={post.id}>
<ListGroup.Item>
<Container>
  <Row>
        <Col md="8"><h5 className="text-capitalize line_height_author">{post.author}</h5></Col>
        <Col md="4">{convertUtcTime(post.created_utc)}</Col>
  </Row>   
 
  <Row>
        <Col sm="12" md="4">{post.thumbnail && <img src={post.thumbnail} width="100px" height="100px" alt=""/>}</Col>
        <Col sm="12" md="8"><p onClick={() => onClickItem(post)} className="text-justify">{post.title}</p> <br/></Col>
  </Row>
  <Row>
  <Col sm="6" md="6">  
          <a onClick={() => handleRemove(post.id)} className="color_bottom"><FontAwesomeIcon icon={faTimesCircle} /> Dismiss post</a>
   </Col>
  <Col sm="6" md="6">

          <p className="color_bottom">{post.num_comments} Comments</p>
  </Col>
  
  </Row> 
 
</Container>
  

  </ListGroup.Item>
</ListGroup>

)

Post.propTypes = {
  post: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
}

export default Post
