import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
/* import { Navigate } from "react-router-dom"; */

import { getAddCartAction, getLocalStorageAction, getMyProfileAction, getProductByIdAction } from "../store/actions/actions";
const Product = () => {
    const { id } = useParams()
    var navigate = useNavigate();
    const dispatch = useDispatch()
    const productIdData = useSelector((state) => state.productIdReducer?.productIdData)
    const myProfileData = useSelector((state) => state.myProfileReducer?.myProfileData)
    console.log('productIdData', productIdData)
    // console.log("idSlug", id)
    console.log("myProfileData", myProfileData)
    console.log("myprofileUserId", myProfileData?.userdata?._id)
    //console.log("sellerId", productIdData?.data[0]?.userData[0]?._id)
    useEffect(() => {
        getProductByIdAction(dispatch, id)
        getMyProfileAction(dispatch)
    }, [])
    // add to cart Button 
    let requiredData;
    const addToCart = () => {
        const loginToken = JSON.parse(localStorage.getItem('token'))
        if (loginToken) {
            getAddCartAction((dispatch), {
                "cart": [{
                    product_id: id,
                    save_for_later: false,
                    sellerId: productIdData?.data[0]?.userData[0]?._id,
                    user_id: myProfileData?.userdata?._id
                }]
            })
            /*  alert("Already User Logged") */
            navigate('/my-cart')
            // console.log("sellerId", productIdData.data.userData[0]?._id)
        }
        else {
            //alert(" Please Login Account!")
            requiredData = {
                BrandData: productIdData?.data[0]?.brandData,
                Save_for_later: false,
                productData: [{
                    Price: productIdData?.data[0]?.Price,
                    Image: productIdData?.data[0]?.Image,
                }],
                SellerId: productIdData?.data[0]?.userData,
                _id: productIdData?.data[0]?._id,
                user_id: myProfileData?.userdata?._id
            }
            if (localStorage.getItem('bazar_cart')) {
                let localItem = JSON.parse(localStorage.getItem("bazar_cart"))
                if (localItem) {
                    localStorage.setItem('bazar_cart', JSON.stringify([...localItem, requiredData]))
                    navigate('/my-cart')
                }
            }
            else {
                localStorage.setItem("bazar_cart", JSON.stringify([requiredData]))

            }
            getLocalStorageAction(dispatch, id)
        }
    }
    return (<>
        {productIdData?.data ? productIdData.data.map((item) => {
            return <div className="plp-wrap">
                <div className="plp-product-screen">
                    <div className="costume-box">
                        <div className="costume-block">
                            <div className="costume-action"><span className="wish"><i className="icon-wishlist "></i></span></div>
                            <div
                                className="product-pack"
                            ><img style={{ width: '100px' }} src={item.Image[0].original} />
                            </div>
                        </div>
                        <div className="costume-info my-list">
                            <div className="product-name"><strong className="prod-name">{item.Title}</strong>
                                <div className="free-ship-wrap"></div>
                            </div>
                            <div className="brand"> {item.brandData[0].name}</div>

                            <p>
                                <div className="costs-wrap"><span className="buy-info">{item.Price.current_store_price.$numberDecimal}</span><span className="old-price">{item.Price.sell_price.$numberDecimal}</span>
                                </div><span className="discount">11% OFF</span></p>
                        </div>

                        <div className="btn-wrap">
                            <div className="pro-btn-wrap"><Link to={''} className=" complete-purchase btn-shop"
                                style={{ marginRight: "10px", padding: 'unset' }}><button className="complete-purchase"
                                    style={{ borderLeft: '0px', borderRight: '0px' }}>Buy Now</button></Link><button onClick={addToCart} className="complete-purchase">
                                    Add to cart</button></div>
                            <div className="pro-btn-wrap"><button className="complete-purchase make-offer" style={{ marginRight: '10px' }}>Make an
                                Offer</button><button className="complete-purchase msg-seller">Message seller</button></div>
                        </div>
                    </div>
                </div>
            </div>

        }) : null}


    </>)
}
export default Product;