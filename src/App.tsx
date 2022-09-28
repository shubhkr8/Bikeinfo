import axios from "axios";
import React, { FC, useState } from "react";
import Home from "./components/home/Home";
import { AppContextInterface, CountApiParam } from "./Interface";

export const UserContext = React.createContext<AppContextInterface | any>(null);

const App: FC = () => {
  const [bikeData, setBikeData] = useState([]);
  const [inputLocation, setInputLocation] = useState("IP");
  const [inputMiles, setInputMiles] = useState(200);
  const [newBikeData, setNewBikeData] = useState([]);
  const [totalCount, setTotalCount] = useState(1);
  const [showCount, setShowCount] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [apiDataParam, setApiDataParam] = useState({
    page: 1,
    per_page: 10,
    location: inputLocation,
    distance: inputMiles,
    stolenness: "proximity",
  });
  const [apiCountParam, setApiCountParam] = useState({
    location: inputLocation,
    distance: inputMiles,
    stolenness: "proximity",
  });

  const getData = () => {
    setShowLoader(true);
    axios("https://bikeindex.org/api/v3/search", { params: apiDataParam })
      .then((response: any) => {
        setBikeData(response.data.bikes);
        setNewBikeData(response.data.bikes);
      })
      .catch((err: any) => {
        console.log(err);
      });
    setShowLoader(false);
  };
  const getCount = () => {
    axios("https://bikeindex.org/api/v3/search/count", {
      params: apiCountParam,
    })
      .then((response: CountApiParam) => {
        if (response.data.proximity == 0) {
          setTotalCount(1);
        } else {
          setTotalCount(response.data.proximity);
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <UserContext.Provider
      value={{
        bikeData,
        setBikeData,
        newBikeData,
        setNewBikeData,
        apiDataParam,
        setApiDataParam,
        apiCountParam,
        setApiCountParam,
        totalCount,
        setTotalCount,
        inputLocation,
        setInputLocation,
        inputMiles,
        setInputMiles,
        showCount,
        setShowCount,
        showLoader,
        setShowLoader,
        getData,
        getCount,
      }}
    >
      <Home />
    </UserContext.Provider>
  );
};

export default App;
