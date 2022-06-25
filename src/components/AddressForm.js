import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from '@hookform/resolvers/yup';
import * as  yup from 'yup';
import { addUserAddressAction, getCountryAction } from "../store/actions/actions";
const AddressForm = ({ onClose }) => {
    const schema = yup.object({
        first_name: yup.string().required(),
        last_name: yup.string().required(),
        email: yup.string().required(),
        phone: yup.string().required(),
        flat_no: yup.string().required(),
        street: yup.string().required(),
        postcode: yup.string().required(),
        city: yup.string().required(),


    }).required();
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });


    const onSubmit = data => {
        console.log("Address", data)
        addUserAddressAction(dispatch, data)
        setTimeout(()=>{
            window.location.reload(false);
        },1000)
       
       
    }
const AddAddressBtn= ()=>{
    
    
}
    const dispatch = useDispatch()
    var getCountryData = useSelector((state => state.getCountryReducer.getCountryData))
    useEffect(() => {
        getCountryAction(dispatch)
    }, [])
    console.log("getCountryData", getCountryData)
    return (<>
        <div className="newaddress-popup popup-wrap">
            <div className="pop-ups"><i className="fa fa-times" aria-hidden="true" onClick={() => onClose(true)}></i>
                <h1>Add Address</h1>
                <form id="addressForm" onSubmit={handleSubmit(onSubmit)}>
                    <div className="desc-txt-wrap">
                        <div className="desc-txt edit-address">
                            <div className="edit-wrapper"><label className="edit-label">First Name<span
                                className="highlighted">*</span></label>
                                <input  {...register("first_name", { required: true, maxLength: 15 })}
                                    type="text" placeholder="First Name"
                                    name="first_name" /></div>
                            {errors.first_name && <span className="error">Enter your first name</span>}
                            <div className="edit-wrapper"><label className="edit-label">Last Name<span
                                className="highlighted">*</span></label>
                                <input  {...register("last_name", { required: true, maxLength: 15 })}
                                    type="text" placeholder="Last Name"
                                    name="last_name" /></div>
                            {errors.last_name && <span className="error">Enter your last name</span>}
                            <div className="edit-wrapper"><label className="edit-label">Email<span
                                className="highlighted">*</span></label>
                                <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                                    type="email" placeholder="Email Address"
                                    name="email" /></div>
                            {errors.email && <span className="error">Enter your Email</span>}

                            <div className="edit-wrapper"><label className="edit-label">Mobile Number<span
                                className="highlighted">*</span></label>
                                <input  {...register("phone", { required: true })}
                                    type="text" placeholder="Mobile Number"
                                    name="phone" /></div>
                            {errors.phone && <span className="error">Enter your mobile number</span>}
                            <div className="edit-wrapper"><label className="edit-label">Flat Number<span
                                className="highlighted">*</span></label>
                                <input {...register("flat_no", { required: true })}
                                    type="text" maxlength="100"
                                    placeholder="Flat Number" name="flat_no" /></div>
                            {errors.flat_no && <span className="error">Enter your flat number</span>}

                            <div className="edit-wrapper"><label className="edit-label">Street<span
                                className="highlighted">*</span></label>
                                <input {...register("street", { required: true })}
                                    type="text" placeholder="Street"
                                    name="street" maxlength="100" />
                            </div>
                            {errors.street && <span className="error">Enter your street area</span>}
                            <div className="edit-wrapper"><label className="edit-label">Landmark</label>
                                <input {...register("landmark")}
                                    type="text"
                                    placeholder="Landmark" name="landmark" maxlength="100" /></div>
                            <div className="edit-wrapper"><label className="edit-label">Post Code<span
                                className="highlighted">*</span></label>
                                <input {...register("postcode", { required: true })}
                                    type="number" placeholder="Post Code"
                                    name="postcode" /></div>
                            {errors.postcode && <span className="error">Enter your postcode</span>}
                            <div className="edit-wrapper"><label className="edit-label">Country<span
                                className="highlighted">*</span></label>
                                <div className="select-state"><select
                                    {...register("country", { required: true })} name="country">
                                    <option value="">Please select country</option>
                                    <option value={getCountryData?.data[0]?._id}>{getCountryData?.data[0]?.name}</option>
                                </select></div>
                            </div>
                            <div className="edit-wrap">
                                <div className="edit-wrapper"><label className="edit-label">Town/City<span
                                    className="highlighted">*</span></label>
                                    <input {...register("city", { required: true })}
                                        type="text" placeholder="City"
                                        name="city" /></div>
                                {errors.city && <span className="error">Enter your city</span>}
                                <div className="edit-wrapper"><label className="edit-label">State<span
                                    className="highlighted">*</span></label>
                                    <div className="select-state"><select
                                        {...register("state", { required: true })}
                                        name="state">

                                        <option value="">Please select state</option>
                                        {
                                            getCountryData?.data[0]?.stateData?.map(item => {


                                                return < option value={item._id} > {item.name}</option>
                                            })
                                        }

                                    </select></div>
                                </div>
                            </div>
                            <div className="default-add default-add-block"><input type="checkbox" name="makeDefault" /><label
                                for="vehicle1"> Make this my default address</label></div>
                            <div className="edit-wrapper"><label className="edit-label">Address Type<span
                                className="highlighted">*</span></label>
                                <div className="select-state"><select
                                    {...register("addressType", { required: true })}
                                    name="addressType">
                                    <option value="">Select an address type</option>
                                    <option value="Home">Home (7 am - 9 pm delivery)</option>
                                    <option value="Office">Office (10 am - 6 pm delivery)</option>
                                </select></div>
                            </div>
                            <div className="desc-txt edit-address">
                                <div className="btns-wrapping"><button onClick={() => onClose(true)} className="complete-purchase">Cancel </button>
                                    <button 
                                        className="complete-purchase" type="submit">Add address</button></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div >


    </>)
}
export default AddressForm;