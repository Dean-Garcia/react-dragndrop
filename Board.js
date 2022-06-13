import React, { useEffect } from 'react'
import Box from './Box';

const Board = ({ boxArray }) => {

    return (
        <div className='boxContainer'>
            {boxArray.map((box, index) => <Box key={index} name={index} id={index} />)}
        </div>
    )
}

export default Board
