import { url } from "../utils/url";

export const UserAPI = async (token: string | null): Promise<string | null> => {
  const response = await fetch(`${url}/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  console.log(token);
  console.log(response);
  console.log(data);

  return data;
};
