import React, { useState, useEffect } from "react"
import axios from "axios";

const CrudDemo = () => {

const persons = () => [
    {
        id: 1,
        fullName: "David Persson",
        email: "david@test.se"
    },
    {
        id: 2,
        fullName: "Erik Persson",
        email: "erik@test.se"
    },
    {
        id: 3,
        fullName: "Filip Persson",
        email: "filip@test.se"
    },
]

const [personsList, setPersonsList] = useState(persons);
const [person, setPerson] = useState({id: 0, fullName: '', email: ''});
const [showDetails, setShowDetails] = useState(false);
const baseURL = "http://localhost:3000/api/person";

React.useEffect(() => {
axios.get(baseURL).then((response) => {
    setPersonsList(response.data);
});
}, []);

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
                <td><TableAction persons={person} /></td>
            </tr>
        );
    })
    return <tbody>{row}</tbody>
}

const TableAction = (props) => {
    const actionValue = () => {
        setPerson(props.persons);
        setShowDetails(true)
    }
    return(
        <div>
            <button type="button" class="btn btn-primary" onClick = {actionValue}>Details</button>
            <button type="button" class="btn btn-warning" onClick = {actionValue}>Delete</button>
            <button type="button" class="btn btn-info" onClick = {actionValue}>Edit</button>
        </div>
    )
}

return(
    <div>
        <h2>Persons</h2>
        <table>
            <TableHeader/>
            <TableRow persons = {personsList} />
        </table>

    </div>
)

}

export default CrudDemo           