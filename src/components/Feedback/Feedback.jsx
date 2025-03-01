

export default function Feedback({update, total, positive}) {
    return (
    <div>
        <ul>
                <li>Good: {update.good}</li>
                <li>Neutral: {update.neutral}</li>
                <li>Bad: {update.bad}</li>
                <li>Total: {total}</li>
                <li>Positive: {positive}%</li>
        </ul>
    </div>
    )
}