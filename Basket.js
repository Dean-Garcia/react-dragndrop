import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import Box from './Box';

const Basket = ({ boxArray, setBoxes }) => {

    const [basket, setBasket] = useState([]);

    // console.log(boxArray);

    const [{ isOver }, dropRef] = useDrop({
        accept: 'box',
        drop: (item) => {
            let newBasket = !basket.some(basketItem => basketItem.name === item.name) ? [...basket, item] : [...basket];
            setBasket(newBasket);
            boxArray.pop(item);
            setBoxes(boxArray);
        },

        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });

    return (
        <div className="basket" ref={dropRef}>
            {basket.map(box => <Box key={box.key} name={box.name} id={box.id} />)}

        </div>
    )
}

export default Basket
