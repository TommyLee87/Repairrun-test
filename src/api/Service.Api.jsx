import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
const BACKEND = "http://localhost:8111";

const ServiceApi = {
  //Service
  service: async (num) => {
    console.log(BACKEND + "/service/data");
    const type = {
      type: num,
    };
    return await axios.post(BACKEND + "/service/data", type);
  },
};
export default ServiceApi;
