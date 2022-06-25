import React from "react";
const EditAddress = ()=>{
    return (<>
     <div className="newaddress-popup popup-wrap">
            <div className="pop-ups"><i className="fa fa-times" aria-hidden="true" ></i>
                <h1>Add Address</h1>
                <form id="addressForm">
                    <div className="desc-txt-wrap">
                        <div className="desc-txt edit-address">
                            <div className="edit-wrapper"><label className="edit-label">First Name<span
                                className="highlighted">*</span></label>
                                <input 
                                    type="text" placeholder="First Name"
                                    name="first_name" /></div>
                            
                            <div className="edit-wrapper"><label className="edit-label">Last Name<span
                                className="highlighted">*</span></label>
                                <input 
                                    type="text" placeholder="Last Name"
                                    name="last_name" /></div>
                          
                            <div className="edit-wrapper"><label className="edit-label">Email<span
                                className="highlighted">*</span></label>
                                <input 
                                    type="email" placeholder="Email Address"
                                    name="email" /></div>
                          

                            <div className="edit-wrapper"><label className="edit-label">Mobile Number<span
                                className="highlighted">*</span></label>
                                <input  
                                    type="text" placeholder="Mobile Number"
                                    name="phone" /></div>
                           
                            <div className="edit-wrapper"><label className="edit-label">Flat Number<span
                                className="highlighted">*</span></label>
                                <input 
                                    type="text" maxlength="100"
                                    placeholder="Flat Number" name="flat_no" /></div>
                        

                            <div className="edit-wrapper"><label className="edit-label">Street<span
                                className="highlighted">*</span></label>
                                <input 
                                    type="text" placeholder="Street"
                                    name="street" maxlength="100" />
                            </div>
                            
                            <div className="edit-wrapper"><label className="edit-label">Landmark</label>
                                <input 
                                    type="text"
                                    placeholder="Landmark" name="landmark" maxlength="100" /></div>
                            <div className="edit-wrapper"><label className="edit-label">Post Code<span
                                className="highlighted">*</span></label>
                                <input
                                    type="number" placeholder="Post Code"
                                    name="postcode" /></div>
                           
                            <div className="edit-wrapper"><label className="edit-label">Country<span
                                className="highlighted">*</span></label>
                                <div className="select-state"><select
                                  name="country">
                                    <option value="">Please select country</option>
                                    {/* <option value={getCountryData?.data[0]?._id}>{getCountryData?.data[0]?.name}</option> */}
                                </select></div>
                            </div>
                            <div className="edit-wrap">
                                <div className="edit-wrapper"><label className="edit-label">Town/City<span
                                    className="highlighted">*</span></label>
                                    <input 
                                        type="text" placeholder="City"
                                        name="city" /></div>
                               
                                <div className="edit-wrapper"><label className="edit-label">State<span
                                    className="highlighted">*</span></label>
                                    <div className="select-state"><select
                                       
                                        name="state">

                                        <option value="">Please select state</option>
                             {/*            {
                                            getCountryData?.data[0]?.stateData?.map(item => {


                                                return < option value={item._id} > {item.name}</option>
                                            })
                                        } */}

                                    </select></div>
                                </div>
                            </div>
                            <div className="default-add default-add-block"><input type="checkbox" name="makeDefault" /><label
                                for="vehicle1"> Make this my default address</label></div>
                            <div className="edit-wrapper"><label className="edit-label">Address Type<span
                                className="highlighted">*</span></label>
                                <div className="select-state"><select
                                  
                                    name="addressType">
                                    <option value="">Select an address type</option>
                                    <option value="Home">Home (7 am - 9 pm delivery)</option>
                                    <option value="Office">Office (10 am - 6 pm delivery)</option>
                                </select></div>
                            </div>
                            <div className="desc-txt edit-address">
                                <div className="btns-wrapping"><button   className="complete-purchase">Cancel </button>
                                    <button 
                                        className="complete-purchase" type="submit">Update address</button></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    </>)
}
export default EditAddress();