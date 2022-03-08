import React, { useState } from 'react'
import {useMutation} from "@apollo/client"
import {updateUser} from "./../graphql/Mutation"


const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)
  const [editUser] = useMutation(updateUser);

  const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        //event.preventDefault()
        if (!user.name || !user.email || !user.gender) return
            editUser({
                variables:user
                })
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
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm