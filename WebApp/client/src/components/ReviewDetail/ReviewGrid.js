import React from 'react';
import { Col, Avatar, Typography } from 'antd';
const { Text } = Typography;

function ReviewGrid(props) {
    return (
        <Col lg={24} md={24} xs={24} 
					style={{height : '200px', width: '100%', padding : '0 100px', display : 'flex', flexDirection : 'row'}}>
          <div className='avatar'>
						<Avatar size={40} style={{ backgroundColor: '#87d068' }}>USER</Avatar>
					</div>
					<div className="reviewgrid_rating_comment"> 
						<Text strong> Rating : {props.Rating} </Text>
						<Text strong> Comment : {props.Comment} </Text>
					</div>
        </Col>
    )
}

export default ReviewGrid