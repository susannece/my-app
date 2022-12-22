import React, {useState} from "react";

const DataTable = () => {
    const studentValue = [
        { 
            id: 1,
            firstName: "Adam",
            lastName: "Svensson",
            age: 23,
            birthdate: "19990612",
            country: "Sverige",
            city: "Malmö"
        },
        { 
            id: 2,
            firstName: "Bertil",
            lastName: "Persson",
            age: 34,
            birthdate: "19910314",
            country: "Sverige",
            city: "Lund"
        },
        { 
            id: 3,
            firstName: "Cesar",
            lastName: "Larsson",
            age: 56,
            birthdate: "19660606",
            country: "Sverige",
            city: "Hörby"
        },
    ]

    const [studentList, setStudentList] = useState(studentValue);
    const [student, setStudent] = useState({id: 0, firstName: '', lastName: '', age: 0, birthdate: '', country: '', city: ''})
    const [showDetails, setShowDetails] = useState(false)

    //TableHeader
    const TableHeader = () =>
        <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>

    //TableRow
    const TableRow = (props) => {
        const list = props.studentValue
        const row = list.map((student) => {
            return(
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.age}</td>
                    <td><TableAction studentValue={student} /></td>
                </tr>
            );
        })
        return <tbody>{row}</tbody>
    }

    //TableAction
    const TableAction = (props) => {
        const actionValue = () => {
            setStudent(props.studentValue);
            setShowDetails(true)
        }
        return(<button type="button" class="btn btn-primary" onClick = {actionValue}>Details</button>)
    }

    //Show Details
    const ShowDetails = (props) => {
        return(
            showDetails?
            <div class="container p-3 border">
                <h2>Student information</h2>
                <p><b>{student.city}, {student.country}</b></p>
                <p>ID: {student.id}</p>
                <p>Name: {student.firstName} {student.lastName}</p>
                <p>Birth date: {student.birthdate}</p>
                <button type="button" class="btn btn-outline-info" onClick={() => {setStudent({}); setShowDetails(false)}}>Hide</button>
            </div>
            :
            <React.Fragment />
        )
    }

    return(
        <div className="container border">
        <h2>Student List</h2>
        <table class="table table-striped ">
            <TableHeader />
            <TableRow studentValue = {studentList} />
        </table>
        <ShowDetails student = {student} />
        </div>
    )

}

export default DataTable