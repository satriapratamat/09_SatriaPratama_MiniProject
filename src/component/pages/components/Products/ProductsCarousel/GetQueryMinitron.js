import { gql, useQuery } from "@apollo/client";

export const getMinitron = gql`
  query MyQuery {
    minitron {
        id
        img
        caption
        id_product
      }
    }
`;


export default function useMinitron() {
    const { data, loading, error} = useQuery(getMinitron);

    return {
      minitron: data ? data.minitron : [],
      loading,
      error
    };
  }