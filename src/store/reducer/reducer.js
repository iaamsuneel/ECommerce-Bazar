import { addWishList, addWishList_error, GET_ADDRESS, GET_ADDRESS_ERROR, GET_ATTRIBUTE_ID, GET_ATTRIBUTE_ID_ERROR, GET_BRAND, GET_BRAND_ERRORS, GET_CART, GET_CART_ERROR, GET_CATEGORY, GET_CATEGORY_ERROR, GET_COUNTRY, GET_COUNTRY_ERROR, GET_HOME, GET_HOME_DATA, GET_HOME_DATA_ERROR, GET_HOME_ERRORS, GET_HOME_INIT, GET_LOCALSTORAGE, GET_MYPROFILE, GET_MYPROFILE_ERROR, GET_PRODUCT, GET_PRODUCT_ERROR, GET_PRODUCT_ID, GET_PRODUCT_ID_ERROR, GET_SIGNUP, GET_SIGNUP_ERROR } from "./actiontype"
const initialState = {
    loading: false,
    error: null,
}
export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HOME_INIT: return { ...state, loading: true }
        case GET_HOME: return { ...state, homeData: action.payload, loading: false }
        case GET_HOME_ERRORS: return { ...state, error: action.payload, loading: false }
        default: return state
    }
}
export const brandReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BRAND: return { ...state, brandData: action.payload, loading: false }
        case GET_BRAND_ERRORS: return { ...state, error: action.payload, loading: false }
        default: return state
    }
}
export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY: return { ...state, categoryData: action.payload, loading: false }
        case GET_CATEGORY_ERROR: return { ...state, error: action.payload, loading: false }
        default: return state
    }
}
export const homeDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HOME_DATA: return { ...state, homeCategoryData: action.payload, loading: false }
        case GET_HOME_DATA_ERROR: return { ...state, error: action.payload, loading: false }
        default: return state
    }
}
export const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SIGNUP: return { ...state, signupData: action.payload, loading: false }
        case GET_SIGNUP_ERROR: return { ...state, error: action.payload, loading: false }
        default: return state
    }
}
export const productListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT: return { ...state, productListData: action.payload, loading: false }
        case GET_PRODUCT_ERROR: return { ...state, error: action.payload, loading: false }
        default: return state
    }
}
export const productIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_ID: return { ...state, productIdData: action.payload, loading: false }
        case GET_PRODUCT_ID_ERROR: return { ...state, error: action.payload, loading: false }
        default: return state
    }
}
export const myProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MYPROFILE: return { ...state, myProfileData: action.payload, loading: false }
        case GET_MYPROFILE_ERROR: return { ...state, error: action.payload, loading: false }
        default: return state
    }
}
export const attributeCatByIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ATTRIBUTE_ID: return { ...state, attributeByCatData: action.payload, loading: false }
        case GET_ATTRIBUTE_ID_ERROR: return { ...state, error: action.payload, loading: false }
        default: return state
    }
}
export const getCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CART: return { ...state, getCartData: action.payload, loading: false }
        case GET_CART_ERROR: return { ...state, error: action.payload, loading: false }
        default: return state
    }
}
export const getLocalStorageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOCALSTORAGE: return { ...state, getLocalStoragId: action.payload, loading: false }
        default: return state
    }
}
export const getCountryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRY: return { ...state, getCountryData: action.payload, loading: false }
        case GET_COUNTRY_ERROR: return { ...state, error: action.payload, loading: false }
        default: return state
    }

}
export const getUserAddressReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ADDRESS: return { ...state, getUserAddressData: action.payload, loading: false }
        case GET_ADDRESS_ERROR: return { ...state, error: action.payload, loading: false }
        default: return state
    }
}
export const addWishListReducer = (state = initialState, action) => {
    switch (action.type) {
        case addWishList: return { ...state, addWishListData: action.payload, loading: false }
        case addWishList_error: return { ...state, error: action.payload, loading: false }
        default: return state
    }
}