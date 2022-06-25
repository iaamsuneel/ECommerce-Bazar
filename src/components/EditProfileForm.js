import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEditProfileAction, getMyProfileAction } from "../store/actions/actions";
import { useSelector, useDispatch } from "react-redux";
const EditProfileForm = () => {
    const dispatch = useDispatch()
    const myProfileData = useSelector((state => state.myProfileReducer?.myProfileData))
    useEffect(() => {
        const loginToken = JSON.parse(localStorage.getItem('token'))
        if (loginToken)
            getMyProfileAction(dispatch)
        // getMyProfileAction(dispatch)
    }, [])
    const submit = (e) => {
        e.preventDefault()
        const payloadData = {
            first_name: e.target.first_name.value,
            gender: e.target.gender.value,
            last_name: e.target.last_name.value,
            mobile: e.target.mobile.value,
            date_of_birth: e.target.dob.value,
        }
        getEditProfileAction(dispatch, payloadData)
        getMyProfileAction(dispatch)
    }
    return (<>
        <div className="right-prof-sec">
            <div className="container">
                <div style={{ position: 'relative' }}>
                    <div style={{ opacity: '1' }}>
                        <form autocomplete="off" className="detail-from" onSubmit={submit}>
                            <h4 className="form-title">My profile</h4>
                            <div className="group-wrap edit-profile">
                                <div className="form-input"><span>First Name</span>
                                    <input type="text"
                                        name="first_name"
                                        defaultValue={myProfileData?.userdata?.first_name}
                                        required="" minlength="3"
                                        maxlength="50" placeholder="Name*" /></div>
                                <div className="form-input"><span>Last Name</span><input type="text" name="last_name" required="" minlength="3"
                                    maxlength="50" placeholder="Name*" defaultValue={myProfileData?.userdata?.last_name} /></div>
                                <div className="form-input"><span>Email Address</span><input type="email" required=""
                                    placeholder="Email Address*" disabled="" value={myProfileData?.userdata?.email} /></div>
                                <div className="form-input edit-form-input"><span>Mobile Number</span><input type="text"
                                    name="mobile" minlength="10" maxlength="10" placeholder="Mobile Number" defaultValue={myProfileData?.userdata?.mobile} /><span
                                        className="correct-text" style={{ color: 'green' }}>{myProfileData?.userdata?.verified}</span></div>
                                <div className="form-input"><span>Date of Birth</span>
                                    <div className="react-datepicker-wrapper">
                                        <div className="react-datepicker__input-container"><input type="date"
                                            name="dob" placeholder="Enter your date of birth" className="form-input"
                                            defaultValue={myProfileData?.userdata?.dob}
                                        /></div>
                                    </div>
                                </div>
                                <div className="form-input"><span> Gender</span><select name="gender" defaultvalue={myProfileData?.userdata?.gender}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>
                                </select></div>
                                <div className="form-input"></div>
                            </div>
                            <div className="flex-row"><button type="submit" className="header-sell" >save details</button><Link
                                className="header-sell" to="/profile">Back</Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default EditProfileForm;