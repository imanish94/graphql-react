import React, { useState } from 'react'
import {useMutation} from "@apollo/client"
import {createUser} from "./../graphql/Mutation"

const AddUserForm = props => {
	const initialFormState = { name: '', email: '', status: false, gender: '' }
	const [ user, setUser ] = useState(initialFormState)

    const [addUser] = useMutation(createUser);

	const handleInputChange = event => {
		const { name, value } = event.target
		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.email || !user.gender) return
				addUser({
                    variables:user
                })
				setUser(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Email</label>
			<input type="text" name="email" value={user.email} onChange={handleInputChange} />
            <label>Status</label>
            <select name="status" onChange={handleInputChange}>
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
             </select>
            <label>Gender</label>
			<select name="gender" onChange={handleInputChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
             </select>
			<button>Add new user</button>
		</form>
	)
}

export default AddUserForm