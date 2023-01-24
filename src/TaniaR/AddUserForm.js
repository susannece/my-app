import React, { useState } from 'react'

const AddUserForm = (props) => {

    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value})
    }

    return(
        <form onSubmit={event => { 
            event.preventDefault() 
            if (!user.name || !user.username ) 
            return
            props.addUser(user)
            setUser(initialFormState)}}>
            <p>
            <label>Name</label>
            <input type='text' name='name' value={user.name} onChange={handleInputChange} />
            </p>
            <p>
            <label>Username</label>
            <input type='text' name='username' value={user.username} onChange={handleInputChange} />
            </p>
            <button className='btn btn-warning'>Add new user</button>
        </form>
    )
}

export default AddUserForm