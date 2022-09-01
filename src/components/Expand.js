import './Expand.css'
import { useState } from 'react'


const Expand = () => {
    const [expand, setExpand] = useState(false)
    const button = document.getElementsByTagName('button')
    const open = () => {
        setExpand(!expand)
        if (!expand) {
            button[0].innerHTML = '-'
        } else {
            button[0].innerHTML = '+'
        }

    }

    return (
        <section>
            <article className='question'>
                <p>Why is React great?</p>
                <button onClick={open}>+</button>
            </article>
            <article className='answer' style={!expand ? { display: 'none' } : { display: 'block' }}>
                <p>Fast Learning Curve</p>
            </article>
        </section>
    )
}

export default Expand