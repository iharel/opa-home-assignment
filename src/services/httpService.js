import userData from "../constants/userData";
import homescreenData from "../constants/data";
const service = {};
const pService = {};
pService.apiKey = "";
pService.apiSecret = "";
pService.token = "";

service.get = async (requestObj) => {
  if (!requestObj.authType) requestObj.authType = "token";
  let headers = new Headers();
  let data;
  if (requestObj?.authType === "token") {
    // here add header authorization to request.
    data = userData;

    headers.append("Authorization", "Bearer " + pService.token);
  } else if (requestObj?.authType === "apiKey") {
    data = homescreenData;

    headers["x-api-key"] = requestObj.apiKey;
    headers["x-api-secret"] = requestObj.apiSecret;
  }
  console.debug("BEEN EHRasfE");
  const returnMockPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 300);
  });
  //   return await fetch(requestObj.path, { method: "GET", headers: headers });

  return await returnMockPromise;
};
export default service;
