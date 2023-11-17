import ServiceList from "../component/ServiceList";
import { useState, useEffect } from "react";
import ServiceApi from "../api/Service.Api";

const Notice = ({ search }) => {
  const [noticeList, setNoticeList] = useState([]);
  useEffect(() => {
    const noticeData = async () => {
      try {
        const res = await ServiceApi.service(0);
        setNoticeList(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    noticeData();
  }, []);

  return (
    <>
      <ServiceList noticeData={noticeList} />
    </>
  );
};

export default Notice;
