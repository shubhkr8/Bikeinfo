import { Button } from "@mui/material";
import React, { FC, useState, useContext } from "react";
import "./Filter.css";
import { UserContext } from "../../App";

const Filter: FC = () => {
  const { bikeData, setNewBikeData } = useContext(UserContext);
  const [searchTitle, setSearchTitle] = useState("");
  const [fromDate, setFromDate] = useState<any>();
  const [toDate, setToDate] = useState<any>();

  const handleSearchTitle = () => {
    setNewBikeData(bikeData);
    let newfromdate = Date.parse(fromDate);
    let newtodate = Date.parse(toDate);
    const filterbikedata = bikeData.filter((e: any) => {
      if (searchTitle && newfromdate && newtodate) {
        return (
          e.title.includes(searchTitle) &&
          e.date_stolen * 1000 >= newfromdate &&
          e.date_stolen * 1000 <= newtodate
        );
      } else if (!searchTitle && newfromdate && newtodate) {
        return (
          e.date_stolen * 1000 >= newfromdate &&
          e.date_stolen * 1000 <= newtodate
        );
      } else if (!newfromdate && !newtodate && searchTitle) {
        return e.title.includes(searchTitle);
      } else {
        return bikeData;
      }
    });
    setNewBikeData(filterbikedata);
    setSearchTitle("");
    setFromDate("");
    setToDate("");
  };
  return (
    <div className="filter">
      <div className="filter_heading">
        <h3>Filters</h3>
      </div>
      <div className="filter_body">
        <form className="filter_container">
          <div className="filter_title">
            <label>Filter By Title :</label>
            <input
              type="text"
              placeholder="Enter Title"
              value={searchTitle || ""}
              onChange={(e) => setSearchTitle(e.target.value)}
              required
            />
          </div>
          <div className="filter_date">
            <label>Filter By Date :</label>
            <div className="filter_date_container">
              <label>From</label>
              <input
                type="date"
                onChange={(e) => setFromDate(e.target.value)}
                value={fromDate || ""}
                required
              />
              <label>To</label>
              <input
                type="date"
                onChange={(e) => setToDate(e.target.value)}
                value={toDate || ""}
                required
              />
            </div>
          </div>
          <div className="filter_submit">
            <Button size="small" variant="outlined" onClick={handleSearchTitle}>
              Search
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Filter;
