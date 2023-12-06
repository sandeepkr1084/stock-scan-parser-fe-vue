// showLastCommitMessageForThisLibrary.js
import { create } from "apisauce";

// define the api
const api = create({
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
});

export const getRunners = async () => {
  const response = await api.get("/runners");
  return resolve(response);
};

const resolve = (response: any) => {
  if (response.ok) {
    return Promise.resolve(response.data);
  }
  const errors: Error = {
    errorCode: null,
    errorMessage: null,
    request: null,
  };

  errors.errorCode = response.status;
  errors.request = response.config;
  switch (response.status) {
    case 500:
    case 401:
    case 403:
    case null:
      break;
    case 404:
      const { originalError } = response;
      if (originalError) {
        errors.errorMessage = originalError;
      }
      break;
    default:
      const { data } = response;
      if (data.message) {
        errors.errorMessage = data.message;
        break;
      }
      return Promise.reject(errors);
  }
  return Promise.reject(errors);
};

interface Error {
  errorCode: number | null;
  errorMessage: string | null;
  request: any;
}
