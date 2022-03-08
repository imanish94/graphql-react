import React from 'react'

const UserTable = ({users,editRow,deleteUser}) => (
    <tr key={users.id}>
        <td>{users.name}</td>
        <td>{users.email}</td>
        <td>{users.status ? "Active" : "Inactive"}</td>
        <td>{users.gender}</td>
        <td>
        <button
            onClick={() => {
            editRow(users)
            }}
            className="button muted-button"
        >
            Edit
        </button>
        <button
            onClick={() => deleteUser(users.id)}
            className="button muted-button"
        >
            Delete
        </button>
        </td>
    </tr>
)

export default UserTable