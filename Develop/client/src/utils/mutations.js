import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser($username: String!, $email: String!, $password: String!){
        createUser(username: $username, email: $email, password: $password){
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
            user {
                _id
                username
                email
                bookCount
                savedBooks {
                    _id
                    bookId
                    authors
                    title
                    image
                    link
                }
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($bookToSave: saveBookInput!){
        saveBook(bookToSave: $bookToSave){
            username
            email
            bookCount
        }
    }
`;

export const DELETE_BOOK = gql`
mutation removeBook($bookId: String!){
    removeBook(bookId: $bookId){
        _id
        username
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            image
        }
    }
}
`;