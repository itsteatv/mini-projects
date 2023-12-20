import { url } from "../utils/url";
import { FormsData } from "../utils/types";

export const LoginAPI = async ({
  email,
  password,
}: FormsData): Promise<FormsData> => {
  console.log({ email, password });
  const response = await fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  console.log(data);
  console.log(response);

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error(data.message);
    } else {
      throw new Error(`Login failed with status: ${response.status}`);
    }
  }

  return data;
};
