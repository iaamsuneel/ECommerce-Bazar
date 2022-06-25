import {useState} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProfileForm = () => {
  
    const myProfileData = useSelector((state => state.myProfileReducer?.myProfileData))
    console.log("myProfileData ", myProfileData)

    return (<>
        <div className="right-prof-sec">
            <div className="container">
                <div style={{ position: 'relative' }}>
                    <div className="detail-from">
                        <div className="user-detail-edit">
                            <h4 className="form-title">My Profile</h4><Link to="/profile/edit"><button className="header-sell"><i
                                className="fas fa-user-edit"></i>Edit</button></Link>
                        </div>
                        <div className="group-wrap">
                            <div className="form-input"><span>First Name</span><input type="text" disabled={myProfileData?.userdata?.first_name} name="firstname"
                                value={myProfileData?.userdata?.first_name} /></div>
                            <div className="form-input"><span>Last Name</span><input type="text" disabled={myProfileData?.userdata?.last_name} name="firstname"
                                value={myProfileData?.userdata?.last_name} /></div>
                            <div className="form-input"><span>Email Address</span><input type="email" disabled={myProfileData?.userdata?.email} name="email"
                                value={myProfileData?.userdata?.email} /></div>
                            <div className="form-input"><span>Mobile Number</span><input type="text" disabled={myProfileData?.userdata?.mobile} name="phone"
                             value={myProfileData?.userdata?.mobile}  /></div>
                            <div className="form-input"><span>Date of Birth</span>
                                <div className="react-datepicker-wrapper">
                                    <div className="react-datepicker__input-container"><input type="text" id="dob"
                                        placeholder="Enter your date of birth" disabled={myProfileData?.userdata?.dob} className="" value={myProfileData?.userdata?.dob} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-input"><span>Gender</span><select disabled={myProfileData?.userdata?.gender} >
                                 <option > Male</option> 
                            </select></div>
                        </div>
                        <div className="group-wrap"></div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default ProfileForm;