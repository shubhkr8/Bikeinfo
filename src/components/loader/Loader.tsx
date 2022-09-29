import { FC } from "react";
import Loadingimg from "../../images/loading_icon.gif";
import "./Loader.css";

const Loader: FC = () => {
  return (
    <div className="loader">
      <img className="loaderimg" src={Loadingimg} alt="loading" />
    </div>
  );
};

export default Loader;
