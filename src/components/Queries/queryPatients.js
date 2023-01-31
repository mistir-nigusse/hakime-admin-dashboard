import {useQuery, gql} from '@apollo/client';

export const GET_PATIENTS = gql`
query AllPatients @cached {
    users(order_by: {created_at: asc}) {
        id
        full_name
        created_at
        profile_image {
          url
        }
        email
        sex
        phone_number
      }
  }`;
export function DisplayPatients() {
    const { loading, error, data } = useQuery(GET_PATIENTS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
  
    return (
    
     data.users.map(({ full_name,id, email, sex, phone_number, created_at }) => (
      <div key={id}>
        <h3>{full_name}{id}</h3>
        <p>{email}{sex}{phone_number}</p>
        <br />
      </div>
    )));
  }