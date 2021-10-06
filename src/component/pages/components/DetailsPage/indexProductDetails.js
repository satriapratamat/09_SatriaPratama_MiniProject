import React, { useEffect } from "react";
import LoadingSvg from "../LoadingSvg";
import { useLazyQuery, gql } from "@apollo/client";
import ProductDetails from "./ProductDetails";
import '../../../assets/css/DetailsPage.css';
import { Link, useParams } from 'react-router-dom';


export const getProductDetailsById = gql`
  query MyQuery ($id: Int!) {
    product (where: {id: {_eq: $id}}) {
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
function DetailsProductRow(){
    const {id} = useParams()
    const [getDetails, { data, loading, error }] = useLazyQuery(getProductDetailsById);
    console.log(getDetails)
    console.log(data)
    useEffect(() => {
        getDetails({
            variables: {id:id}
        });
    }, []);


    if (loading) {
        return <LoadingSvg/>
    }

    if (error) {
        console.log(error);
        return <h1>Gagal merender</h1>;
    }

    return(
        <>
        {data?.product.map((v, index) => (
            <ProductDetails
            key={index}
            id={v.id}
            name={v.name}
            type={v.type}
            price={v.price}
            image_url={v.image_url}
            spec_list1={v.spec_list1}
            spec_list2={v.spec_list2}
            spec_list3={v.spec_list3}
            spec_list4={v.spec_list4}
            brand={v.brand}
            capacity1={v.capacity1}
            capacity2={v.capacity2}
            capacity3={v.capacity3}
            color1={v.color1}
            color2={v.color2}
            color3={v.color3}
            desc_pic1={v.desc_pic1}
            desc_title1={v.desc_title1}
            desc_title2={v.desc_title2}
            desc_pic2={v.desc_pic2}
            desc_title3={v.desc_title3}
            desc_title4={v.desc_title4}
            />
        ))}
        </>
    )
}

export default DetailsProductRow;