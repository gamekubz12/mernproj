import axios from 'axios';
import { Navigate } from 'react-router';
import SignIn from './signin';

const validateSignin = async (username, password) => {
    const form_data = {username: username, password: password}
    await axios.post(`/read/login`,form_data)
    .then( async (res) => {
        const data = res.data;
        const valid_result = data.result;
        await localStorage.setItem("user_id", valid_result._id)
        await localStorage.getItem("user_id")
        let user_id = localStorage.getItem("user_id")
        if (user_id !== null) {
            window.location.href = "../";
        }
    })
};

export default validateSignin;