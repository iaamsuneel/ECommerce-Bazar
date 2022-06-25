import { getBrands, getCategory, getHomedata, getHomePage, getSignup } from "../../api/api";
import { GET_HOME, GET_HOME_INIT, GET_HOME_ERRORS, GET_BRAND, GET_BRAND_ERRORS, GET_CATEGORY, GET_CATEGORY_ERROR, GET_HOME_DATA, GET_HOME_DATA_ERROR, GET_SIGNUP, GET_SIGNUP_ERROR, GET_LOGIN, GET_LOGIN_ERROR, GET_PRODUCT, GET_PRODUCT_ERROR, GET_PRODUCT_ID, GET_PRODUCT_ID_ERROR, GET_ADDCART, GET_ADDCART_ERROR, GET_MYPROFILE, GET_MYPROFILE_ERROR, GET_ATTRIBUTE_ID, GET_ATTRIBUTE_ID_ERROR, GET_CART, GET_CART_ERROR, GET_DELETE, GET_DELETE_ERROR, GET_LOCALSTORAGE, GET_EDITPROFILE, GET_EDITPROFILE_ERROR, GET_USERSTAUS, GET_USERSTAUS_ERROR, GET_COUNTRY, GET_COUNTRY_ERROR, GET_USERADDRESS, GET_USERADDRESS_ERROR, GET_ADDRESS, DELETE_ADDRESS, DELETE_ADDRESS_ERROR, addWishList, addWishList_error } from "../reducer/actiontype"
import { api } from '../../api/api'
import { endPoints } from "../../api/endPoints";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
<ToastContainer
    autoClose={7000}
    hideProgressBar={true}
/>
toast.configure();
export const getHomePageAction = (dispatch) => {
    dispatch({ type: GET_HOME_INIT });
    getHomePage()
        .then((response) => {
            dispatch({ type: GET_HOME, payload: response.data.data });
        })
        .catch((e) => {
            dispatch({ type: GET_HOME_ERRORS, payload: e })
        });
}
export const getBrandsAction = (dispatch) => {
    getBrands()
        .then((response) => {
            dispatch({ type: GET_BRAND, payload: response.data });
        })
        .catch((e) => {
            dispatch({ type: GET_BRAND_ERRORS, payload: e })
        })
}
export const getCategoryAction = (dispatch) => {
    getCategory()
        .then((response) => {
            dispatch({ type: GET_CATEGORY, payload: response.data })
        })
        .catch((e) => {
            dispatch({ type: GET_CATEGORY_ERROR, payload: e })
        })
}
export const getHomeDataAction = (dispatch, payload) => {
    getHomedata(payload)
        .then((response) => {
            dispatch({ type: GET_HOME_DATA, payload: response.data })
        })
        .catch((e) => {
            dispatch({ type: GET_HOME_DATA_ERROR, payload: e })
        })
}
export const getSignupAction = (dispatch, payload) => {
    getSignup(payload)
        .then((response) => {
            dispatch({ type: GET_SIGNUP, payload: response.data })
        })
        .then((e) => {
            dispatch({ type: GET_SIGNUP_ERROR, payload: e })
        })
}
export const getLoginAction = (dispatch, payload) => {
    api.post(endPoints.GET_LOGIN, payload)
        .then((response) => {
            toast("Login Succes", response.data.message);
            console.log("response.data.message", response.data.message)
            dispatch({ type: GET_LOGIN, payload: response.data })
            if (response.data.token) {
                localStorage.setItem('token', JSON.stringify(response.data.token))
                window.location.reload(false);
            }
        })
        .catch((e) => {
            dispatch({ type: GET_LOGIN_ERROR, payload: e })
        })
}
export const GetProductAction = (dispatch, payload) => {
    api.post(endPoints.GET_PRODUCT, payload)
        .then((response) => {
            dispatch({ type: GET_PRODUCT, payload: response.data })
        })
        .catch((e) => {
            dispatch({ type: GET_PRODUCT_ERROR, payload: e })

        })
}
export const getProductByIdAction = (dispatch, id) => {
    api.post(endPoints.GET_PRODUCT_ID + '/' + id)
        .then((response) => {
            dispatch({ type: GET_PRODUCT_ID, payload: response.data })
        })
        .catch((e) => {
            dispatch({ type: GET_PRODUCT_ID_ERROR, payload: e })
        })
}
export const getAddCartAction = (dispatch, id) => {
    api.post(endPoints.GET_ADDCART, id)
        .then((response) => {
            dispatch({ type: GET_ADDCART, payload: response.data })
        })
        .catch((e) => {
            dispatch({ type: GET_ADDCART_ERROR, payload: e })
        })
}
export const getMyProfileAction = (dispatch) => {
    api.post(endPoints.GET_MYPROFILE)
        .then((response) => {
            dispatch({ type: GET_MYPROFILE, payload: response.data })

        })
        .catch((e) => {
            dispatch({ type: GET_MYPROFILE_ERROR, payload: e })
        })
}
export const getAttributeByIdAction = (dispatch, payload) => {
    api.post(endPoints.GET_ATTRIBUTE_ID, payload)
        .then((response) => {
            // console.log(response)
            dispatch({ type: GET_ATTRIBUTE_ID, payload: response.data })
        }
        )
        .catch((e) => {
            dispatch({ type: GET_ATTRIBUTE_ID_ERROR, payload: e })
        })
}
export const getCartAction = (dispatch, payload) => {
    api.post(endPoints.GET_CART, payload)
        .then((response) => {
            dispatch({ type: GET_CART, payload: response.data.data })
        })
        .catch((e) => {
            dispatch({ type: GET_CART_ERROR, payload: e })
        })
}
export const getDeleteAction = (dispatch, payload, userId) => {
    api.post(endPoints.GET_DELETE, payload)
        .then((response) => {
            console.log("delete", response)
            dispatch({ type: GET_DELETE, payload: response.data })
            if (response.data.message === "Deleted Cart.") {
                getCartAction(dispatch, userId)
            }
        })
        .catch((e) => {
            dispatch({ type: GET_DELETE_ERROR, payload: e })
        })
}
export const getLocalStorageAction = (dispatch, id) => {
    console.log("dispach", id)
    dispatch({
        type: GET_LOCALSTORAGE,
        payload: id
    })
}
export const getEditProfileAction = (dispatch, payload) => {
    api.post(endPoints.GET_EDITPROFILE, payload)
        .then((response) => {
            dispatch({ type: GET_EDITPROFILE, payload: response.data })
        })
        .catch((e) => {
            dispatch({ type: GET_EDITPROFILE_ERROR, payload: e })
        })

}
// check for user status 
export const getUserStatusAction = (dispatch) => {
    api.get(endPoints.GET_USERSTATUS)
        .then((response) => {
            console.log("checkUSerStaus", response)
            dispatch({ type: GET_USERSTAUS, payload: response.data })

        })
        .catch((e) => {
            dispatch({ type: GET_USERSTAUS_ERROR, payload: e })
        })
}
// for Get Country and State
export const getCountryAction = (dispatch) => {
    api.get(endPoints.GET_COUNTRY)
        .then((response) => {
            dispatch({ type: GET_COUNTRY, payload: response.data })
        })
        .catch((e) => {
            dispatch({ type: GET_COUNTRY_ERROR, payload: e })
        })
}
export const addUserAddressAction = (dispatch, payload) => {
    api.post(endPoints.ADD_USERADDRESS, payload)
        .then((response) => {
            dispatch({ type: GET_USERADDRESS, payload: response.data })
        })
        .catch((e) => {
            dispatch({ type: GET_USERADDRESS_ERROR, payload: e })
        })
}
export const getUserAddressAction = (dispatch, payload) => {
    api.post(endPoints.GET_ADDRESS, payload)
        .then((response) => {
            dispatch({ type: GET_ADDRESS, payload: response.data })

        })
        .catch((e) => {
            dispatch({ type: GET_ADDCART_ERROR, payload: e })
        })
}
// delete address
export const deleteUserAddressAction = (dispatch, payload) => {
    api.post(endPoints.delete_address, payload)
        .then((response) => {
            dispatch({ type: DELETE_ADDRESS, payload: response.data })
        })
        .catch((e) => {
            dispatch({ type: DELETE_ADDRESS_ERROR, payload: e })
        })
}
// add ti WishList
export const addToWishListAction = (dispatch, payload) => {
    api.post(endPoints.GET_ADDWISHLIST, payload)
        .then((response) => {
            dispatch({ type: addWishList, payload: response.data })
        })
        .catch((e) => {
            dispatch({ type: addWishList_error, payload: e })
        })
}