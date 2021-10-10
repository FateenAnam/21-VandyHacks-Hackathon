import React from 'react';
import { withRouter } from 'react-router-dom';
import { Typography, Button } from 'antd';
const { Title } = Typography;

function MenuContent(props) {
	const onClickHandler = () => {
		props.history.push('/newReview');
	}

	return (
		<div style={{ display : 'flex', flexDirection : 'column' }}>
			<Title style={{marginTop : '0px', marginBottom : '15px'}}>
				Campus Dining Real-time Feedback 
			</Title>
			<Button type='primary' style={{ width: '200px', marginTop : '20px', margin: '0 auto'}}
				onClick={onClickHandler}>
				Create a New Review
			</Button>
		</div>
	)
}

export default withRouter(MenuContent)