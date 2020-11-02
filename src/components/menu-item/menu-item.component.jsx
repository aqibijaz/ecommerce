// Import Packages
import React from 'react';
import { withRouter } from 'react-router-dom'; 
// Import css file
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);

// HOD(high order component) is essentialy a function 
// That takes as Component as an argument and whick turn you a modified component
// E.g import { withRouter } from 'react-router-dom';
