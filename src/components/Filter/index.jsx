import './style.css';

const Filter = () => {
    return (
        <div className="filter-buttons">
            <button className="filter-button active">All</button>
            <button className="filter-button">Active</button>
            <button className="filter-button">Done</button>
        </div>
    )
}

export default Filter
