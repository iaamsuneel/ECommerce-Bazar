import React from "react";
import { useForm } from "react-hook-form";
import '../assets/css/style.css'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getSignupAction } from "../store/actions/actions";
const schema = yup.object({
    password: yup.string().required('Password is required'),
    password: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
}).required();
const Signup = ({ onClose, signClose }) => {
    const dispatch = useDispatch()
    /*  const signupData = useSelector((state) => state.signupReducer?.signupData) */
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
    const onSubmit = data => {
        data.ip = "103.81.213.87"
        data.login = false
        data.browser = "chrome"
        console.log(data);
        getSignupAction(dispatch, data)
    }
    const signupForm = () => {
        //  window.location.reload(false)
    }
    // form close pop
    const signClose1 = () => {
        signClose(true)
        onClose(false)
    }
    return (<>
        <div className="popup-wrap">
            <div className="signup-form signup-frm-wrp"><button className="close-btn" onClick={() => onClose(false)}>close</button>
                <div className="inner-sign">
                    <div className="sign-img">
                        <div className="sign-opp-wrap">
                            <div className="facebook-button-holder"><span style={{ transition: "opacity 0.5s ease 0s" }} ><button
                                type="button" className="kep-login-facebook metro">Login with Facebook</button>
                            </span><button className="register-facebook mail-button"><span><i className="fab fa-facebook-f"></i>
                                &nbsp; Sign up with Facebook</span></button></div>
                            <div className="google-button-holder"><button type="button"
                                style={{ backgroundColor: "rgb(255, 255, 255)", display: 'inline-flex', alignItems: 'center', color: "rgba(0, 0, 0, 0.54)", boxShadow: 'rgba(0, 0, 0, 0.24) 0px 2px 2px 0px rgba(0, 0, 0, 0.24) 0px 0px 1px 0px', padding: '0px', borderRadius: '2px', border: '1px solid transparent', fontSize: '14px', fontWeight: '500', fontFamily: 'Roboto, sans-serif' }} >

                            </button><button className="register-google mail-button"><span><i className="google-icn"><img
                                src="/assets/images/google.svg" alt="" height="15" width="15" /></i>Sign up with
                                Google</span></button></div>
                        </div>
                    </div>
                    <div className="sign-form">
                        <form onSubmit={handleSubmit(onSubmit)} autocomplete="off">
                            <div className="detail-from ">
                                <div className="user-detail-edit">
                                    <h4 className="form-title">Sign up to <span>Bazaar</span></h4>
                                </div>

                                <div className="form-input">
                                    <div className="MuiFormControl-root MuiTextField-root"><label
                                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required"
                                        data-shrink="false">First Name*<span aria-hidden="true"
                                            className="MuiFormLabel-asterisk MuiInputLabel-asterisk">&thinsp;*</span></label>
                                        <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                                            <input  {...register("first_name", { required: true, maxLength: 10 })}

                                                aria-invalid="false" type="text"
                                                className="MuiInputBase-input MuiOutlinedInput-input" />

                                        </div>
                                        {errors.first_name && <span>enter your first name</span>}
                                    </div>
                                </div>
                                <div className="form-input">
                                    <div className="MuiFormControl-root MuiTextField-root"><label
                                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required"
                                        data-shrink="false">Last Name*<span aria-hidden="true"
                                            className="MuiFormLabel-asterisk MuiInputLabel-asterisk">&thinsp;*</span></label>
                                        <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                                            <input {...register("last_name", { required: true, maxLength: 10 })}
                                                aria-invalid="false" type="text"
                                                className="MuiInputBase-input MuiOutlinedInput-input" />
                                        </div>
                                        {errors.last_name && <span>enter your last name</span>}
                                    </div>
                                </div>
                                <div className="form-input">
                                    <div className="MuiFormControl-root MuiTextField-root"><label
                                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required"
                                        data-shrink="false">Email address*<span aria-hidden="true"
                                            className="MuiFormLabel-asterisk MuiInputLabel-asterisk">&thinsp;*</span></label>
                                        <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                                            <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                                                aria-invalid="false" type="email"
                                                className="MuiInputBase-input MuiOutlinedInput-input" />

                                        </div>
                                        {errors.email && <span>enter your email</span>}
                                    </div>
                                </div>
                                <div className="form-input">
                                    <div className="MuiFormControl-root MuiTextField-root" readonly="">
                                        <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                                            < input {...register("dob", { required: true })}
                                                aria-invalid="false" name="dob" placeholder="Date of Birth*"
                                                type="date" className="MuiInputBase-input MuiOutlinedInput-input" />
                                        </div>
                                        {errors.dob && <span>enter your dob</span>}
                                    </div>
                                </div>
                                <div className="MuiFormControl-root form-input"><label
                                    className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined"
                                    data-shrink="false">Gender</label>
                                    <select {...register("gender", { required: true })}>
                                        <option value="Female">Female</option>
                                        <option value="Male">Male</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>

                                <div className="form-input">
                                    <div className="MuiFormControl-root MuiTextField-root"><label
                                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required"
                                        data-shrink="false">Phone Number*<span aria-hidden="true"
                                            className="MuiFormLabel-asterisk MuiInputLabel-asterisk">&thinsp;*</span></label>
                                        <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                                            <input {...register("mobile", { required: true, pattern: /^\d{10}$/ })}
                                                aria-invalid="false" autocomplete="new-password" type="number"
                                                className="MuiInputBase-input MuiOutlinedInput-input"
                                            />
                                        </div>
                                        {errors.mobile && <span>enter your number</span>}
                                    </div>
                                </div>
                                <div className="form-input">
                                    <div className="MuiFormControl-root MuiTextField-root"><label
                                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required"
                                        data-shrink="false">Password*<span aria-hidden="true"
                                            className="MuiFormLabel-asterisk MuiInputLabel-asterisk">&thinsp;*</span></label>
                                        <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                                            <input {...register("password", { required: true, maxLength: 10 })}
                                                aria-invalid="false" autocomplete="new-password"
                                                type="password"
                                                className="MuiInputBase-input MuiOutlinedInput-input" />
                                        </div>
                                    </div><i className="far fa-eye-slash"></i>
                                    {errors.password && <span>enter your password</span>}
                                </div>
                                <div className="form-input">
                                    <div className="MuiFormControl-root MuiTextField-root"><label
                                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required"
                                        data-shrink="false">Confirm password*<span aria-hidden="true"
                                            className="MuiFormLabel-asterisk MuiInputLabel-asterisk">&thinsp;*</span></label>
                                        <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                                            <input {...register("password", { required: true, maxLength: 10 })}
                                                aria-invalid="false" autocomplete="new-password"
                                                type="password"
                                                className="MuiInputBase-input MuiOutlinedInput-input" />
                                        </div>
                                    </div><i className="far fa-eye-slash"></i>
                                    {errors.cpassword && <span>enter your cpassword</span>}
                                </div>
                                <div className="cond"><input type="checkbox" /> I agree to Bazaar <a target="_blank"
                                    href="/page/terms">Terms of Service</a>&nbsp;and <a target="_blank"
                                        href="/policy">Privacy</a>.</div>
                                <div className="sign-btn"><button type="submit" className="shop-now"
                                    onClick={signupForm} >Sign up </button></div>
                                <div className="already-ac">Already have an account?&nbsp;<span><button onClick={signClose1}>Sign In</button></span></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Signup;