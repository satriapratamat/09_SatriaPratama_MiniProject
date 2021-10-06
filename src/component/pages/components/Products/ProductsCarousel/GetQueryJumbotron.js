import { gql, useQuery } from "@apollo/client";

export const getJumbotron = gql`
  query MyQuery {
    jumbotron {
        jumbo_img
        price
        subtitle
        title
        id_product
      }
    }
`;


export default function useJumbotron() {
    const { data, loading, error} = useQuery(getJumbotron);
  
    return {
      jumbotron: data ? data.jumbotron : [],
      loading,
      error,
    };
  }