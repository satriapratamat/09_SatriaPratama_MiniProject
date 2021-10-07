import { gql } from '@apollo/client'

export const InsertUser = gql`
    mutation MyMutation($id_pengguna: String!, $email: String!, $name: String!) {
    insert_testimonial_one(object: {id_pengguna: $id_pengguna, email: $email, name: $name}) {
        id_pengguna
        email
        name
    }
}
`
export const InsertComment = gql`
mutation MyMutation($object: comments_insert_input!) {
  insert_comments_one(object: $object) {
    id
    comment
    fullname
  }
}
`

export const GetComment = gql`
 query MyQuery {
  comments(order_by: {id: desc}) {
    comment
    id
    fullname
  }
}
`
export const DeleteComment = gql`
  mutation MyMutation($id: Int!) {
    delete_comments_by_pk(id: $id) {
      id
      comment
      fullname
    }
  }
  `
 export const UpdateComment= gql`
  mutation MyMutationedit($id: Int!, $comment: String!) {
    update_comments(where: {id: {_eq: $id}}, _set: {comment: $comment}) {
    affected_rows
    }
  }
  `
