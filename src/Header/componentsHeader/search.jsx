import React, { useEffect, useRef, useState } from "react";
import search from './../../image/svg/search.svg'

function Search() {

    const [input, setInput] = useState('btn-search')
    const inputRef = useRef()

    useEffect(() => {
        document.addEventListener('click', rerunInput)
    }, [input])

    const rerunInput = (event) => {
         if( inputRef.current && inputRef.current.contains(event.target)) {
            document.querySelector('#mySearch').classList.add('blocks')
        } else if (inputRef.current && !inputRef.current.contains(event.target)) {
            document.querySelector('#mySearch').classList.remove('blocks')
        }
    }

    return(
        <button aria-label="Найти" onClick={rerunInput} ref={inputRef} className="btn-search" id = "search">
            <img src = {search} />
        </button>
    )
}

export default Search