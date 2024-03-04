import { gql } from '@apollo/client';

export const SIGNUP_USER = gql`
  mutation signup($userName: String!, $email: String!, $password: String!) {
    signup(userName: $userName, email: $email, password: $password) {
      token
      user {
        _id
        email
        userName
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

export const EDIT_USER_PROFILE = gql`
  mutation updateUser($userId: ID!, $input: UpdateUserProfileInput!) {
    updateUser(userId: $userId, input: $input) {
        _id
        userName
        email
        phoneNumber
        birthday
        useReverseCards
        theme
    }
  }
`;
