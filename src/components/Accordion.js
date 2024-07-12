import React from 'react'
import '../styles/accordion.css'

const Accordion = ({ name, showArrow, children }) => {
    const handleClick = (e) => {
        e.stopPropagation();
        if (e?.currentTarget?.nextSibling) {
            if (e.currentTarget.nextSibling.style.display === 'none') e.currentTarget.nextSibling.style.display = 'block'
            else e.currentTarget.nextSibling.style.display = 'none'
        }
    }
    return (
        <div className='accordion'>
            <div className='accordion_child' onClick={handleClick}>
                <div className='arrow'>  {showArrow ? <img src="./down.png" width={15} /> : null}</div>
                <span className=''>{name}</span>
            </div>
            {children}
        </div>
    )
}

export default Accordion
