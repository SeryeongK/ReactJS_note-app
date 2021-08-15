import React from 'react';
import Note from './Note';
import NoteList from './NoteList';

const NoteTemplate = ({notes, onRemove, onToggle}) => {
    return(
        <div className="NoteTemplate">
            <Note><NoteList notes={notes} onRemove={onRemove} onToggle={onToggle}/></Note>
        </div>
    )
}

export default NoteTemplate;