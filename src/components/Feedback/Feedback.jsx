

export default function Feedback({update, total}) {
    return (
    <div>
        <ul>
                <li>Good: {update.good}</li>
                <li>Neutral: {update.neutral}</li>
                <li>Bad: {update.bad}</li>
                <li>Total: {total}</li>
                <li>Positive: {Math.round((update.good/ total) * 100)}%</li>
        </ul>
    </div>
    )
}