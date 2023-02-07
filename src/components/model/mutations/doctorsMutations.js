import {useMutation, gql} from '@apollo/client';
const full_name = "aa"
export const APPROVE_DOCTOR =gql`
mutation approveDoctor ($full_name: ${full_name}!){
    update_doctors(where: {full_name: {_eq: "aa"}}, _set: {is_approved: true, is_verified: true}) {
      affected_rows
      returning {
        is_verified
        is_approved
      }
    }
  }
`;
export const DELETE_DOCTOR =gql`
mutation DeleteDoctor {
    delete_doctors(where: {id: {_eq: 10}}) {
      affected_rows
    }
  }
`;

  
