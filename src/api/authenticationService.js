import axios from "axios";

export const getToken = () => {
  return localStorage.getItem("TOKEN");
};

export const userRegister = (authRequest) => {
  return  axios.post("api/v1/auth/register", authRequest);
};

export const userLogin = (authRequest) => {
  return axios.post("api/v1/auth/login", authRequest);
  };

export const userChangePassword = (change) =>{
  return axios.put("api/v1/systemUser/changePassword", change, {
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

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
