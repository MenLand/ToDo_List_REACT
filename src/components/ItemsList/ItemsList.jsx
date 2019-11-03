import React from 'react';
import Item from './Item/Item';

const ItemsList = ({ items }) => {
    return (
        <div>
            {items.map((data, index) => (
                <Item key={data.id} {...data} order={index} />
            ))}
        </div>
    )
}


export default ItemsList;