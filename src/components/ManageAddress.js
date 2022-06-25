import React from "react";
import Address from "./Address";
import UserDetails from "./UserDetails";
const ManageAddress = () => {
    return (<>
     <div className="edit-prof">
            <div className="container">
                <div className="profile-wrapper manage-profile profile-main-div" style={{ display: 'flex' }}>
                   <UserDetails/>
                   <Address/>
                </div>
            </div>
        </div>
    </>)
}
export default ManageAddress;