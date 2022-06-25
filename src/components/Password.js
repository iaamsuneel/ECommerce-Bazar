import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEditProfileAction, getMyProfileAction, getUserStatusAction } from "../store/actions/actions";
const Password = () => {
    const dispatch = useDispatch()
    const myProfileData = useSelector((state => state.myProfileReducer?.myProfileData))
    useEffect(() => {
        getMyProfileAction(dispatch)
    }, [])
    console.log("myProfileData ", myProfileData)
    const submit = (e) => {
        e.preventDefault()
        const changePassWordPayload = {
            currentPassword: e.target.password.value,
            newPassword: e.target.newpassword.value,
            confirmPassword: e.target.cpassword.value,
            full_name: myProfileData?.userdata?.full_name,
            mobile: myProfileData?.userdata?.mobile,
            date_of_birth: myProfileData?.userdata?.dob,
            userId: myProfileData?.userdata?._id,
        }
        getEditProfileAction(dispatch, changePassWordPayload);
        getUserStatusAction(dispatch);
    }
    return (<>
        <div className="right-prof-sec">
            <div className="container">
                <div style={{ position: 'relative' }} >
                    <div style={{ opacity: '1' }} >
                        <form className="detail-from" onSubmit={submit}>
                            <h4 className="form-title">My profile</h4>
                            <div className="group-wrap edit-profile">
                                <div className="form-input"><span>Current Password</span><input name="password" type="password"
                                    placeholder="Current Password" required="" /><i
                                        className="toggle-password fa fa-fw fa-eye-slash"></i></div>
                                <div className="form-input"><span>New Password</span><input name="newpassword" type="password" required=""
                                    placeholder="New Password" minlength="6" maxlength="15" /><i
                                        className="toggle-password fa fa-fw fa-eye-slash"></i></div>
                                <div className="form-input"><span>Confirm Password</span><input name="cpassword" type="password" required=""
                                    placeholder="Confirm Password" minlength="6" maxlength="15" /><i
                                        className="toggle-password fa fa-fw fa-eye-slash"></i></div>
                            </div>
                            <div className="flex-row"><button type="submit" className="header-sell">Change Password</button><Link
                                className="header-sell" to="/profile">Back</Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Password;