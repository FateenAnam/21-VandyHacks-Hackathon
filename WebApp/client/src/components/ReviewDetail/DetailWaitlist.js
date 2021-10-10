import React, { useEffect, useState} from 'react';
import Axios from 'axios';
import { Typography } from 'antd';
const { Title } = Typography;

function DetailWaitlist(props) {
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

	return (
		<div >
			<Title level={3} > Waitlist Size : {Linenum} </Title>
		</div>
	)
}

export default DetailWaitlist