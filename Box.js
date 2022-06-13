import React from 'react'
import { useDrag } from 'react-dnd'

const Box = ({ id, name }) => {

    const handleClick = () => {
        console.log('clicked');
    }

    const [{ isDragging }, dragRef] = useDrag({
        type: 'box',
        item: { id, name },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    return (
        <div className="box" ref={dragRef} onClick={handleClick}>
            {name}
            {isDragging && "😱"}
        </div>
    )
}

export default Box
