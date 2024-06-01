import React from 'react'
import './Input.css'

interface Props {
    size: string
}


const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value)
}
const handleClick: React.MouseEventHandler<HTMLInputElement> = (event) => {
    console.log('clicked')
}


const Input: React.FC<Props> = ({ size='medium' }) => {

    return <input type='text' 
    className={`${size}`} 
    placeholder='Enter Text' 
    onChange={handleChange}
    onClick={handleClick} />
}

export default Input
