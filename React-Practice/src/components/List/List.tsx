import React from 'react'
import { PeopleInterface as IProps} from '../../App'


const List: React.FC<IProps> = ({ people }) => {
    
    const renderList = (): JSX.Element[] => {
        return people.map(person => {
            return (
            <li className="List">
                <div className='List-header'>
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className='List-note'>{person.email}</p>
            </li>
            )
        })
    }
    
    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List