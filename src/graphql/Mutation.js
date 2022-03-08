import {gql} from "@apollo/client"

export const createUser = gql`
mutation createUser($name:String!, $email:String!, $gender:String!){
    createUser(name:$name,email:$email,gender:$gender){
        success
        message
        error
    }
}`

export const updateUser = gql`
mutation updateUser($id:Int!, $name:String!, $email:String!, $gender:String!){
    updateUser(id:$id,name:$name,email:$email,gender:$gender){
        success
        message
        error
    }
}`

export const deletedUser = gql`
mutation deleteUser($id:Int!){
    deleteUser(id:$id){
        success
        message
        error
    }
}`
