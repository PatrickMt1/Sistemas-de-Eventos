import { api } from "./api";

export function findUseRequest(email) {
  const config = {
    method: "GET",
    url: "/usuarios/me",
    params: {
      email,
    },
  };
  return api(config);
}
