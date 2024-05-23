import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './css/Singers.css'

function Singers({ colorCode, route, name, sendColorCodeToMain }) {

    const handleOnClick = () => {
        sendColorCodeToMain(colorCode)
    }

    return (
        <Link to={route} className='button' id={colorCode} onClick={handleOnClick}>{name}</Link>
    );
}

export default Singers;