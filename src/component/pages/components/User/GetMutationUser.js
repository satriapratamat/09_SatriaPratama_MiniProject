import { gql } from '@apollo/client'
import { useMutation } from '@apollo/client'

export default function useInsertUser() {
    const InsertUser = gql`
    mutation MyMutation($id_pengguna: String!, $email: String!, $name: String!) {
    insert_testimonial_one(object: {id_pengguna: $id_pengguna, email: $email, name: $name}) {
        id_pengguna
        email
        name
    }
    }
    `
    const [insertUser, {loading: loadingInsertUser}] = useMutation(InsertUser)
    
    return {
        insertUser,
        loadingInsertUser
    }
}

