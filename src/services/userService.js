import httpService from "./httpService";
const service = {};

service.getUserDetails = async (password) => {
  const reqObj = { path: "https://www.OpaServerA.com", authType: "token" };
  return await httpService.get(reqObj);
};

export default service;
