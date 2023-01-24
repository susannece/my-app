// Build a CRUD App in React with Hooks https://www.taniarascia.com/crud-app-in-react-with-hooks/

import React, { useState } from 'react'
import HookTable from './HookTable' 
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'

const CrudHooks = () => {
    const usersData = [
        { id: 1, name: 'Filip', username: 'filip' },
        { id: 2, name: 'Gustav', username: 'gustav' },
        { id: 3, name: 'Helge', username: 'helge' },
    ]
    const [users, setUsers] = useState(usersData)
    const [editing, setEditing] = useState(false)
    const initialFormState = {id: null, name: '', username: ''}
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const editRow = (user) => {
        setEditing(true)
        setCurrentUser({id: user.id, name: user.name, username: user.username})
    }

    const updateUser = (id, updateUser) => {
        setEditing(false)
        setUsers(users.map((user) => (user.id === id ? updateUser : user)))
    }

    const addUser = (user) => {
        user.id = users.length + 1
        setUsers([...users, user])
    }

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id))
    }

    return(
        <>
        <div className='container'>
            <h1>CRUD with Hooks</h1>
            <div className='flex-row'>
                <div className='flex-large'>
                    {editing ? (
                        <div>
                            <h2>Edit user</h2>
                            <EditUserForm setEditing={setEditing} currentUser={currentUser} updateUser={updateUser} />
                        </div>
                        ):(
                        <div>
                            <h2>Add user</h2>
                            <AddUserForm addUser={addUser} />
                        </div>
                    )}
                </div>
                <div className='flex-large'>
                    <h2>View users</h2>
                    <HookTable users={users} deleteUser={deleteUser} editRow={editRow} />
                </div>
            </div>   
        </div>

       </> 
    )
}

export default CrudHooks