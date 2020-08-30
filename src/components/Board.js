import React from 'react';
import Square from './Square';
import Knight from './Knight';

function renderSquare(i, [knightX, knightY]) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const isKnightHere
}

const Board = () => {
    return (
        <div>
            <Square black>
                <Knight />
            </Square>
        </div>
    )
}

export default Board;