import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfileAction, getUserStatusAction } from "../store/actions/actions";
import ProfileForm from "./ProfileForm";
import UserDetails from "./UserDetails";
import { useEffect } from "react";
const Profile = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const loginToken = JSON.parse(localStorage.getItem('token'))
        if (loginToken)
        getMyProfileAction(dispatch)
        getUserStatusAction(dispatch)
        // getMyProfileAction(dispatch)
    }, [])
    return (<>
        <div className="edit-prof">
            <div className="container">
                <div className="profile-wrapper manage-profile profile-main-div" style={{ display: 'flex' }}>
                    <UserDetails />
                    <ProfileForm />
                </div>
            </div>

        </div>
    </>)
}
export default Profile