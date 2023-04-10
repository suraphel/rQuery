// this page will display the individ profession

import { useParams } from "react-router-dom";
import { fetchSingleData } from "../hooks/FetchSingleData";

// do the query by id

export const RQProf = () => {
  let { id } = useParams();

  const { data, isLoading } = fetchSingleData(id);

  if (isLoading) {
    return <h3> Loading... </h3>;
  }
  return (
    <>
      <h3> The title of the page goes here</h3>
      {data.title}

      <h5> Some other details goes in here</h5>
    </>
  );
};
