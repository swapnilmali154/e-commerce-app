import React, { useEffect, useState } from 'react';
import { getData } from '../Services/ApiService';
import { Col, Row } from 'rsuite';
import Card from '../Components/Card';

const AllProducts = () => {

    const [allProductsList, setAllProductsList] = useState([]);


    const getAllProducts = () => {
        getData('GetAllProducts').then(result => {
            if(result !== undefined) {
                setAllProductsList(result);
            }
        })
    }

    useEffect(()=>{
        getAllProducts();
    }, [])

    return (
        <div>
           <Row>
            {allProductsList.map((product, index)=>{
                return (<Col md={6} sm={12} key={index}>
                    <Card productId={product.productId} name={product.productName} imageUrl={product.productImageUrl} price={product.productPrice} description={product.productDescription} categoryId={product.categoryId} categoryName={product.categoryName} />
                </Col>)
            })}
           </Row>
        </div>
    );
};

export default AllProducts;