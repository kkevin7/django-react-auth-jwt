import axios from "../utils/axios";

const register = async (data) => {
  const url = "/auth/users/";

  const response = await axios.post(url, data);
  console.log(response)

  return response.data;
};

const authService = { register };

export default authService;
