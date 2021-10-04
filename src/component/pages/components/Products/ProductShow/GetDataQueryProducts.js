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

export const SubscriptionProduct = gql`
  subscription MySubscription {
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
    const { data, loading, error, subscribeToMore } = useQuery(getProduct);
    const subscribeProduct = () => {
      subscribeToMore({
        document: SubscriptionProduct,
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
      product: data ? data.product : [],
      loading,
      error,
      subscribeProduct,
    };
  }