import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import { Typography, Form, Input, Button, Select } from 'antd';
import './NewReview.css';

const { Title } = Typography;
const { TextArea } = Input;

const layout = {
	labelCol: { span: 24 },
	wrapperCol: { span: 24 },
};
const tailLayout = {
	wrapperCol: { offset: 4, span: 16 },
};

function NewReview(props) {
	const [Location, setLocation] = useState('');
	const [Rating, setRating] = useState(0);
	const [Comment, setComment] = useState('');

	const onSubmitHandler = () => {
		let body = {
			location: Location,
			rating: Rating,
			comment: Comment
		}

		Axios.post('/api/Reviews/insertReview', body)
			.then(response => {
				console.log(response);
				if (!response.insertReviewSuccess) {
					alert('Registering review success!');
				} else {
					alert('insertReview failed...')
				}
				props.history.push('/');
			})
	}

	const onLocationChangeHandler = (value) => {
		setLocation(value);
	}
	const onRatingChangeHandler = (event) => {
		setRating(event.currentTarget.value);
	}
	const onCommentChangeHandler = (event) => {
		setComment(event.currentTarget.value);
	}

	return (
		<div className='app' style={{ height: '100vh' }}>
			<div className='review_container'>
				<Title level={3} style={{ marginTop: '20px' }}>Be Honest, not Mean !</Title>
				<div className='form_container'>
					<Form {...layout} onSubmit={onSubmitHandler} layout='vertical'>
						<Form.Item required label="Location" rules={[{ required: true }]}>
							<Select
								id='location'
								onChange={onLocationChangeHandler}
								placeholder="Select a dining location"
							>
								<Select.Option value="EBI">EBI</Select.Option>
								<Select.Option value="2301">2301</Select.Option>
								<Select.Option value="Kissam">Kissam</Select.Option>
								<Select.Option value="Commons">Commons</Select.Option>
								<Select.Option value="Rand">Rand</Select.Option>
								<Select.Option value="Zeppos">Zeppos</Select.Option>
							</Select>
						</Form.Item>
						<Form.Item required label="Rating">
							<Input
								id="rating"
								placeholder="Submit your Ranking!"
								type="number"
								onChange={onRatingChangeHandler}
								max={10}
								min={1} />
						</Form.Item>
						<Form.Item required label="Comments">
							<TextArea
								id="comments"
								placeholder="Any comments?"
								type="textarea"
								onChange={onCommentChangeHandler}
								autoSize={{ minRows: 3, maxRows: 5 }} />
						</Form.Item>
						<Form.Item {...tailLayout}>
							<Button onClick={onSubmitHandler} type="primary">
								Submit
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		</div>
	)
}

export default withRouter(NewReview)