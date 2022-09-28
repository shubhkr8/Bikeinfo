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
      } else if (!searchTitle) {
        return (
          e.date_stolen * 1000 >= newfromdate &&
          e.date_stolen * 1000 <= newtodate
        );
      } else if (!newfromdate && !newtodate) {
        return e.title.includes(searchTitle);
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
      <form className="filter_container">
        <div>
          <label>Filter By Date :</label>
          <input
            type="text"
            placeholder="Enter Title"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            required
          />
        </div>

        <label>Filter By Date :</label>
        <div>
          <label>From</label>
          <input
            type="date"
            onChange={(e) => setFromDate(e.target.value)}
            value={fromDate}
            required
          />
        </div>
        <div>
          <label>To</label>
          <input
            type="date"
            onChange={(e) => setToDate(e.target.value)}
            value={toDate}
            required
          />
        </div>

        <Button size="small" variant="outlined" onClick={handleSearchTitle}>
          Search
        </Button>
      </form>
    </div>
  );
};
export default Filter;
