import axios from "axios";
import { customLogout } from "./features/User/userSlice";

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_BASE_URL}`,
});

var storeModule;
var store;

const initializeAxiosInterceptors = async () => {
  if (!storeModule) {
    storeModule = await import("./configureStore");
  }

  store = storeModule.store;

  axiosInstance.interceptors.request.use(
    (config) => {
      const hasFiles = config.data instanceof FormData;

      if (hasFiles) {
        config.headers["Content-Type"] = "multipart/form-data";
        config.headers["maxBodyLength"] = "Infinity";
      } else {
        config.headers["Content-Type"] = "application/json";
        config.headers["Accept"] = "application/json";
      }

      const user = store.getState("user").user?.user;

      if (user && user !== undefined) {
        config.headers["Authorization"] = `Bearer ${user?.tokens?.access}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

initializeAxiosInterceptors();

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response && response.status === 401) {
      store.dispatch(customLogout());
      // Toaster.error(response?.data?.error?.detail);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
