import { gql, useQuery } from "@apollo/client";

export const getVendorName = gql`
  query MyQuery {
    vendor {
      id
      name
    }
  }
`;

export const SubscriptionVendor = gql`
  subscription MySubscription {
    vendor {
      id
      is_done
      title
    }
  }
`;

export default function useVendorName() {
    const { data, loading, error, subscribeToMore } = useQuery(getVendorName);
    const subscribeVendorName = () => {
      subscribeToMore({
        document: SubscriptionVendor,
        updateQuery: (prev, { subscriptionData: { data } }) => {
          console.log(data);
          //return data;
          // jika insert
          // prev.todolist.push(data.todolist)
          // return prev
        },
      });
    };
    return {
      vendor: data ? data.vendor : [],
      loading,
      error,
      subscribeVendorName,
    };
  }