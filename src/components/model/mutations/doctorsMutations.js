import {useMutation, gql} from '@apollo/client';
const full_name = "aa"
export const APPROVE_DOCTOR =gql`
mutation approveDoctor ($id: Int!){
    update_doctors(where: {id: {_eq: $id}}, _set: {is_approved: true, is_verified: true}) {
      affected_rows
      returning {
        is_verified
        is_approved
      }
    }
  }
`;
export const DELETE_DOCTOR =gql`
mutation DeleteDoctor($id: Int!) {
    delete_doctors(where: {id: {_eq: $id}}) {
      affected_rows
    }
  }
`;

  
