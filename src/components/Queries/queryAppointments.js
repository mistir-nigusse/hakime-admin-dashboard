import {useQuery, gql} from '@apollo/client';

export const GET_APPOINTMENTS = gql`
query AppointmentQuery @cached {
  appointments(order_by: {created_at: asc}) {
    id
    doctor {
      full_name
    }
    patient {
      full_name
    }
    time
    status
    price
  }
}

  `;
