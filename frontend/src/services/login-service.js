import axios from "axios";
import { BASE_URL } from "../ultils/system";
import * as authService from "./auth-service";

export function request(config) {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: "Bearer " + authService.getToken(),
      }
    : config.headers;

  return axios({ ...config, baseURL: BASE_URL, headers });
}
