import api from "../utils/axios";

export const getUser = async () => {
  const { data } = await api.get("/user");
  return data;
};

export const getWallet = async () => {
  const { data } = await api.get("/wallet");
  return data;
};
