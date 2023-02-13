import {useQuery, gql} from '@apollo/client';

export const GET_NEW_DOCTORS = gql`
query QueryUnapprovedDoctors {
    doctors(where: {is_approved: {_eq: false}}) {
      id
      bio
      current_hospital
      date_of_birth
      email
      experience_year
      experiences {
        department
        designation
        end_date
        hospital_name
        start_date
      }
      licence
      licence_image {
        url
      }
      phone_number
      packages {
        voice
        video
        chat
      }
      profile_picture
      profile_image {
        url
      }
      sex
      speciallity
      speciallities {
        speciallity_name
      }
      user_name
    }
  }
`;

  