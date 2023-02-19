import {useQuery, gql} from '@apollo/client';
import { useState, useEffect} from 'react';



export const GET_DOCTORS = gql`
query GetDoctors {
  doctors {
    id
    full_name
    sex
    speciallity
    phone_number
    rate
    current_hospital
    experience_year
    is_verified
    created_at
    speciallities{
      speciallity_name
    }
    profile_image {
      url
    }
  }
} `;

export const GET_DOCTORS_OVERVIEW = gql`
query queryDoctorsOverview  @cached {
  doctors(limit: 8) {
    id
    full_name
    speciallities {
      speciallity_name
    }
    profile_image {
      url
    }
  }
}
`