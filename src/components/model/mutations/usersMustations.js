import {useMutation, gql} from '@apollo/client';


export const APPROVE_DOCTOR =gql`
mutation deleteUser {
    delete_users(where: {id: {_eq: 10}}) {
      affected_rows
    }
  }
`;

  