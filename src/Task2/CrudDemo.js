import React, { useState, useEffect } from 'react'
import api from '../api/BaseApi'

const CrudDemo = () => {

    const [persons, setPersons] = useState([])

    useEffect(() => {
       const fetchPersons = async () => {
        try {
            const respons = await api.get('/persons')
            setPersons(respons.data)
        } catch(err) {
            if(err.respons){
                console.log(err.respons.data)
            } else {
                console.log('Error: ' + err.respons.data)
            }
        }       
        }
        fetchPersons()
      }, [])

      const TableHeader = () => {
        return(
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>
        )
      }

      const TableAction = () => {
        return(
            <div>
                <button className='btn btn-primary'>Details</button>
                <button className='btn btn-danger'>Delete</button>
                <button className='btn btn-warning'>Edit</button>
            </div>
        )
      }

      const TableRow = () => {
       return (
        persons.map((person) =>  (
                <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td><TableAction id={person.id} /></td>
                </tr>
            ))
      )}

      const Table = () => {
        return (
        <div >
            <h1 className='bg-dark text-light'> List of people</h1>
            <table className='table table-light table-striped' >
                <TableHeader />
                <tbody>
                    <TableRow />
                </tbody>
            </table>
        </div>
        )
      }

      return(
        <div className='container'>
            <Table />
        </div>
      )

}

export default CrudDemo