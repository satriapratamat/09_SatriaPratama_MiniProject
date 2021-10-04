import { gql, useQuery } from "@apollo/client";

export const getTestimonial = gql`
  query MyQuery {
    testimonial {
        id
        ava
        name
        username
        they_say
      }
    }
`;

export const SubscriptionTestimonial = gql`
  subscription MySubscription {
    testimonial {
        id
        ava
        name
        username
        they_say
      }
    }
`;

export default function useTestimonial() {
    const { data, loading, error, subscribeToMore } = useQuery(getTestimonial);
    const subscribeTestimonial = () => {
      subscribeToMore({
        document: SubscriptionTestimonial,
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
      testimonial: data ? data.testimonial : [],
      loading,
      error,
      subscribeTestimonial,
    };
  }