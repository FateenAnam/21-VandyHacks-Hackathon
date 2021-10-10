import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Col, Image, Typography, Rate, Divider } from 'antd';
import ReviewGrid from './ReviewGrid';
import Commons from '../../img/Commons.jpg';
import TwoThreeOOne from '../../img/2301.jpg';
import EBI from '../../img/EBI.jpg';
import Kissam from '../../img/Kissam.jpg';
import Rand from '../../img/Rand.jpg';
import Zeppos from '../../img/Zeppos.jpg';
import './ReviewDetail.css';
const { Title } = Typography

function ReviewDetail(props) {
	const [Reviews, setReviews] = useState([]);
	const diningName = props.location.name;
	const rating = props.location.rating;

	useEffect(() => {
		let body = {
			location: diningName
		}

		Axios.post('/api/Reviews/getReview', body)
			.then(response => {
				setReviews(response.data);
			})
	}, [])

	return (
		<div className='app'>
			<div className='review_container'>
				<Col lg={24} md={24} xs={24}
					style={{
						height: '200px', display: 'flex'
					}}>
					{diningName === 'Commons' &&
						<Image
							style={{ width: '230px', height: '230px', marginTop: '10px', marginLeft: '35px' }}
							src={Commons} alt='' />
					}
					{diningName === '2301' &&
						<Image
							style={{ width: '230px', height: '230px', marginTop: '10px', marginLeft: '35px' }}
							src={TwoThreeOOne} alt='' />
					}
					{diningName === 'EBI' &&
						<Image
							style={{ width: '230px', height: '230px', marginTop: '10px', marginLeft: '35px' }}
							src={EBI} alt='' />
					}
					{diningName === 'Kissam' &&
						<Image
							style={{ width: '230px', height: '230px', marginTop: '10px', marginLeft: '35px' }}
							src={Kissam} alt='' />
					}
					{diningName === 'Rand' &&
						<Image
							style={{ width: '230px', height: '230px', marginTop: '10px', marginLeft: '35px' }}
							src={Rand} alt='' />
					}
					{diningName === 'Zeppos' &&
						<Image
							style={{ width: '230px', height: '230px', marginTop: '10px', marginLeft: '35px' }}
							src={Zeppos} alt='' />
					}
					<div className='dining_info_review'>
						<Title level={1} style={{ marginTop: '30px' }}>{props.location.name}</Title>
						<div className='rating_and_waitlist_review'>
							<div>
								<Title level={3}> Current Rating : {rating.toFixed(2)}</Title>
								<Rate disabled allowHalf defaultValue={0} value={Math.round(rating / 2.0)} />
							</div>
							<br />
							<div >
								<Title level={3} > Waitlist Size : {0} </Title>
							</div>
						</div>
					</div>
				</Col>
				<br />
				<div className='reviews'>
					{Reviews && Reviews.map((Review, index) => {
						return(
							<React.Fragment key={index}>
								<Divider style={{margin : '0 0'}}/>
								<ReviewGrid 
									Rating={Review.rating}
									Comment={Review.comment}/>
							</React.Fragment>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default ReviewDetail