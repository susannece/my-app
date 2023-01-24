// Lektion om Axios https://github.com/mehrdad-javan/g44-lecture-axios-router

import React, {useState} from 'react'
import axios from "axios"
import DataTable from './DataTable'
import Message from './Message'

const AxiosExample = () => {

    const dataValue = [
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

    const API_URL = 'http://localhost:3000'
    const [persons, setPersons] = useState([])
    const [message, setMessage] = useState()

    const sendGetRequest = async () => {
        console.log('#### Start')

      await axios.get(API_URL).then(response => {
            console.log('Respons: ', response)
            if(response.status === 200){
                console.log('Data: ', response.data)
                setPersons(dataValue)
                setMessage({value: 'GET operation done.', type: 'success'})
            }
        }).catch(error => {
            console.log("Error: ", error)
            if(error){
                setMessage({value: error.message, type: 'danger'})
            }
        })
        console.log('#### End')
    }

    const sendPostRequest = async () => {
        const data = { id: 2,
            firstName: "Cesar",
            lastName: "Larsson",
            age: 56,
            birthdate: "19660606",
            country: "Sverige",
            city: "Hörby"}

        await axios.post(API_URL, data)
        .then(response => {
            console.log('Respons: ', response) 
            if(response.status === 201){
                    setMessage({value: 'POST operation done.', type: 'success'})
                }
        }).catch(error => {
            console.log("Error: ", error)
            if(error){
                setMessage({value: error.message, type: 'danger'})
            }
        })
    }

    const sendDeleteRequest = async() => {
        const id = 3

        await axios.delete(API_URL + '/' + id).then(response => {
            if(response === 201){
                setMessage({value: 'DELETE operation done.', type: 'success'})
            }
        }).catch(error => {
            console.log("Error: ", error)
            if(error){
                setMessage({value: error.message, type: 'danger'})
            }
        })
    }

    const sendPutRequest = async() => {

        const data = { id: 3,
            firstName: "Lars",
            lastName: "Persson",
            age: 56,
            birthdate: "19660606",
            country: "Sverige",
            city: "Malmö"}

        await axios.put(API_URL, data)
        .then(response => {
            console.log('Respons: ', response) 
            if(response.status === 204){
                    setMessage({value: 'PUT operation done.', type: 'success'})
                    sendGetRequest()
                }
        }).catch(error => {
            console.log("Error: ", error)
            if(error){
                setMessage({value: error.message, type: 'danger'})
            }
        })
    }

return (
    <div className="container">
        <Message message={message}/>

        <div className="card">
            <div className="card-header bg-dark text-white">
                Example 1: Call GET API
            </div>
            <div className="card-body">
                <button type="button" className="btn btn-info" onClick={sendGetRequest}>Get List</button>
            </div>
            <DataTable people={persons}/>
            <div className="card-footer"></div>
        </div>

        <br/>
        <div className="card">
            <div className="card-header bg-dark text-white">
                Example 2: Call POST API
            </div>
            <div className="card-body">
                <button type="button" className="btn btn-success" onClick={sendPostRequest}>Register person</button>
            </div>
            
            <div className="card-footer"></div>
        </div>

        <br/>
        <div className="card">
            <div className="card-header bg-dark text-white">
                Example 3: Call DELETE API
            </div>
            <div className="card-body">
                <button type="button" className="btn btn-danger" onClick={sendDeleteRequest}>Delete person</button>
            </div>
            
            <div className="card-footer"></div>
        </div>

        <br/>
        <div className="card">
            <div className="card-header bg-dark text-white">
                Example 3: Call PUT API
            </div>
            <div className="card-body">
                <button type="button" className="btn btn-warning" onClick={sendPutRequest}>Update person</button>
            </div>
            
            <div className="card-footer"></div>
        </div>

    </div>

    

    
    )


}

export default AxiosExample