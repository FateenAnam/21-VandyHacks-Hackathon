import React, { useEffect, useState } from 'react';
import { Col, Image, Typography, Rate, Button } from 'antd';
import Axios from 'axios';
const { Title, Text } = Typography;

function DiningGrid(props) {
	const [Rating, setRating] = useState(0.0)

	useEffect(() => {
		getAverageRating();
	}, [])

	const getAverageRating = () => {
		let body = {
			location : props.name
		}
		
		Axios.post('/api/Reviews/getReview', body)
			.then(response => {
				var reviewNum = 0;
				var reviewSum = 0.0;

				response.data.forEach(review => {
					reviewNum++;
					reviewSum = reviewSum + review.rating;
				})
				setRating(reviewSum / reviewNum);
				return true;
			})
		
		setRating(0.0);
		return true;
	}

	const onClickHandler = () => {
	}

	return (
		<Col lg={24} md={24} xs={24}
			style={{
				height: '150px', display: 'flex', marginTop: '10px', marginBottom: '10px', backgroundColor: 'white',
				borderWidth: '5px', borderStyle: 'solid', borderRadius: '20px', borderColor : '#87CEFA'
			}}>
			<Image
				style={{ width: '120px', height: '120px', marginTop: '10px', marginLeft: '15px', marginRight: '15px' }} src='' alt='' />
			{props.option &&
				<div className='dining_info'>
					<Title level={2} style={{ marginTop: '10px', marginLeft: '115px' }}>{props.option.name}</Title>
					<div className='rating_and_waitlist'>
						<div className='rating'>
							<Text strong> Current Rating : {Rating}</Text>
							<Rate disabled allowHalf defaultValue={0} value={Math.round(Rating / 2.0)}/>
						</div>
						<div className='waitlist'>
							<Text strong style={{ marginBottom : '5px'}}> Waitlist Size : {0} </Text>
							<Button onClick={onClickHandler} type="primary">
								See Reviews!
							</Button>
						</div>
					</div>
				</div>
			}
		</Col>
	)
}

export default DiningGrid