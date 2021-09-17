import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, connect, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
function AddContact() {
    const [name, setName] = useState('')
    const [email, setMail] = useState('')
    const [number, setNumber] = useState('')
    const contacts = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()
    const handle = e => {
        const checkEmail = contacts.find(student => student.email === email)
        const checkNumber = contacts.find(student => student.number === parseInt(number))
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
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            number
        }
        dispatch({ type: "ADD_CONTACT", payload: data })
        console.log(data)

        toast.success('student add success')
        history.replace('/')
    }
    useEffect(() => {
       
    }, [name])
    return (
        <div className="container">
            <h1 className="display-3 text-center my-5">
                Add student
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
                                type="email" p
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
                            <input type="submit" value="Add Student" className="btn  btn-dark w-100" />

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact
