import {useSubscription, gql} from '@apollo/client';

export const AllDoctorsSubscriptions = gql `
subscription AllDoctors {
    doctors {
      id
    }
  }
`;

export const NewDoctorsSubscriptions = gql `
subscription NewDoctors {
    doctors(where: {is_approved: {_eq: false}}) {
      id
    }
  }
`;
export const subscriptionRequest =gql`
subscription subscriptionRefund {
  refunds {
    id
  }
}
`;
export const subscriptionWithdrawals =gql`
subscription subscriptionWithdrawals {
  withdrawals {
    id
  }
}
`;

export const subscriptionAppointments = gql `
subscription subscriptionAppointments {
  appointments {
    id
  }
}
`;
export const subscriptionConfirmedAppointments = gql `
subscription subscriptionAppointments {
    appointments(where: {status: {_eq: "confirmed"}}) {
    id
  }
}
`;