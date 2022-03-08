import {gql} from "@apollo/client"

export const getAllUserList = gql`
query{
    listAllUser{
        id
        name
        email
        status
        gender
    }
}
`