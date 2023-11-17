import axios from "axios";
const BACKEND = "http://localhost:8111";

const ReviewApi = {
  review: async () => {
    console.log(BACKEND + "/reviewstock/data");

    return await axios.post(BACKEND + "/reviewstock/data");
  },
  myReview: async (userId) => {
    const userIdData = {
      userId: userId,
    };
    return await axios.post(BACKEND + "/mypage/myreview", userIdData);
  },
};
export default ReviewApi;
