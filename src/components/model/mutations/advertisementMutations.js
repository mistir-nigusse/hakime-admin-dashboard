import {useMutation, gql} from '@apollo/client';

export const DELETE_BANNER =gql`
mutation DeleteBanner {
    delete_banners(where: {id: {_eq: 10}}) {
      affected_rows
      returning {
        id
        is_active
      }
    }
  }
`;
export const INSERT_BANNER =gql`
mutation InsertBanner($banner : String!){
    insert_banners(objects: {end_date: $banner, is_active: true, start_date: "9/02/2025", image: 17}) {
      affected_rows
      returning {
        image
      }
    }
   
  }
`;
export const UPDATE_BANNER =gql`
mutation UpdateBanner {
    update_banners(where: {id: {_eq: 10}}, _set: {image: "zzfg", is_active: true, start_date: "jkk", end_date: "nmlk"}) {
     affected_rows
     returning {
       end_date
       id
       image
       is_active
       start_date
     }
   }
 }
 
`;


  
 
