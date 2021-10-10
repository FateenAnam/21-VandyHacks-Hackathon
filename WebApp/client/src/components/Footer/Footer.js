import React from 'react'
import './Footer.css'
import { Typography } from 'antd';
const { Title } = Typography;

function Footer() {
  return (
    <div className="footer">
      <div className="footer_copyright">
        <Title level={4} style={{marginBottom : '0px', color: 'white'}}>
          Created by Charlie Fruitman, Fateen Rafid, Julian Delgado, and Arthur Sung.
        </Title>
        <Title level={4} style={{marginTop : '0px', color: 'white'}}>
          VandyHacks 21 - Space Edition
        </Title>
      </div>
    </div>
  )
}

export default Footer