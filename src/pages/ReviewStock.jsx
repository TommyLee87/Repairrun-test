import { useState } from "react";
import ReviewList from "../component/ReviewList";
import { PtnStockSearchBar } from "../style/ReviewStyle";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewStock = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [sortBy, setSortBy] = useState("highestRated");

  const getValue = (e) => {
    setInputSearch(e.target.value.toLowerCase());
  };
  const handleSortChange = (criteria) => {
    setSortBy(criteria);
  };

  return (
    <>
      <PtnStockSearchBar>
        <div className="container">
          <div className="SearchArea">
            <div className="searchBox">
              <input
                type="text"
                placeholder="키워드를 입력해 주세요"
                onChange={getValue}
              />

              <button
                className="btnSearch"
                onClick={() => {
                  setSearchTerm(inputSearch);
                }}
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
          <ul className="sortArea">
            <li
              className={sortBy === "highestRated" ? "active" : ""}
              onClick={() => handleSortChange("highestRated")}
            >
              별점높은순
            </li>
            <li
              className={sortBy === "lowestRated" ? "active" : ""}
              onClick={() => handleSortChange("lowestRated")}
            >
              별점낮은순
            </li>
            <li
              className={sortBy === "latest" ? "active" : ""}
              onClick={() => handleSortChange("latest")}
            >
              최신순
            </li>
            <li
              className={sortBy === "oldest" ? "active" : ""}
              onClick={() => handleSortChange("oldest")}
            >
              과거순
            </li>
          </ul>
        </div>
      </PtnStockSearchBar>
      <ReviewList search={searchTerm} nofilter={""} sortBy={sortBy} />
    </>
  );
};
export default ReviewStock;
