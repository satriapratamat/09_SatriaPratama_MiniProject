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

export const SubscriptionJumbotron = gql`
  subscription MySubscription {
    jumbotron {
        id
        jumbo_img
        price
        subtitle
        title
        id_product
      }
    }
`;

export default function useJumbotron() {
    const { data, loading, error, subscribeToMore } = useQuery(getJumbotron);
    const subscribeJumbotron = () => {
      subscribeToMore({
        document: SubscriptionJumbotron,
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
      jumbotron: data ? data.jumbotron : [],
      loading,
      error,
      subscribeJumbotron,
    };
  }