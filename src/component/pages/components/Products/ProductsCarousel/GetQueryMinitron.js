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

export const SubscriptionMinitron = gql`
  subscription MySubscription {
    minitron {
        id
        img
        caption
        id_product
      }
    }
`;

export default function useMinitron() {
    const { data, loading, error, subscribeToMore } = useQuery(getMinitron);
    const subscribeMinitron = () => {
      subscribeToMore({
        document: SubscriptionMinitron,
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
      minitron: data ? data.minitron : [],
      loading,
      error,
      subscribeMinitron,
    };
  }