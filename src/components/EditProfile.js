import { React } from "react";
import EditProfileForm from "./EditProfileForm";
import UserDetails from "./UserDetails";
const EditProfile = () => {
    return (<>
        <div className="edit-prof">
            <div className="container">
                <div className="profile-wrapper manage-profile profile-main-div" style={{ display: 'flex' }}>
                    <UserDetails />
                    <EditProfileForm />
                </div>
            </div>
        </div>
    </>)
}
export default EditProfile;