import React from "react";

import UserDetails from "./UserDetails";
const Wishlist = () => {
    return (<>
        <div className="edit-prof">
            <div className="container">
                <div className="profile-wrapper manage-profile profile-main-div" style={{ display: 'flex' }}>
                    <UserDetails />
                    <div className="right-prof-sec">
                        <div className="container">
                            <div className="wishlist-section" style={{ position: 'relative' }}>
                                <h2>Wishlist</h2>
                                <div className="plp-product-screen" style={{ opacity: '1' }}>
                                    <div className="costume-box">
                                        <div className="costume-block"><a target="_blank" className="product-pack"
                                            href="/product/Vintage/6242f7fe7600731a506105ac/?cat=vintage">
                                            <div className="costumes"><img
                                                src="https://inszn-ecom.s3.amazonaws.com/e7c97f26-3ad9-4e09-8474-208460ea743a.png"
                                                alt="costume-img" /></div>
                                        </a>
                                            <div className="wishlist-btns">
                                                <div className="add-cart-wishlist">Add To Cart</div>
                                                <div className="remove-wishlist">Remove</div>
                                            </div>
                                        </div><a target="_blank" href="/product/Vintage/6242f7fe7600731a506105ac/?cat=vintage">
                                            <div className="costume-info"><strong>fggfgf</strong></div>
                                        </a>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>



    </>)
}
export default Wishlist;