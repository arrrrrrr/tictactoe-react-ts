import React, {useState} from "react";
import Square from "./Square";

function Board(): JSX.Element {
    function renderSquare(i: number): JSX.Element {
        return (
            <Square
                value={squares[i]}
                onClick={() => handleClick(i)}
            />
        );
    }

    function handleClick(i: number): void {
        const squares_inner = squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares_inner[i] = XIsNext ? 'X' : 'O';
        setSquares(squares_inner);
        setXIsNext(!XIsNext);
    }

    const [squares, setSquares] = useState<Array<string>>(
        Array(9).fill(null));
    const [XIsNext, setXIsNext] = useState<boolean>(true);

    const winner = calculateWinner(squares);

    let status : string;
    if (winner) {
        status = 'Winner: ' + winner;
    }
    else {
        status = 'Next player: ' + (XIsNext ? 'X' : 'O');
    }

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

function calculateWinner(squares: Array<string>): string|null {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Board;