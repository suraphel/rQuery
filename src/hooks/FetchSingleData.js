import { useQuery } from "react-query";

const fetchAProf = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

export const fetchSingleData = (id) => {
  return useQuery(["queryKey", id], () => fetchAProf(id));
};
