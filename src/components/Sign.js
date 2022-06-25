import React from "react";
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { getLoginAction } from "../store/actions/actions";
/* import { useNavigate } from "react-router-dom"; */
const Sign = ({ onClose, signupClose }) => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        getLoginAction(dispatch, data)
        // alert(JSON.stringify(data));
    }
    const signupClose1 = () => {
        signupClose(true)
        onClose(false)
    }
    return (<>
        <div className="popup-wrap">
            <div className="signup-form signup-frm-wrp user-login"><button onClick={() => onClose(false)} className="close-btn">close</button>
                <div className="inner-sign">
                    <div className="sign-img log-img">
                        <div className="sign-opp-wrap"></div>
                    </div>
                    <div className="sign-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="detail-from">
                                <div className="user-detail-edit">
                                    <h4 className="form-title">Sign In to <span>Bazaar</span></h4>
                                </div>
                                <div className="facebook-button-holder"><span style={{ transition: 'opacity 0.5s ease 0s' }} ><button
                                    type="button" className="kep-login-facebook metro">Login with Facebook</button>

                                </span><button className="register-facebook mail-button"><span><i className="fab fa-facebook-f"></i>
                                    &nbsp; Sign in with Facebook</span></button></div>
                                <div className="google-button-holder"><button type="button"
                                    style={{ backgroundColor: 'rgb(255, 255, 255)', display: 'inline-flex', alignItems: 'center', color: 'rgba(0, 0, 0, 0.54)', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px', padding: '0px', borderRadius: '2px', border: '1px solid transparent', fontSize: '14px', fontWeight: 500, fontFamily: 'Roboto ,sans-serif ' }}>
                                    <div
                                        style={{ marginRight: '10px', background: 'rgb(255, 255, 255)', padding: '10px', borderRadius: '2px' }}>
                                        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                                            <g fill="#000" fill-rule="evenodd">
                                                <path
                                                    d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
                                                    fill="#EA4335"></path>
                                                <path
                                                    d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
                                                    fill="#4285F4"></path>
                                                <path
                                                    d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
                                                    fill="#FBBC05"></path>
                                                <path
                                                    d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
                                                    fill="#34A853"></path>
                                                <path fill="none" d="M0 0h18v18H0z"></path>
                                            </g>
                                        </svg></div><span
                                            style={{ padding: '10px 10px 10px 0px', fontWeight: '500' }}>Login</span> </button>
                                    <button className="register-google mail-button"><span><i className="google-icn"><img
                                        src="assets/images/google.svg" alt="" height="15" width="15" /></i>Sign in
                                        with Google</span></button></div>
                                <div className="or-opp"><span>or</span> </div>
                                <div className="form-input">
                                    <div className="MuiFormControl-root MuiTextField-root"><label
                                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required"
                                        data-shrink="false">Email or phone number*<span aria-hidden="true"
                                            className="MuiFormLabel-asterisk MuiInputLabel-asterisk">&thinsp;*</span></label>
                                        <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                                            <input {...register("email", { required: true })}
                                                aria-invalid="false" type="text"
                                                className="MuiInputBase-input MuiOutlinedInput-input" />
                                            <fieldset aria-hidden="true" className="jss5 MuiOutlinedInput-notchedOutline">
                                                <legend className="jss7"><span>Email or phone number*&nbsp;*</span></legend>
                                            </fieldset>
                                            {errors.email && <span>enter your validate mobile</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-input">
                                    <div className="MuiFormControl-root MuiTextField-root"><label
                                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required"
                                        data-shrink="false">Password*<span aria-hidden="true"
                                            className="MuiFormLabel-asterisk MuiInputLabel-asterisk">&thinsp;*</span></label>
                                        <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                                            <input
                                                {...register("password", { required: true, minLength: 6, maxLength: 10 })}
                                                aria-invalid="false" autocomplete="new-password" name="password"
                                                type="password"
                                                className="MuiInputBase-input MuiOutlinedInput-input" />

                                            <fieldset aria-hidden="true" className="jss5 MuiOutlinedInput-notchedOutline">
                                                <legend className="jss7"><span>Password*&nbsp;*</span></legend>
                                            </fieldset>
                                            {errors.password && <span>enter your password b/w 6 to 10 digit !</span>}
                                        </div>
                                    </div><i className="fal fa-eye-slash"></i>
                                </div><span className="checkbox-remember">Forgot Password?</span>
                                <div className="sign-btn"><button type="submit" className="shop-now">sign In</button></div>
                                <div className="already-ac">Don't have an account?&nbsp;<span><button onClick={signupClose1}>Sign Up</button></span></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Sign;