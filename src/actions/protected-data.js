import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
});
export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});

export const fetchProtectedData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/protected`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(fetchProtectedDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

// // // // // // // // // //
//
//  ACCOUNT SETTINGS
//
// // // // // // // // // //

//
// Updates Users email/phonenumber
//
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const updateUserSuccess = (data) => ({
    type: UPDATE_USER_SUCCESS,
    email: data.email,
    phoneNumber: data.phoneNumber
});
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';
export const updateUserError = (error) => ({
    type: UPDATE_USER_ERROR,
    error
});

export const updateUser = (updateData) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    console.log("UpdateData", updateData);
    return fetch(`${API_BASE_URL}/users/me/settings`, {
        method: 'PUT',
        body: JSON.stringify(updateData),
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json"
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(updateUserSuccess(data)))
        .catch(err => {
            dispatch(updateUserError(err));
        });
};

//
// Uploads user's image for profile avatar
//
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const updateImageSuccess = (image) => ({
    type: UPLOAD_IMAGE_SUCCESS,
    image
});
export const UPLOAD_IMAGE_ERROR = 'UPLOAD_IMAGE_ERROR';
export const updateImageError = (error) => ({
    type: UPLOAD_IMAGE_ERROR,
    error
});
export const uploadImage = (image) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    console.log("image", image);
    console.log("typeof(image)", typeof(image));
    let img = image;
    return fetch(`${API_BASE_URL}/users/me/avatar`, {
        method: 'POST',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "multipart/form-data; boundary=data.boundary"
        },
        body: img
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => {
            console.log('IMAGE RES: ', data);
            // dispatch(updateImageSuccess(data));
        })
        .catch(err => {
            console.log(err);
            dispatch(updateImageError(err));
        });
};

//
// Get User Data
//
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const getUserSuccess = (user) => ({
    type: GET_USER_SUCCESS,
    user
});
export const GET_USER_ERROR = 'GET_USER_ERROR';
export const getUserError = (error) => ({
    type: GET_USER_ERROR,
    error
});

export const getUser = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/users/me/`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json"
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(getUserSuccess(data)))
        .catch(err => {
            console.log(err);
            // dispatch(getUserError(err));
        });
};
