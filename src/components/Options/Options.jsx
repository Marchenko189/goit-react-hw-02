

export default function Options({updateClick, resetClick, totalClick}) {
    return (
        <div>
        <button onClick={() => updateClick("good")}>Good</button>
        <button onClick={() => updateClick("neutral")}>Neutral</button>
        <button onClick={() => updateClick("bad")}>Bad</button>
            {totalClick >= 1 ? <button onClick={resetClick}>Reset</button> : null}
        </div>
    )
}