import React, { useContext } from 'react';
import './Item.css';
import EventsContext from '../../../contexts/EventsContext';

const Item = ({ completed, order, title, id }) => {
    const classes = completed ? 'item completed' : 'item';
    const { changeInput, deleteItem } = useContext(EventsContext);

    const changeComplete = ({ target }) => {
        if (target.closest('button')) return;
        changeInput(id);
    }

    return (
        <div className={classes} onClick={changeComplete}>
            <input type="checkbox" checked={completed} readOnly/>
            <span><strong>{order + 1}</strong>{title}</span>
            <button onClick={deleteItem.bind(null, id)} >&times;</button>
        </div>
    )
}

export default Item;