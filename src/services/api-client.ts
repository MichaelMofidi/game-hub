import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5d7b40a10a0c46f5b7738fac8c64cc26",
  },
});
