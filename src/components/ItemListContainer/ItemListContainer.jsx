import './ItemListContainer.css';

export default function Cards ({greeting}) {
    return (
        <>
        <article className="Cards">
            <h2>{greeting}</h2>
        </article>
        </>
    )
}