import React,{ useState, ChangeEvent } from 'react'

// export enum Color{
//     red = "red color",
//     black = "black color",
//     white = "white color",
// }

interface Props {
    name: string;
    age: number;
    email?: string;
    // color: Color;
}

const Person: React.FC<Props> = ({name, age, email}) => {
    
    const [country, setCountry] = useState<string | null>("")
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)
    }

    return (
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{email}</h1>
            <input placeholder='Write country' onChange={handleChange}/>
            {country}
            {/* {color} */}
        </div>
    )
}

export default Person
