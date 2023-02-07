import {useQuery, gql} from '@apollo/client';
export const GET_SPECIALLITIES = gql`
query QuerySpeciallities {
    speciallities {
      id
      speciallity_name
    }
  }
`;

  