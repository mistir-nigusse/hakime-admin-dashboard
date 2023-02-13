import {useQuery, gql} from '@apollo/client';

export const AllDoctorsQuery = gql `
query AllDoctors {
    doctors {
      id
    }
  }
  query NewDoctors {
    doctors(where: {is_approved: {_eq: false}}) {
      id
    }
  }
`;

export const NewDoctorsQuery = gql `
query NewDoctors {
    doctors(where: {is_approved: {_eq: false}}) {
      id
    }
  }
`;
export const queryRequest =gql`
query queryRefund {
  refunds {
    id
  }
}
`;
export const queryWithdrawals =gql`
query queryWithdrawals {
  withdrawals {
    id
  }
}
`;

export const queryAppointments = gql `
query queryAppointments {
  appointments {
    id
  }
}
`;
export const queryConfirmedAppointments = gql `
query queryAppointments {
    appointments(where: {status: {_eq: "confirmed"}}) {
    id
  }
}
`;