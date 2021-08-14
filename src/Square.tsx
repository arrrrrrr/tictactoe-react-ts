interface SquareProps {
    value: string,
    onClick: () => void,
}

function Square(props: SquareProps): JSX.Element {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;