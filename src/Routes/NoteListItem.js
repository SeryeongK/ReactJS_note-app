import React from 'react';
import {
    MdCheckBoxOutlineBlank, 
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md';
import './NoteListItem.scss'
import cn from 'classnames';

const NoteListItem = ({note, onRemove,onToggle}) => {
    const {id, text, checked} = note;
    return (
        <div className="NoteListItem">
            <div className={cn ('checkbox', {checked})} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    )
}

export default NoteListItem;