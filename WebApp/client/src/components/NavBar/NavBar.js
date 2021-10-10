import React from 'react'
import MenuContent from './MenuContent';
import { Image } from 'antd'
import './NavBar.css';

function NavBar() {
	return (
		<nav className='menu'>
			<div className='menu_logo'>
				<Image src="https://vandyhacks.org/assets/logo.png"/>
			</div>
			<div className='menu_content'>
				<MenuContent />
			</div>
		</nav>
	)
}

export default NavBar
