import axios from "axios";

export const url = "http://localhost:3001/persons"

export const getAll = () => {

    const request = axios.get(url)
    return request.then(response => response.data)
}

export const addPerson = (newPerson) => {

    const request = axios.post(url, newPerson)
    return request.then(response => response.data)
}

export const deletePerson = (id) => {

    const request = axios.delete(`${url}/${id}`)
    return request.then(response => response.status)

}