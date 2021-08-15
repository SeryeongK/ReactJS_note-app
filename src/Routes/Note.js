import React from 'react';
import NavNote from '../components/NavNote';
import NavNew from '../components/NavNew';
import './Note.scss';

const Note = ({children}) => {
    return(
        <div className="Note">
            <div className="app-title"><NavNote/><NavNew/></div>            
            <div className="contents">{children}</div>
        </div>
    )
}

export default Note;