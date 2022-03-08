import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import {useQuery,useMutation} from "@apollo/client"
import {getAllUserList} from "./graphql/Quries"
import {deletedUser} from "./graphql/Mutation"

const App = () => {
  const {data} = useQuery(getAllUserList);

  const initialFormState = {  name: '', email: '', status: false, gender: ''  }

	// Setting state
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)
  const [removeUser] = useMutation(deletedUser);

	const deleteUser = id => {
		setEditing(false)
		removeUser({
      variables:{
        id:id
      }
      })
	}

	const editRow = user => {
		setEditing(true)
		setCurrentUser({ id: user.id, name: user.name, email: user.email, gender:user.gender})
	}

	return (
		<div className="container">
			<h1>CRUD App GraphQL</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
							
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add user</h2>
							<AddUserForm />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>	
            {(data) ? data.listAllUser.map((user,i)=>(<UserTable key={i} users={user} editRow={editRow} deleteUser={deleteUser} />)):(<tr><td colSpan={5}>No users</td></tr>)}
          </tbody>
          </table>
				</div>
			</div>
		</div>
	)
}

export default App