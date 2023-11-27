import QueryString from "qs";
import { request } from "./login-service";
import { CLIENT_ID, CLIENT_SECRET } from "../ultils/system";
import * as tokenRepository from "../localStorage/token-repository";

export function loginRequest(username, password) {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
  };

  const requestBody = QueryString.stringify({
    username,
    password,
    grant_type: "password",
  });

  const config = {
    method: "POST",
    url: "/oauth/token",
    data: requestBody,
    headers,
  };
  return request(config);
}

export function exit() {
  tokenRepository.remove();
}

export function saveToken(token) {
  tokenRepository.save(token);
}

export function getToken() {
  return tokenRepository.get();
}
