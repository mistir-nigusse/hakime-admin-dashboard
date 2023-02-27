import {useQuery, gql} from '@apollo/client';
export const GET_SPECIALLITIES = gql`
query WithdrawalRequest {
    withdrawals (order_by: {created_at: desc}) {
      id
      amount
      created_at
      doctor_id
      doctor {
        full_name
        wallet
        bank_informations {
          account_number
          bank_name
        }
      }
    }
  }
`;
export const GET_WITHDRAWAL_REQUEST = gql`
query withdrawalRequest{
  withdrawals (order_by: {created_at: desc}, where: {status: {_eq: "pending"}})  {
    id
    doctor {
      wallet
      full_name
      bank_informations {
        bank_name
        account_number
      }
    }
    amount
    status
  }
}

`;

  

