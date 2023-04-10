import React, { useState } from "react";
import { FetchData, addInformation } from "../hooks/FetchData";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";

const RQProfession = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSuccess = (data) => {
    if (data.length > 100) {
    }
    console.log("Return this on success");
  };

  // const { isLoading, data, isError, error, refetch } = FetchData(
  //   onFailure,
  //   onSuccess
  // );

  // const onFailure = () => {
  //   console.log("Return this on failure");
  // };

  // if (isLoading) {
  //   return <h3> Loading...</h3>;
  // }

  // if (isError) {
  //   return <h4> {error.message}</h4>;
  // }

  const { mutate } = addInformation();

  const doSomething = (e) => {
    e.preventDefault();
    setName(e.target.value);
    setEmail(e.target.value);
    console.log(name, email);
    const friends = { name, email: password };
    mutate(friends);
  };

  return (
    <>
      <form>
        <label id="username">userName </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label id="Email">Email </label>
        <input
          type={Text}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={doSomething}> Submit </button>
      </form>

      <h3> RQ fetching using useQuery</h3>

      {data?.map((el) => {
        return (
          <div key={el.id}>
            <Link to={`/details/${el.id}`}>
              <div> {el.name}</div>
            </Link>
            <div> {el.password}</div>
          </div>
        );
      })}
      <button onClick={refetch}> Fetch data </button>
    </>
  );
};
export default RQProfession;
