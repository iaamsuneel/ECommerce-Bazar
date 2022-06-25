import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishListAction, getCartAction, getDeleteAction, getLocalStorageAction } from "../store/actions/actions";
import emptyCartIcon from '../assets/images/no-product.png'
const Addcart = () => {

    const dispatch = useDispatch()
    let getCartData = useSelector((state) => state.getCartReducer?.getCartData)
    let getLocalStoragId = useSelector((state) => state.getLocalStorageReducer?.getLocalStoragId)
    console.log("getCartData", getCartData)
    console.log("getLocalStorageId ", getLocalStoragId)
    if (!localStorage.getItem("token")) {
        getCartData = JSON.parse(localStorage.getItem("bazar_cart"))
    }
    useEffect(() => {

    }, [getLocalStoragId])
    console.log("getCartDataLocalStorage", getCartData)
    useEffect(() => {
        getCartAction(dispatch, { userId: getCartData?.user_id })
    }, [])
    const cartId = getCartData?._id;
    console.log("cartIddd", cartId)
   // const productId = getCartData?.productData[0]
   // console.log('productId',productId);

    const wishListBtn = (id) => {
       addToWishListAction(dispatch,{productId:id})
       getDeleteAction(dispatch, { cartId: id })

    }
    const deleteBtn = (id) => {
        const loginToken = JSON.parse(localStorage.getItem('token'))
        alert('Do you want to remove this product from Cart ?')
        if (loginToken) {
            getDeleteAction(dispatch, { cartId: id })
        }
        else {
            getCartData = JSON.parse(localStorage.getItem("bazar_cart"))
            console.log("deleteBtn", getCartData)
            let index = getCartData.findIndex(element => element._id === id)
            console.log("index index", index)
            let copygetCartData = [...getCartData]
            copygetCartData.splice(index, 1)
            localStorage.setItem("bazar_cart", JSON.stringify(copygetCartData))
            getLocalStorageAction(dispatch, id + 1)
        }

    }
   

    return (<>
        <div className="container ">
            {getCartData?.length > 0 ?
                <div>
                    <div className="cart-caption">
                        <h4> {getCartData?.length} item in your cart </h4>
                        <h6>Taxes may apply for certain state </h6>
                    </div>
                    {getCartData?.map((e, index) => {

                        return <div key={index} className="cartsection">
                            <div>
                                {/*  <Header item={e.data.length}/> */}

                                <div key={index} className="">
                                    <div className="cartmenu cart-itemlist cart-list-item">
                                        <div className="cart-product ">
                                            <figure><img style={{ width: '100px' }} src={e.productData[0]?.Image[0]?.original} />
                                            </figure>
                                        </div>
                                        <div className="cart-product-text" style={{ Display: 'flex', flexDirection: 'column', width: '80%' }}>
                                            <div className="cart-base" style={{ Display: 'flex' }}>
                                                <div className="cart-des"><span className="brandName">{e.Title}</span><br />

                                                    <span
                                                        className="product-name">{e.BrandData[0].name}</span> <br /> <span
                                                            className="price"> <br /><span> Rs {e.productData[0].Price.sell_price.$numberDecimal}</span><span className="old-price">Rs {e.productData[0].Price.current_store_price.$numberDecimal} </span></span>
                                                    <div className="pay-wrap"><button onClick={() =>{ wishListBtn(e._id) }} className="shop-now">Move to wishlist</button></div> <br />
                                                    <div className="pay-wrap"><button onClick={() => { deleteBtn(e._id) }} className="shop-now">Delete</button></div>
                                                </div>
                                                {/*   <div className="delete-cart-product" style={{ width: '20%' }} ><span className="delete-product"><img
                                        src="/assets/images/delete-icon.png" alt="trash-icn" /></span></div> */}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="cart-bottom">
                                    <h6 className="cart-total"><span>Total</span> ₹ 447</h6><a href="/my-cart"><button className="shop-now">Proceed
                                        to checkout</button></a>
                                </div>
                            </div>
                        </div>
                    })

                    }

                </div>
                :
                <div>
                    <div class="greybg">
                        <div className="container ">
                            <div className="cartsection">
                                <div className="cart-caption">
                                    <div className="product-head">
                                        <div className="product-img"><img src={emptyCartIcon} alt="img" /></div>
                                        <h6> Add Product in Your Cart</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    </>)
}
export default Addcart;