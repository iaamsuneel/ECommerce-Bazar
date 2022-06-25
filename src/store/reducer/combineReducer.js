import { combineReducers } from "redux";
import { brandReducer, homeReducer, categoryReducer, homeDataReducer, signupReducer, productListReducer, productIdReducer, myProfileReducer, attributeCatByIdReducer, getCartReducer, getLocalStorageReducer, getCountryReducer, getUserAddressReducer, addWishListReducer } from "./reducer";
const reducer = combineReducers({
    homeReducer: homeReducer,
    brandReducer: brandReducer,
    categoryReducer: categoryReducer,
    homeDataReducer: homeDataReducer,
    signupReducer: signupReducer,
    productListReducer: productListReducer,
    productIdReducer: productIdReducer,
    myProfileReducer: myProfileReducer,
    attributeCatByIdReducer: attributeCatByIdReducer,
    getCartReducer: getCartReducer,
    getLocalStorageReducer: getLocalStorageReducer,
    getCountryReducer: getCountryReducer,
    getUserAddressReducer : getUserAddressReducer,
    addWishListReducer : addWishListReducer,
   
})
export default reducer
