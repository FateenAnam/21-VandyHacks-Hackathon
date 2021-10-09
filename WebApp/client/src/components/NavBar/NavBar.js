import React from 'react'
import MenuContent from './MenuContent';
import './NavBar.css';

function NavBar(props) {
	return (
		<nav className='menu'>
			<div className='menu_logo'>
				<a href='/'> </a>
			</div>
			<div className='menu_content'>
				<MenuContent />
			</div>
		</nav>
	)
}

export default NavBar
