import React, { FC, useEffect, useContext } from "react";
import "./Home.css";
import { UserContext } from "../../App";
import Navbar from "../navbar/Navbar";
import Stolenbikes from "../bikes/Stolenbikes";
import Loader from "../loader/Loader";

const Home: FC = () => {
  const {
    apiDataParam,
    apiCountParam,
    totalCount,
    newBikeData,
    inputMiles,
    inputLocation,
    showCount,
    getData,
    getCount,
  } = useContext(UserContext);
  useEffect(() => {
    getData();
  }, [apiDataParam]);
  useEffect(() => {
    getCount();
  }, [apiCountParam]);

  return (
    <div className="main_container">
      <Navbar />
      {totalCount ? (
        <div className="count_container">
          {showCount ? (
            <>
              {totalCount} bikes stolen within {inputMiles} miles of{" "}
              {inputLocation}
            </>
          ) : (
            <>
              {totalCount} bikes stolen within {inputMiles} miles of your
              location
            </>
          )}
        </div>
      ) : (
        ""
      )}

      <div className="bikes_container">
        {!newBikeData.length ? <Loader /> : <Stolenbikes />}
      </div>
    </div>
  );
};

export default Home;
