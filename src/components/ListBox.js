import React, { useState } from 'react';
import './css/ListBox.css'
import { useTheme } from '@emotion/react';

function ListBox({listContent}) {

    return ( 
        <div className='listbox'>
            {listContent.map((item, index) => (
                <div key={index} id={item.colorCode} className='listDiv'>{item.text}</div>
            ))}
        </div>
    );
}

export default ListBox;