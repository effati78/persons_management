import React from 'react';
import Person from './Person';

const Persons = ({persons, handleDeletePerson, handleNameChange}) => {
    return(
        <div>
            {persons.map(persons => (
                <Person 
                key= {persons.id}
                fullname={persons.fullname}
                deleted={() => handleDeletePerson(persons.id)}
                changed={event => handleNameChange(event,persons.id)}
                />
            ))}
        </div>
    )
}

export default Persons;