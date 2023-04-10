//here we donot know how many thing we will be fetching

import { useQueries } from "react-query";

const dataFetecher = async (id) => {
  const res = await fetch(`http://localhost:4000/friends/${id}`);
  const data = res.json();
  return data;
};

export const DynamicParallel = ({ id }) => {
  const queryResults = useQueries(
    id.map((id) => {
      return {
        queryKey: ["userKey", id],
        queryFn: () => dataFetecher(id),
      };
    })
  );
  console.log({ queryResults });
  return <div>Dynamic parallel fetching </div>;
};
