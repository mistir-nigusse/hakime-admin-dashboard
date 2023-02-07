import {useQuery, gql} from '@apollo/client';
export const GET_SPECIALLITIES = gql`
query WithdrawalRequest {
    withdrawals {
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


  