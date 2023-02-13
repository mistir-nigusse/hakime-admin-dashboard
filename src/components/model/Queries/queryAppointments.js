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

export const GET_UPCOMING_APPOINTMENTS = gql`
query queryConfirmedAppointments  @cached  {
  appointments(where: {status: {_eq: "confirmed"}}) {
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
`
export const GET_PENDING_APPOINTMENTS = gql`
query queryPendingAppointments @cached{
  appointments(where: {status: {_eq: "pending"}}) {
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
export const GET_CANCELLED_APPOINTMENTS = gql`
query queryPendingAppointments @cached{
  appointments(where: {status: {_eq: "cancelled"}})  @cached  {
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
