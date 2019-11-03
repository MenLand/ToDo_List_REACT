import React from 'react';
import './AddItem.css';

const AddItem = ({ onSubmit }) => {
    const inputValue = React.createRef();

    const handleAddItem = (e) => {
        e.preventDefault();
        if (inputValue.current.value) {
            onSubmit(inputValue.current.value);
            inputValue.current.value = '';
        }
    }
    

    return (
        <form action="" className="add-item" onSubmit={handleAddItem}>
            <input ref={inputValue} type="text" />
            <button>Add</button>
        </form>
    )
}

export default AddItem;