import React, { useEffect, useRef } from 'react'
import '../styles/accordion.css'

const Accordion = ({ name, showArrow, leftPadding, isChild = false, children }) => {
    // const refs = useRef();
    // useEffect(() => {
    //     console.log("refs:", refs.current.parentNode);
    // }, [])
    // const handleOnLoad = (e) => {
    //     console.log("e:", e)
    // }

    const handleClick = (e) => {
        e.stopPropagation();
        console.log("e:", e.currentTarget)
        console.log("e:", e.currentTarget.nextSibling)
        // if (e?.currentTarget?.nextSibling) {
        //     if (e.currentTarget.nextSibling.style.height === '0px') e.currentTarget.nextSibling.style.height = `${e.currentTarget.nextSibling.scrollHeight}px`
        //     else e.currentTarget.nextSibling.style.height = '0px'
        // }
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
