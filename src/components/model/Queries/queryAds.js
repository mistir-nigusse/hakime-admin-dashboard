import {useQuery, gql} from '@apollo/client';

export const GET_ADS= gql`
query GET_BANNERS {
  banners {
    id
    start_date
    end_date
    image
    the_image {
      id
      url
    }
  }
}


  `;
