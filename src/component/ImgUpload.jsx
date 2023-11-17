import React, { useState, useEffect } from "react";
import { ImgUploadComp } from "../style/ImgUploadStyle";
import full from "../images/full.png";
import inside from "../images/inside.png";
import side from "../images/side.png";
import spot from "../images/spot.png";
import { storage } from "../api/firebase";

export const ImgUpload = ({ onNext }) => {
  // imgUrl
  const [fullImg, setFullImg] = useState(full);
  const [insideImg, setInsideImg] = useState(inside);
  const [sideImg, setSideImg] = useState(side);
  const [spotImg, setSpotImg] = useState(spot);
  // imgFile
  const [fullFile, setFullFile] = useState(null);
  const [insideFile, setInsideFile] = useState(null);
  const [sideFile, setSideFile] = useState(null);
  const [spotFile, setSpotFile] = useState(null);

  const [selectedImgCount, setSelectedImgCount] = useState(0);

  useEffect(() => {
    // 컴포넌트가 처음 마운트될 때 실행
    // imgBox의 이미지를 초기 이미지로 설정
    window.localStorage.setItem("fullImg", fullImg);
    window.localStorage.setItem("insideImg", insideImg);
    const newSideImg = sideImg === side ? "" : sideImg;
    window.localStorage.setItem("sideImg", newSideImg);
    const newSpotImg = spotImg === spot ? "" : spotImg;
    window.localStorage.setItem("spotImg", newSpotImg);
  }, [fullImg, insideImg, sideImg, spotImg, selectedImgCount]); // 처음 한 번만 실행

  const handleFileChange = (e, setImg, setFile) => {
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    setImg(imageUrl);
    setFile(e.target.files[0]);
    setSelectedImgCount(selectedImgCount + 1);
  };

  const handleNextClick = () => {
    // 선택된 이미지수가 2개 이상이고 fullImg는 필수로 들어가야함
    if (fullFile !== null) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(fullFile.name);
      fileRef.put(fullFile).then(() => {
        console.log("저장성공!");
        fileRef.getDownloadURL().then((url) => {
          console.log("저장경로 확인 : " + url);
          setFullImg(url);
          window.localStorage.setItem("fullImg", url);
        });
      });
    }
    if (insideFile !== null) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(insideFile.name);
      fileRef.put(insideFile).then(() => {
        console.log("저장성공!");
        fileRef.getDownloadURL().then((url) => {
          console.log("저장경로 확인 : " + url);
          setInsideImg(url);
          window.localStorage.setItem("insideImg", url);
        });
      });
    }
    if (sideFile !== null) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(sideFile.name);
      fileRef.put(sideFile).then(() => {
        console.log("저장성공!");
        fileRef.getDownloadURL().then((url) => {
          console.log("저장경로 확인 : " + url);
          setSideImg(url);
          window.localStorage.setItem("sideImg", url);
        });
      });
    }
    if (spotFile !== null) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(spotFile.name);
      fileRef.put(spotFile).then(() => {
        console.log("저장성공!");
        fileRef.getDownloadURL().then((url) => {
          console.log("저장경로 확인 : " + url);
          setSpotImg(url);
          window.localStorage.setItem("spotImg", url);
        });
      });
    }
    if (selectedImgCount >= 2 && fullImg && (insideImg || sideImg || spotImg)) {
      onNext();
    }
  };

  return (
    <>
      <ImgUploadComp>
        <div className="container">
          {/* 예시 사진 */}
          <div className="title">
            <h3>
              <span>사진</span>을 등록해주세요.
            </h3>
            <p>등록 예시</p>
          </div>

          <div className="exampleImgContainer">
            <div className="imgBox">
              <img src={full} alt="full" />
              <p>전체</p>
            </div>
            <div className="imgBox">
              <img src={inside} alt="inside" />
              <p>안쪽</p>
            </div>
            <div className="imgBox">
              <img src={side} alt="side" />
              <p>옆면</p>
            </div>
            <div className="imgBox">
              <img src={spot} alt="spot" />
              <p>수선 부위</p>
            </div>
          </div>

          <div className="guideText">
            <span>전체적인 앞 / 뒤 사진</span>과
            <span> 수선이 필요한 상세 부위</span>를<p>자세하게 촬영해주세요.</p>
          </div>

          {/* 그리드 적용-이미지 업로드 */}
          <div className="uploadBox">
            <div className="textBox textBox1">
              <p>전체 사진</p>
            </div>
            <div className="textBox textBox2">
              <p>상세 사진</p>
            </div>
            <div className="itemImg itemImg1">
              <img src={fullImg} alt="itemImg1" />
            </div>
            <div className="imgInput imgInput1">
              <input
                type="file"
                onChange={(e) => handleFileChange(e, setFullImg, setFullFile)}
                required
              />
            </div>

            <div className="itemImg itemImg2">
              <img src={insideImg} alt="itemImg2" />
            </div>
            <div className="imgInput imgInput2">
              <input
                type="file"
                onChange={(e) =>
                  handleFileChange(e, setInsideImg, setInsideFile)
                }
              />
            </div>

            <div className="itemImg itemImg3">
              <img src={sideImg} alt="itemImg3" />
            </div>
            <div className="imgInput imgInput3">
              <input
                type="file"
                onChange={(e) => handleFileChange(e, setSideImg, setSideFile)}
              />
            </div>

            <div className="itemImg itemImg4">
              <img src={spotImg} alt="itemImg4" />
            </div>
            <div className="imgInput imgInput4">
              <input
                type="file"
                onChange={(e) => handleFileChange(e, setSpotImg, setSpotFile)}
              />
            </div>
          </div>
          <div className="buttonContainer">
            <button onClick={handleNextClick} disabled={selectedImgCount < 2}>
              다음
            </button>
          </div>
        </div>
      </ImgUploadComp>
    </>
  );
};

export default ImgUpload;
