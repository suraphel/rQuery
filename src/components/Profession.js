import React, { useEffect, useState } from "react";

const Profession = () => {
  const [isLoading, setIsLoading] = useState();
  const [data, setData] = useState([]);

  // useEffect(()=> {
  //     fetch('http://localhost:4000/test').then((res) => {
  //         const data = res.json();
  //         console.log(data)
  //         setData(data);
  //     })
  // },[])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const json = await response.json();
      console.log(json);
      setData(json);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Profession</h2>
      <ul>
        {data.map((ele) => (
          <li key={ele.id}> {ele.id} </li>
        ))}
      </ul>
    </div>
  );
};
export default Profession;
