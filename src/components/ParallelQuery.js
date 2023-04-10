// will make http request to difffent api's

import { FetchData } from "../hooks/FetchData";
import { useQuery } from "react-query";

const api1 = "https://jsonplaceholder.typicode.com/posts";
const api2 = "localhost:4000/address";
const api3 = "localhost:4000/users";

const fetchUser = async () => {
  const res = await fetch("http://localhost:4000/users");
  const data = res.json();
  console.log(data);
  return data;
};

const fetchFriends = async () => {
  const res = await fetch("http://localhost:4000/friends");
  const data = res.json();
  console.log(data);
  return data;
};

export const ParallelQuery = () => {
  useQuery("users", fetchUser);
  useQuery("friends", fetchFriends);

  return <div>ParallelQuery users</div>;
};
