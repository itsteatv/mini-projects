import { url } from "../utils/url";
import { RegisterData } from "../utils/types";

export const LoginAPI = async ({ email, password }: RegisterData) => {
  const response = await fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    console.log("User logged successfully");
  } else {
    console.error("Logged failed");
  }

  console.log(response);
};
