import React, { useState } from 'react'
import xIcon from '../assets/images/shapes/x.svg'
import oIcon from '../assets/images/shapes/o.svg'

const Cell = () => {
    const [icon, setIcon] = useState(xIcon)

    const test = () => {
        setIcon(oIcon)
        console.log('test')
    }

    return (
        <div>
            <img src={icon} alt="test" onClick={test} />
        </div>
    )
}

export { Cell as default }
