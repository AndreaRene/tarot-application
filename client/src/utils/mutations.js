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
  mutation updateUserProfile($userId: ID!, $input: UpdateUserProfileInput!) {
    updateUserProfile(userId: $userId, input: $input) {
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

export const EDIT_USER_PASSWORD = gql`
  mutation updateUserPassword($userId: ID!, $input: UpdateUserPasswordInput!) {
    updateUserPassword(userId: $userId, input: $input) {
      _id
      email
    }
  }
`;

