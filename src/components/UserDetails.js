import React from "react";
const UserDetails = () => {
    return (<>
        <div className="prof-nav hidden">
            <div className="profile-left-panel">
                <div className="profile-div">
                    <figure className="profile-img"><img src="http://10.0.4.26:60601/public/images/default-avatar.jpg"
                        alt="user" /><i className="fas fa-plus-circle"></i></figure>
                    <div yle="[object Object]"><input type="file" id="uploadProfile" accept=".jpg,.png,.jpeg" /></div>
                    <a href="/profile"><span className="profile-name">Suneel Yadav</span></a><button
                        className="header-sell"><i className="fas fa-power-off"></i>Log Out</button>
                </div>
                <div className="left-item-list"><a className="" href="/profile/manage_address"><i
                    className="fa fa-address-card"></i><span>Manage Address</span></a><a className=""
                        href="/profile/my-offer"><i className="fas fa-box-open"></i><span>My Offer</span></a><a
                            className="active-tab" href="/profile/wishList"><i className="fas fa-heart"></i><span>My
                                WishList</span></a><a className="" href="/profile/myorder"><i
                                    className="fas fa-box-open"></i><span>My Orders</span></a><a className=""
                                        href="/profile/review"><i className="fas fa-star"></i><span>Review</span></a><a className=""
                                            href="/profile/notification"><i className="fas fa-bell"></i><span>Notifications</span></a></div>
            </div>
        </div>
    </>)
}
export default UserDetails;