import { url } from "../utils/url";
import { FormsData } from "../utils/types";

export const RegisterAPI = async ({
  email,
  password,
}: FormsData): Promise<FormsData> => {
  const response = await fetch(`${url}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Registration failed with status: ${response.status}`);
  }

  console.log(response);
  console.log(data);

  return data;
};
