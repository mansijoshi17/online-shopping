import React from 'react';
import './Menu-item.style.scss';

const MenuItem = ({ title, imageurl, size }) => {
    return (
        <div className={`${size} menu-item`} >
            <div className="background-image" style={{
                backgroundImage: `url(${imageurl})`
            }}/>
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
        </div>
    )
}

export default MenuItem;