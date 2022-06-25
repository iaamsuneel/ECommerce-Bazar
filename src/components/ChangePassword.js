import React from "react";
import Password from "./Password";
import UserDetails from "./UserDetails";

const ChangePassword = ()=>{
    return(<>
      <div className="edit-prof">
            <div className="container">
                <div className="profile-wrapper manage-profile profile-main-div" style={{ display: 'flex' }}>
                    <UserDetails />
                   <Password/>
                </div>
            </div>
        </div>

    </>)
}
export default ChangePassword;