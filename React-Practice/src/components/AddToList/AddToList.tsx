import React, { useState } from 'react'
import { PeopleInterface as IProps} from '../../App'


interface Props {
    people: IProps["people"]
    setPeople: React.Dispatch<React.SetStateAction<{
        name: string;
        age: number;
        email: string;
        note?: string | undefined;
    }[]>>
}

const AddToList: React.FC<Props> = ({ people, setPeople }) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        email: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                email: input.email
            }
        ])

        setInput({
            name: "",
            age: "",
            email: "",
            
        })
    }


    // setInput({
    //     name: "",
    //     age: "",
    //     email: "",
    // })

    return (
        <div className='AddToList'>
            <input 
                type='text'
                placeholder='Name'
                className='AddToList-input'    
                name='name'
                value={input.name}   
                onChange={handleChange}         
            />
            <input 
                type='text'
                placeholder='Age'
                className='AddToList-input'
                name='age'       
                value={input.age}      
                onChange={handleChange}   
            />
            <input 
                type='text'
                placeholder='Email'
                className='AddToList-input'
                name='email'    
                value={input.email}    
                onChange={handleChange}        
            />
            <button 
            className='AddToList-btn'
            onClick={handleClick}>
                Add to List
            </button>
        </div>
    )
}

export default AddToList
