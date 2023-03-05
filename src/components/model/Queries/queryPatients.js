import {useQuery, gql} from '@apollo/client';

export const GET_PATIENTS = gql`
query AllPatients {
    users(order_by: {created_at: asc}) {
        id
        full_name
        created_at
        profile_image {
          url
        }
        appointments {
          id
        }
        email
        sex
        phone_number
      }
  }`;
