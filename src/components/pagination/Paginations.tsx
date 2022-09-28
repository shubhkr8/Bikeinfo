import { FC, useContext, useState } from "react";
import { UserContext } from "../../App";
import { AppContextInterface } from "../../Interface";
import "./Paginations.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Paginations: FC = () => {
  const { totalCount, apiDataParam, setApiDataParam } = useContext<
    AppContextInterface | any
  >(UserContext);
  const [page, setPage] = useState(1);
  const handlePageClick = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setApiDataParam({
      ...apiDataParam,
      page: value,
    });
    setPage(value);
  };

  return (
    <div className="pagination_container">
      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(totalCount / 10)}
          onChange={handlePageClick}
        />
      </Stack>
    </div>
  );
};

export default Paginations;
