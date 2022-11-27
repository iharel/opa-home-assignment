import httpService from "./httpService";
const service = {};

service.getHomeElementsData = async (password) => {
  const reqObj = { path: "https://www.OpaServerB.com", authType: "apiKey" };
  return await httpService.get(reqObj);
};

export default service;
