import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c3f0d082264349799f39b556997d0205",
  },
});
