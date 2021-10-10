import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios'
import { Button, Typography } from 'antd';
const { Text } = Typography;

function Waitlist(props) {
	const [Linenum, setLinenum] = useState(0);
	const [ReRender, setReRender] = useState(0);

	useEffect(() => {
		let body = {
			location: props.name
		}

		Axios.post('/api/Waitlines/getWaitline', body)
			.then(response => {
				setLinenum(response.data.linenum);
			})

			reRender();
	}, [ReRender])

	const reRender = () => {
    setTimeout(() => {
      setReRender(prev => prev + 1)
    }, 2000)
  }

	const onClickHandler = () => {
		props.history.push({
			pathname: '/reviewDetail',
			name: props.name,
			rating: props.rating
		})
	}

	return (
		<div className='waitlist'>
			<Text strong style={{ marginBottom: '5px' }}> Waitlist Size : {Linenum} </Text>
			<Button onClick={onClickHandler} type="primary">
				See Reviews!
			</Button>
		</div>
	)
}

export default withRouter(Waitlist)
