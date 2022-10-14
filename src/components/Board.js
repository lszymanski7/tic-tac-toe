import React from 'react'

const Board = () => {
    return (
        <div className="flexbox-row">
            <div className="flexbox-column">
                <button>Square 0</button>
                <button>Square 3</button>
                <button>Square 6</button>
            </div>
            <div className="flexbox-column">
                <button>Square 1</button>
                <button>Square 4</button>
                <button>Square 7</button>
            </div>
            <div className="flexbox-column">
                <button>Square 2</button>
                <button>Square 5</button>
                <button>Square 8</button>
            </div>
        </div>
    )
}

export { Board as default }
