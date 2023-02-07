import {useMutation, gql} from '@apollo/client';

const appt= 10;
export const deleteAppointments = gql `
mutation deleteAppointments {
    delete_appointments(where: {id: {_eq: 10}}) {
      affected_rows
    }
  }
`
