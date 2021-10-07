import { gql } from 'react-apollo'


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

export const getHalfMinitron = gql`
  query MyQuery {
    half_minitron {
        id
        img
        caption
        id_product
      }
    }
`;

export const getVendorName = gql`
  query MyQuery {
    vendor {
      id
      name
    }
  }
`;

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