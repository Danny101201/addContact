import React, { useEffect, useState } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'


function AddContact() {
    const [name, setName] = useState('')
    const [email, setMail] = useState('')
    const [number, setNumber] = useState('')

    const { id } = useParams()
    const contacts = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    const currentContact = contacts.find(contact => contact.id === parseInt(id))

    const handle = e => {
        const checkEmail = contacts.find(contact => contact.email === email && contact.id !== parseInt(id))
        const checkNumber = contacts.find(contact => contact.number === parseInt(number) && contact.id !== parseInt(id))
        e.preventDefault();
        if (!name || !email || !number) {
            return toast.info('PLEASE FILL IN ALL FIELDS!')
        }
        if (checkEmail) {
            return toast.error('This Email Already Exist')
        }
        if (checkNumber) {
            return toast.error('This number Already Exist')
        }

        const data = {
            id: parseInt(id),
            name,
            email,
            number
        }
        dispatch({ type: "UPDATE_CONTACT", payload: data })
        console.log(data)

        toast.success('student update success')
        history.replace('/')
    }

    useEffect(() => {
        if (currentContact) {
            setName(currentContact.name)
            setMail(currentContact.email)
            setNumber(currentContact.number)
        }
    }, [currentContact])
    return (
        <div className="container">
            {currentContact ? (
                <>
                    <h1 className="display-3 text-center my-5">
                        Edit student {id}
                    </h1>
                    <div className="row ">
                        <div className="col-md-6 shadow p-5 mx-auto">
                            <form onSubmit={handle}>
                                <div className="form-group mb-2">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="form-control"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <input
                                        type="email"
                                        placeholder="E-mail"
                                        className="form-control"
                                        value={email}
                                        onChange={e => setMail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <input
                                        type="Number"
                                        placeholder="phone"
                                        className="form-control"
                                        value={number}
                                        onChange={e => setNumber(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <input type="submit" value="Update Student" className="btn  btn-dark " />
                                    <Link to="/" className="btn btn-danger ms-3">cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            ) : (
                <h1 className="display-3 text-center my-5">StudentContact with id {id} not found</h1>)}
        </div>
    )
}

export default AddContact
