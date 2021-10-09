import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import DiningGrid from './DiningGrid';
import './LandingPage.css';

function LandingPage() {
	const [DiningOptions, setDiningOptions] = useState([]);

	useEffect(() => {
		Axios.get('/api/DiningOptions/getAllDining')
			.then(response => setDiningOptions(response.data));
	}, [])

	return (
		<div className='app' style={{ height: '100vh' }}>
			<div className='left_container'>
				{DiningOptions[0] && DiningOptions[0].name &&
					<DiningGrid option={DiningOptions[0]} name={DiningOptions[0].name} />}
				{DiningOptions[1] && DiningOptions[1].name &&
					<DiningGrid option={DiningOptions[1]} name={DiningOptions[1].name} />}
				{DiningOptions[2] && DiningOptions[2].name &&
					<DiningGrid option={DiningOptions[2]} name={DiningOptions[2].name} />}
			</div>
			<div className='right_container'>
				{DiningOptions[3] && DiningOptions[3].name &&
					<DiningGrid option={DiningOptions[3]} name={DiningOptions[3].name} />}
				{DiningOptions[4] && DiningOptions[4].name &&
					<DiningGrid option={DiningOptions[4]} name={DiningOptions[4].name} />}
				{DiningOptions[5] && DiningOptions[5].name &&
					<DiningGrid option={DiningOptions[5]} name={DiningOptions[5].name} />}
			</div>
		</div>
	)
}
export default LandingPage