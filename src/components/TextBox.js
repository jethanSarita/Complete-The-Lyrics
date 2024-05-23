import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './css/TextBox.css'

function TextBox({ handler, singer }) {

    const [inputValue, setInputValue] = useState('')
    const location = useLocation()
    const inputRef = useRef(null)

    useEffect(() => {
        setInputValue('')
        inputRef.current.focus()
    }, [location])

    const handleChange = e => {
        handler(e.target.value)
        setInputValue(e.target.value)
    }

    return (
        <div className='inputDiv'>
            <input
                className='input'
                type='text'
                value={inputValue}
                onChange={handleChange}
                ref={inputRef}
                placeholder={singer}
            />
        </div>
    );
}

export default TextBox;