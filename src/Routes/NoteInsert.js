import React, { useCallback, useState } from 'react';
import {MdAdd} from 'react-icons/md';
import NavNote from '../components/NavNote';
import NavNew from '../components/NavNew';
import './NoteInsert.scss';
import './Note.scss';


const NoteInsert = ({onInsert}) => {
    const [tvalue, setTValue] = useState('')
    const [cvalue, setCValue] = useState('')
    const onChangeT = useCallback(e => {setTValue(e.target.value);}, [])
    const onChangeC = useCallback(e => {setCValue(e.target.value);}, [])

    const onSubmit = useCallback(e => {
        onInsert(tvalue, cvalue);
        setCValue('');
        e.preventDefault();
    }, [onInsert, tvalue, cvalue])

    return (<div className="Note">
    <div className="app-title"><NavNote/><NavNew/></div>            
           
    <form className="NoteInsert" onSubmit={onSubmit}>
            <input placeholder="제목" value={tvalue} onChange={onChangeT}></input>
            <input placeholder="내용" value={cvalue} onChange={onChangeC}></input>
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
       
</div>
        
    )
}

export default NoteInsert;