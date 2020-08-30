import React from 'react';
import Square from './Square';
import Knight from './Knight';

function renderSquare(i, [knightX, knightY]) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const isKnightHere = x === knightX && y === knightY;
    const black = (x + y) % 2 === 1;
    const piece = isKnightHere ? <Knight /> : null;

    return 

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