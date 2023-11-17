import ServiceComp from "../style/ServiceStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ServiceText = ({ noticePlus, isNotice }) => {
  const [icon, setIcon] = useState(faAngleDown);
  const [active, setActive] = useState("");

  const onClick = () => {
    icon === faAngleDown ? setIcon(faAngleUp) : setIcon(faAngleDown);
    active === "" ? setActive("active") : setActive("");
  };

  return (
    <>
      <li>
        <div className="box">
          <div className="noticeTit">{noticePlus.title}</div>
          {isNotice && <div className="noticeDateBox">{noticePlus.date}</div>}
        </div>

        <div className={`test ${active}`}>
          <p>{noticePlus.contents}</p>
        </div>
        <FontAwesomeIcon onClick={onClick} icon={icon} />
      </li>
    </>
  );
};

const ServiceList = ({ noticeData, faqData }) => {
  return (
    <>
      <ServiceComp>
        <div className="container">
          <div className="noticeHeader">
            <h2>{noticeData ? "공지사항" : "FAQ"}</h2>
          </div>
          <ul className="noticeMap">
            {noticeData &&
              noticeData.map((notice) => (
                <ServiceText
                  key={notice.title}
                  noticePlus={notice}
                  isNotice={true}
                />
              ))}

            {faqData &&
              faqData.map((faq) => (
                <ServiceText
                  key={faq.title}
                  noticePlus={faq}
                  isNotice={false}
                />
              ))}
          </ul>
        </div>
      </ServiceComp>
    </>
  );
};

export default ServiceList;
