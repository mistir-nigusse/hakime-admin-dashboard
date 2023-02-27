import {useQuery, gql} from '@apollo/client';
import { useState, useEffect} from 'react';



export const GET_DOCTORS = gql`
query GetDoctors {
  doctors (where: {is_approved: {_eq: true}})  {
    id
    full_name
    sex
    speciallity
    phone_number
    rate
    current_hospital
    experience_year
    is_verified
    is_suspended
    created_at
    speciallities{
      speciallity_name
    }
    profile_image {
      url
    }
  }
} `;
export const GET_DOCTOR_DETAIL = gql`
query GetDoctors ($id:Int!) {
  doctors (where: {id: {_eq: $id}})  {
    id
    full_name
    sex
    speciallity
    phone_number
    rate
    current_hospital
    experience_year
    is_verified
    is_suspended
    created_at
    speciallities{
      speciallity_name
    }
    profile_image {
      url
    }
    wallet
    reviews{
      user {
        full_name
      }
      review
      rate
    }
    rate
    bank_informations {
      bank_name
      account_number
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
export const GET_DOCTOR_BY_ID = gql`
  query GET_DOCTOR_BY_ID ($id:Int!){
    doctors(where: {id: {_eq: $id}}) {
      id
      bio
      created_at
      current_hospital
      email
      date_of_birth
      experience_year
      experiences {
        department
        designation
        end_date
        hospital_name
        start_date
      }
      full_name
      licence
      phone_number
      profile_image {
        url
      }
      image {
        url
      }
    }
  
} `;

