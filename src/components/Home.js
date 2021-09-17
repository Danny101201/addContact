import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import {toast} from 'react-toastify'
function Home() {
    const contacts = useSelector(state => state)
    const dispatch = useDispatch()
    const deleteItem = (id) => {
        dispatch({ type: "DELETE_CONTACT", payload: id })
        toast.success('Delete success')
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 my-5 text-end ">
                    <Link to="/add" className="btn btn-outline-dark">
                        Add Contact
                    </Link>
                </div>
                <div className="col-md-10 text-center">
                    <table className="table table-hover">
                        <thead className="text-white bg-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">email</th>
                                <th scope="col">Number</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map(contact => (
                                <tr key={contact.id}>
                                    <td>{contact.id + 1}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.number}</td>
                                    <td>
                                        <Link to={`edit/${contact.id}`} className="btn btn-primary btn-small me-2">Edit</Link>
                                        <button className="btn btn-danger" onClick={() => deleteItem(contact.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default Home
