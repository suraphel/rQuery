import { useQuery } from "react-query";
import { useState } from "react";

const dataFetecher = async (pageNumber) => {
  const res = await fetch(
    `http://localhost:4000/friends?_limit=3&_page=${pageNumber}`
  );
  const data = res.json();
  return data;
};

export const PaginatedQuery = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { data, isFetching } = useQuery(
    ["queryKey", pageNumber],
    () => dataFetecher(pageNumber),
    {
      keepPreviousData: true,
    }
  );

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const PrevPage = () => {
    setPageNumber(pageNumber - 1);
  };
  return (
    <>
      {data?.map((el) => {
        return (
          <div key={el.id}>
            <div> ID: {el.id}</div>
            Name: {el.name}
            <div> Email: {el.email}</div>
          </div>
        );
      })}
      <h2>This is a the pagination page</h2>{" "}
      <div>
        <button onClick={PrevPage} disabled={pageNumber === 1}>
          Previous{" "}
        </button>
        <button onClick={nextPage} disabled={pageNumber === 4}>
          Next{" "}
        </button>
      </div>
      {isFetching && "Loading"}
    </>
  );
};
