import { useQuery, useMutation, useQueryClient } from "react-query";

// const fetchData = async () => {
//   const res = await fetch("http://localhost:4000/friends");
//   const data = res.json();
//   console.log(data);
//   return data;
// };

// export const FetchData = (onSuccess, onFailure) => {
//   return useQuery("test", fetchData, {
//     // refetchInterval: 3000,
//     // enabled: false,
//     onSuccess: onSuccess,
//     onError: onFailure,
//   });
// };

async function postData(friends) {
  return fetch("http://localhost:4000/friends", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(friends),
  }).then((res) => res.json());
}

// for posting data
export const addInformation = () => {
  const queryClient = useQueryClient();
  return useMutation(postData, {
    onSuccess: () => {
      queryClient.invalidateQueries("test");
    },
  });
};
