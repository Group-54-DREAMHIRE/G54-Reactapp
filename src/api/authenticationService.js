import axios from "axios";
import { useDispatch } from "react-redux";
import { setCredentials } from "../store/userSlice";



export const getToken = () => {
  return localStorage.getItem("TOKEN");
};

export const userRegister = (authRequest) => {
  return axios.post("api/v1/auth/register", authRequest);
};

export const userLogin = async (authRequest) => {
  return await axios.post("api/v1/auth/login", authRequest);
  }


export const fetchUserData = (authRequest) => {
  if (authRequest.method === "post") {
    return axios.post(`${authRequest.url}`, authRequest.data, {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  } else if (authRequest.method === "put") {
    return axios.put(authRequest.url, authRequest.data, {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  } else if (authRequest.method === "get") {
    return axios.get(authRequest.url, authRequest.data, {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
  }
};
