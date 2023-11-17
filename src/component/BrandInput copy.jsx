import { BrandInputComp } from "../style/LocationStyle";

const Brandinput = () => {
  return (
    <>
      <BrandInputComp>
        <div className="container">
          <div className="brandInput">
            <h3>
              <span>브랜드</span>를 입력해주세요.
            </h3>
            <input type="text"></input>
            <div className="buttonContainer">
              <button>다음</button>
            </div>
          </div>
        </div>
      </BrandInputComp>
    </>
  );
};

export default Brandinput;
