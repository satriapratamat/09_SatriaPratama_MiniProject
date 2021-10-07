import { gql, useQuery } from "@apollo/client";

export const getVendorName = gql`
  query MyQuery {
    vendor {
      id
      name
    }
  }
`;

export default function useVendorName() {
    const { data, loading, error} = useQuery(getVendorName);
    return {
      vendor: data ? data.vendor : [],
      loading,
      error
    };
  }