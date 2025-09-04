// util/axiosConfig.js (or .jsx)
import axios from "axios";
import { BASE_URL } from "./apiEndpoints.js";

const axiosConfig = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Make sure these match your backend exactly
const EXCLUDE_PATHS = [
  "/auth/login",
  "/auth/signup", // or "/auth/register" if that's your route
  "/status",
  "/activate",
  "/health",
];

const getPath = (config) => {
  try {
    return new URL(config.url, config.baseURL).pathname;
  } catch {
    return config.url || "";
  }
};

// REQUEST interceptor
axiosConfig.interceptors.request.use(
  (config) => {
    const path = getPath(config);
    const skip = EXCLUDE_PATHS.some(
      (p) => path === p || path.startsWith(`${p}/`)
    );

    if (skip) {
      // ensure NO auth header leaks onto auth endpoints
      if (config.headers && "Authorization" in config.headers) {
        delete config.headers.Authorization;
      }
      return config;
    }

    const raw = localStorage.getItem("token"); // whatever you stored at login
    if (raw) {
      // normalize to exactly one "Bearer "
      const value = raw.startsWith("Bearer ") ? raw : `Bearer ${raw}`;
      config.headers.Authorization = value;
    } else if (config.headers && "Authorization" in config.headers) {
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// RESPONSE interceptor
axiosConfig.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response) {
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      } else if (error.response.status === 500) {
        console.error("Server error. Please try again later");
      } else if (error.response.status === 403) {
        console.warn("403 Forbidden:", {
          url: error.config?.url,
          method: error.config?.method,
        });
      }
    } else if (error?.code === "ECONNABORTED") {
      console.error("Request timeout. Please try again.");
    }
    return Promise.reject(error);
  }
);

export default axiosConfig;
