import { gql, useQuery } from "@apollo/client";

export const getProduct = gql`
  query MyQuery {
    product {
        id
        type
        name
        image_url
        price
      }
    }
`;


export default function useProduct() {
    const { data, loading, error} = useQuery(getProduct);
    return {
      product: data ? data.product : [],
      loading,
      error
    };
  }