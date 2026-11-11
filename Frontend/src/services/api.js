const API_URL = "http://localhost:3000/api";

async function postData(path, data) {
  const response = await fetch(API_URL + path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Something went wrong.");
  }

  return result;
}

export function registerUser(user) {
  return postData("/auth/register", user);
}

export function loginUser(user) {
  return postData("/auth/login", user);
}
