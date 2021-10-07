import { gql, useQuery } from "@apollo/client";

export const getHalfMinitron = gql`
  query MyQuery {
    half_minitron {
        id
        img
        caption
        id_product
      }
    }
`;

export default function useHalfMinitron() {
    const { data, loading, error} = useQuery(getHalfMinitron);
  
    return {
        half_minitron: data ? data.half_minitron : [],
        loading,
        error
    };
  }