import { gql, useQuery, useLazyQuery } from "@apollo/client";
import { useEffect } from "react";

export const getProductDetailsById = gql`
  query MyQuery {
    product {
        id
        name
        type
        price
        in_stock
        image_url
        spec_list1
        spec_list2
        spec_list3
        spec_list4
        brand
        capacity1
        capacity2
        capacity3
        color1
        color2
        color3
        desc_pic1
        desc_title1
        desc_title2
        desc_pic2
        desc_title3
        desc_title4
    }
  }
`;

export const SubscriptionProductDetailsById = gql`
  subscription MySubscription {
    vendor {
        id
        name
        type
        price
        in_stock
        image_url
        spec_list1
        spec_list2
        spec_list3
        spec_list4
        brand
        capacity1
        capacity2
        capacity3
        color1
        color2
        color3
        desc_pic1
        desc_title1
        desc_title2
        desc_pic2
        desc_title3
        desc_title4
    }
  }
`;

export default function useProductDetailsById() {
    const { data, loading, error, subscribeToMore } = useQuery(getProductDetailsById);
    const subscribeProductDetailsById = () => {
      subscribeToMore({
        document: SubscriptionProductDetailsById,
        updateQuery: (prev, { subscriptionData: { data } }) => {
          console.log(data);
        },
      });
    };
    return {
        product: data ? data.product : [],
        loading,
        error,
        subscribeProductDetailsById
    };
  }