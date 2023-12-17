import { url } from "../utils/url";
import { RegisterData } from "../utils/types";

export const RegisterAPI = async ({ email, password }: RegisterData) => {
  const response = await fetch(`${url}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    console.log("User registered successfully");
  } else {
    console.error("Registration failed");
  }

  console.log(response);
};
