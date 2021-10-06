import { gql, useQuery } from "@apollo/client";

export const getTestimonial = gql`
  query MyQuery {
    testimonial {
        id
        ava
        name
        username
        they_say
      }
    }
`;

export default function useTestimonial() {
    const { data, loading, error} = useQuery(getTestimonial);
    
    return {
      testimonial: data ? data.testimonial : [],
      loading,
      error
    };
  }