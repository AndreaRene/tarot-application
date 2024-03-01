import { gql } from '@apollo/client';

export const SIGNUP_USER = gql`
    mutation signup($userName: String!, $email: String!, $password: String!) {
        signUp(userName: $userName, email: $email, password: $password) {
            token
            user {
                _id
                email
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                email
                userName
            }
        }
    }
`;
