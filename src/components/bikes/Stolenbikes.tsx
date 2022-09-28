import { FC, useContext } from "react";
import Bikes from "./Bikes";
import { UserContext } from "../../App";
import Filter from "../filter/Filter";
import Paginations from "../pagination/Paginations";
import "./Stolenbikes.css";

const Stolenbikes: FC = () => {
  const { newBikeData } = useContext(UserContext);
  return (
    <div className="conatiner">
      <Filter />
      <div className="paginations">
        <Paginations />
      </div>

      {newBikeData.map((item: any) => {
        return (
          <Bikes
            key={item.id}
            id={item.id}
            title={item.title}
            location={item.stolen_location}
            stolenDate={item.date_stolen}
            thumb={item.thumb}
          />
        );
      })}
      <div className="paginations">
        <Paginations />
      </div>
    </div>
  );
};

export default Stolenbikes;
