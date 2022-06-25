import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetProductAction } from "../store/actions/actions";
import ProductCard from "../components/productCard";
import Filter from "../components/Filter";

const ProductList = () => {
    const dispatch = useDispatch()
    const productListData = useSelector((state) => state.productListReducer?.productListData)
    const attributeByCatData = useSelector((state) => state.attributeCatByIdReducer?.attributeByCatData)
    console.log("attributeByCatData=", attributeByCatData)
    console.log("categoryData11", productListData)
    const { slug } = useParams()
    useEffect(() => {
        GetProductAction(dispatch, { category: [slug] })
    }, [slug])

    /* console.log("categoryId", productListData?.data[0].categoryData._id) */
    console.log("FilterData", productListData?.FilterData)
    return (<>

        <div className="plp-main-screen mainlisting-wrap">

            <Filter />
            <div className="card-product" >
                {productListData?.data ? productListData.data.map((e, index) => {
                    return <div key={index}>
                        <ProductCard item={e} />
                    </div>
                }) : null}
            </div>
        </div>
    </>)
}
export default ProductList