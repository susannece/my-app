import React, { useState, useEffect } from "react"
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const CrudDemo = () => {

    const persons = () => [ {
            id: 1,
            fullName: "David Persson",
            email: "david@test.se"},
        {   id: 2,
            fullName: "Erik Persson",
            email: "erik@test.se"},
        {   id: 3,
            fullName: "Filip Persson",
            email: "filip@test.se"}, ]

    const [personsList, setPersonsList] = useState([]);
    const [person, setPerson] = useState({id: 0, fullName: '', email: ''})
    const initialPersonState = {id: 0, fullName: '', email: ''};
    const [showDetails, setShowDetails] = useState(false);
    const [message, setMessage] = useState()

    // invoke an API using Get method and set the fetched data to the persons
    const API_URL = 'http://localhost:3000'

    useEffect( () => {
         axios.get(API_URL).then(response => {
    
            if(response.status === 200){
          
                setPersonsList(persons)
                setMessage({value: 'GET operation done.', type: 'success'})
            }
        }).catch(error => {
          
            if(error){
                setMessage({value: error.message, type: 'danger'})
            }
        })

    }, []);


    const actionDetails = (props) => {
        setPerson(props.persons);
        setShowDetails(true);
    }

    const actionDelete = (id) => {
        setPersonsList(personsList.filter((person) => person.id !== id));
    }

    const actionEdit = () => {

    }

    const TableAction = (props) => {
        return(
            <div>
                <button className="btn btn-primary" onClick = {actionDetails}>Details</button>
                <button className="btn btn-danger" onClick = {actionDelete}>Delete</button>
                <button className="btn btn-info" onClick = {actionEdit}>Edit</button>
            </div>
        )
    }

    const ShowDetails = (props) => {
        //const person = useState(props.persons)
        let params = useParams()

        return(
            showDetails?
            <div>
                <h2>Detailed information</h2>
                <p>ID: {params.id}</p>
                <p>Name: {params.fullName}</p>
                <p>Email: {params.email}</p>
                <button type="button" className="btn btn-outline-primary" onClick={() => {setPersonsList({}); setShowDetails(false)}}>Back</button>
            </div>
            :
            <React.Fragment/>
        )
    }

    const TableHeader = () => 
        <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
        </tr>
    </thead>

    const TableRow = (props) => {
        const list = props.persons
        const row = list.map((person) => {
            return(
                <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.fullName}</td>
                    <td>{person.email}</td>
                    <td><TableAction person={person} /></td>
                </tr>
            );
        })
        return <tbody>{row}</tbody>
    }

return(
    <div>
        <h2>Persons</h2>
        <table>
            <TableHeader/>
            <TableRow persons = {personsList} />
        </table>
        <ShowDetails person={person}/>
    </div>
)

}

export default CrudDemo           