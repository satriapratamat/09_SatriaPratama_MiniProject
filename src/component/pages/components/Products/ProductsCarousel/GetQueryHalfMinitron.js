import { gql, useQuery } from "@apollo/client";

export const getHalfMinitron = gql`
  query MyQuery {
    half_minitron {
        id
        img
        caption
      }
    }
`;

export const SubscriptionHalfMinitron = gql`
  subscription MySubscription {
    half_minitron {
        id
        img
        caption
      }
    }
`;

export default function useHalfMinitron() {
    const { data, loading, error, subscribeToMore } = useQuery(getHalfMinitron);
    const subscribeHalfMinitron = () => {
      subscribeToMore({
        document: SubscriptionHalfMinitron,
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
        half_minitron: data ? data.half_minitron : [],
        loading,
        error,
        subscribeHalfMinitron,
    };
  }