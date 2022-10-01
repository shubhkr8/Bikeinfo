import { FC, useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { UserContext } from "../../App";
import "./Navbar.css";

const Navbar: FC = () => {
  const [location, setLocation] = useState("");
  const [miles, setMiles] = useState("200");
  const enabled = location.length > 0;

  const {
    apiDataParam,
    setApiDataParam,
    apiCountParam,
    setApiCountParam,
    setInputLocation,
    setInputMiles,
    setShowCount,
  } = useContext(UserContext);

  const handleSearch = () => {
    setInputMiles(miles);
    setInputLocation(location);
    setShowCount(true);
    setApiDataParam({
      ...apiDataParam,
      location: location,
      distance: miles,
    });
    setApiCountParam({ ...apiCountParam, location: location, distance: miles });
    setLocation("");
  };

  return (
    <div className="navbar">
      <div className="navbar_logo">
        <span className="logo_up">Bike</span>
        <span className="logo_down">info</span>
      </div>
      <form className="navbar_search">
        <label>Search within</label>
        <input
          className="input_within"
          type="number"
          value={miles}
          onChange={(e) => setMiles(e.target.value)}
        />
        <label>miles of</label>
        <input
          className="input_location"
          placeholder="Enter location"
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />
        <Button
          size="small"
          variant="contained"
          onClick={handleSearch}
          disabled={!enabled}
        >
          <SearchIcon />
        </Button>
      </form>
    </div>
  );
};

export default Navbar;
