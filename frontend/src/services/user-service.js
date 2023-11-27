import { request } from "./login-service";

export function findMe() {
  const config = {
    url: "/usuarios/me",
    withCredentials: true,
  };

  return request(config);
}
