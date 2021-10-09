import React from 'react';
import { withRouter } from 'react-router-dom';
import { Typography, Button } from 'antd';
const { Title } = Typography;

function MenuContent(props) {
	const onClickHandler = () => {
		props.history.push('/newReview');
	}

	return (
		<div style={{ display : 'flex', flexDirection : 'row' }}>
			<Title style={{marginTop : '10px', marginBottom : '9px'}}>
				Campus Dining Real-time Feedback 
			</Title>
			<Button type='primary' style={{ marginLeft : '40px', marginTop : '20px'}}
				onClick={onClickHandler}>
				Create a New Review
			</Button>
		</div>
	)
}

export default withRouter(MenuContent)