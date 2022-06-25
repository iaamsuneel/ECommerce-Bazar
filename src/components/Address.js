import React, { useEffect, useState } from "react";
import AddressForm from "./AddressForm";
import img from '../assets/images/post-box.png'
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAddressAction, getUserAddressAction } from "../store/actions/actions";
import EditAddress from "./EditAddress";
const Address = () => {
    const [user, setUser] = useState(true)
    const [edit, setEdit] = useState(false)

    const dispatch = useDispatch()
    const getUserAddressData = useSelector((state) => state.getUserAddressReducer?.getUserAddressData)
    console.log("getUserAddressData", getUserAddressData?.data[0]?._id)
    const addId = getUserAddressData?.data[0]?._id
    useEffect(() => {
        getUserAddressAction(dispatch)
    }, [])

    const removeAddressBtn = () => {
        window.confirm("Are you wann to delete!")
        deleteUserAddressAction(dispatch, { addId })
        getUserAddressAction(dispatch);
    }
    useEffect(() => {

    }, [getUserAddressData])
    return (<>
        <div className="right-prof-sec" style={{ display: 'flex' }}>

            <div className="container">
                <div className="address-wrap">
                    <h2  >Select delivery address</h2>
                    {user ?
                        <div className="address-boxes" style={{ display: 'flex' }}>
                            <div onClick={() => setUser(false)} className="address-box new-address">
                                <div className="address-image">
                                    <img style={{ height: '75px', width: '75px' }} src={img} alt="" />
                                </div>
                                <span >Add new
                                    address</span>

                            </div>
                            {getUserAddressData?.data?.map((item, index) => {


                                return < div className="address-box" key={index} >
                                    <span className="triangle-topright"></span>
                                    <div className="default-address"><h3>Address</h3>
                                        <span className="name">{item.first_name} {item.last_name} </span>
                                        <span className="tick-mark"><i className="fa fa-check" aria-hidden="true"></i></span>
                                        <address>{item.flat_no}, {item.landmark}  <span>{item.city} :{item.postcode}</span></address>
                                        <div className="number">Mobile - {item.phone}
                                        </div>
                                    </div>
                                    <div className="address-buttons" style={{ margin: '11px' }}>

                                        <a><button className="btnHover" ><i className="fa fa-pencil" aria-hidden="true"></i> Edit</button></a>


                                        <a> <i className="fa fa-trash" aria-hidden="true"></i><button className="btnHover" onClick={removeAddressBtn}>Remove</button> </a>

                                        <a className="make-default"> Make Default</a>
                                      

                                    </div>
                                </div>

                            })
                            }
                        </div>

                        :
                        <div   >

                            <AddressForm onClose={setUser} />

                        </div>
                    }
                </div>
            </div>
        </div>
    </>)
}
export default Address

