import api from "../utils/axios";

export const getUser = async () => {
  const { data } = await api.get("/user");
  return data;
};
