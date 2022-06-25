import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../assets/images/bazar-new-png.png'
import { getCategoryAction, getAddCartAction } from "../store/actions/actions";
import Sign from "./Sign";
import Signup from "./Signup";
const Header = ({ item }) => {
    const [sign, setSign] = useState(false);
    const [login, setLogin] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const categoryData = useSelector((state) => state.categoryReducer?.categoryData)
    const myProfileData = useSelector((state) => state.myProfileReducer?.myProfileData)
    // for user Details my profile
    // for cart total item
    const getCartData = useSelector((state) => state.getCartReducer?.getCartData)
    console.log("categoryData11", categoryData)
    console.log("myProfileData?.userdata?._id", myProfileData?.userdata?._id, myProfileData?.userdata?.first_name)

    var Totalcart
    const loginToken = JSON.parse(localStorage.getItem('token'))
    if (loginToken) {
        Totalcart = getCartData?.length > 0 ? getCartData?.length : null
        console.log("Api Total cart count", Totalcart)

    }
    else {
        if (localStorage.getItem('bazar_cart')) {
            var Totalcart1 = JSON.parse(localStorage.getItem('bazar_cart'))
            var Totalcart = Totalcart1?.length > 0 ? Totalcart1?.length : null
            console.log("LocalStorage Total cart count", Totalcart)

        }
    }
    useEffect(() => {
        getCategoryAction(dispatch)
        console.log("categoryData11", categoryData)
    }, [dispatch])
    const logoutBtn = () => {
        // for remove token 
        localStorage.removeItem('token')
        // for refresh Page 
        navigate('/')
        window.location.reload(false);
    }
    let LocalStorageValues = JSON.parse(localStorage.getItem('bazar_cart'))
    console.log("SellerId from LocalStorage", LocalStorageValues)
    /*   console.log("SellerId from LocalStorage", LocalStorageValues[0]?.SellerId[0]?._id) */
    if (loginToken && LocalStorageValues) {
        getAddCartAction((dispatch), {
            "cart": [{
                product_id: LocalStorageValues[0]?._id,
                save_for_later: false,
                sellerId: LocalStorageValues[0]?.SellerId[0]?._id,
                // user_id: myProfileData?.userdata?._id
            }]
        })
        localStorage.removeItem('bazar_cart')
    }
    return (<>
        <header className="header">
            <div className="top-btn" id="scroll-to-top"><button className="top-link"><i className="fal fa-angle-up"></i>
            </button></div><span notificationcount="100" className="ant-badge">
                <div className="header-login">
                    <div className="container">
                        <div className="login">
                            <div>
                                <span className="logo-class"> <Link to={"/"}><img src={Logo} alt="Bazaar" /></Link></span>
                            </div>
                            <div className="search-brand">
                                <form>
                                    <div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-1" aria-expanded="false" className="react-autosuggest__container">
                                        <input type="text" autocomplete="off" aria-autocomplete="list"
                                            aria-controls="react-autowhatever-1" className="react-autosuggest__input"
                                            placeholder="Search for anything" />
                                        <div id="react-autowhatever-1" role="listbox"
                                            className="react-autosuggest__suggestions-container"></div>
                                    </div>
                                </form><i className="icon-search"></i>
                            </div>
                            {!localStorage.getItem('token') ?
                                < div className="custom-signing">
                                    <button className="signing-in shop-now" onClick={() => setLogin(true)}>Sign In</button>
                                    <button onClick={() => setSign(true)} className=" shop-now">Sign Up</button>
                                </div> : <div>
                                    < div className="signup-register">
                                        <div className="download-app"><a href="/profile/wishList"><span className="header-text"><i
                                            className="fas fa-heart"></i></span></a></div>
                                        <div className="download-app"><a className="wish-list msg-number" href="/profile/notification"><span className="header-text"><i
                                            className="fas fa-bell"></i></span></a></div>
                                        <div className="download-app"><span className="header-text"> < i className="fa-comment-alt fas"></i></span>
                                        </div>
                                        <div className="userName-container ">
                                            <div className="signin-register"><span className="profile-name"><i className="fa fa-user" aria-hidden="true"></i><img
                                            /><span className="profile-user">Hi
                                                    {myProfileData?.userdata?.first_name}</span></span></div>
                                            <div className="logout-container">
                                                <div className="logout-profile-wrap">
                                                    <div className="profile-img"><img /* src="http://10.0.4.26:60601/public/images/default-avatar.jpg" */ /></div>
                                                    <div className="profile-description">
                                                        <h4>{myProfileData?.userdata?.first_name}</h4><a href="tel:1234567890">{myProfileData?.userdata?.mobile}</a>
                                                    </div>
                                                </div>
                                                <div><a href="/profile"><i className="fa fa-user" aria-hidden="true"></i> My Profile</a></div>
                                                <div><a href="/profile/change-password"><i className="fa fa-key" aria-hidden="true"></i> Change Password</a>
                                                </div>
                                                <div onClick={logoutBtn}><span className="logout-link"><i className="fa fa-sign-out" aria-hidden="true"></i> Log Out</span></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            }
                            <div className="cart-wrap"><Link className="wish-list msg-number" to="/my-cart">
                                <div className="tooltip">Cart</div><i className="fa fa-shopping-cart"> <span style={{ borderRadius: '50%', backgroundColor: 'red' }}>{Totalcart}</span> </i></Link></div>
                        </div>
                    </div>
                </div>
            </span>
            <div className="header-menu">
                <div className="container">
                    <div className="main-menu"><span className="menu-strip"><span></span></span>
                        <div className="hamburger-menu">
                            <div className="overlay"></div>
                            <ul className="menu"><i className="fa fa-times" aria-hidden="true"></i>
                                <div className="custom-signing-wrap">
                                    {/*  sign and login logout btn show depend on condtions */}

                                </div>
                                {
                                    categoryData ? categoryData.data.map((e) => {
                                        return <li className="sublist-menu brand-sub-menu "><span><Link to={`/product-listing-page/${e.slug}?category=${e.slug}`}>{e.name}</Link></span> <ul className="sub-menu "></ul></li>
                                    }) : null
                                }
                                { /* <li className="sublist-menu"><Link className="sublist-menu" to="/product-listing-page/Handmade?category=handmade">Handmade</Link></li>
                                <li className="sublist-menu"><Link className="sublist-menu" to="/product-listing-page/Sports?category=sports">Sports</Link></li>
                                <li className="sublist-menu"><Link className="sublist-menu" to="/product-listing-page/Vintage?category=vintage">Vintage</Link></li>
                                <li className="sublist-menu"><Link className="sublist-menu" to="/product-listing-page/Kids?category=kids">Kids</Link> </li>
                                <li className="sublist-menu"><Link className="sublist-menu" to="/product-listing-page/Beauty?category=beauty">Beauty</Link></li>
                                <li className="sublist-menu"><Link className="sublist-menu" to="/product-listing-page/Home?category=home">Home</Link></li>
                                <li className="sublist-menu"><Link className="sublist-menu" to="/product-listing-page/Toys?category=toys">Toys</Link></li>
                                <li className="sublist-menu"><Link className="sublist-menu" to="/product-listing-page/Electronics?category=electronics">Electronics</Link></li>
                                <li className="sublist-menu"><Link className="sublist-menu" to="/product-listing-page/Men?category=men">Men</Link></li>
                                {/*  <li className="sublist-menu ">Local</li> */}
                                {/*   <li className="sublist-menu popular"><Link className="" to="/product-listing-page/Popular?category=Popular">Popular</Link></li> */}
                                {/* <li className="sublist-menu other "><span className="">Other</span></li> */}
                                {/*   <li className="header-seller">
                                    <div className="header-sell"><a to="/sell-product"><span className="sell-text"><a to="/sellerRegistration"><span className=" sell-text">Register as a seller</span></a></span></a></div>
                                </li> */}
                                {/* <a className="shop-now register-seller">Register as a seller</a> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {sign && <Signup onClose={setSign} signClose={setLogin} />}
            {login && <Sign onClose={setLogin} signupClose={setSign} />}
            {/*   <div className="mobile-header-address header-address">
                <div className="product-location-wraps">
                    <div className="product-location">
                        <div className="location-mark"><i className="fas fa-map-marker-alt"></i>
                            <div className="location-text">Deliver to Select location</div>
                        </div>
                    </div>
                </div>
            </div> */}
        </header >
    </>)
}
export default Header;