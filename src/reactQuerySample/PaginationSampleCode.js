// import { useState } from "react";
// import { useQuery } from "react-query";

// const PAGE_SIZE = 10;

// // A mock API function that returns paginated data based on the page number
// const FetchPaginatedData = async (pageNumber) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=${PAGE_SIZE}`
//   );
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   return response.json();
// };

// const PaginationExample = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const { isLoading, error, data } = useQuery(
//     ["paginatedData", currentPage],
//     () => fetchPaginatedData(currentPage),
//     {
//       keepPreviousData: true, // This will keep the previous data while loading new data
//       staleTime: 60000, // This will allow data to be considered fresh for 1 minute
//     }
//   );

//   const handleNextPageClick = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const handlePreviousPageClick = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//       <button onClick={handlePreviousPageClick} disabled={currentPage === 1}>
//         Previous Page
//       </button>
//       <button
//         onClick={handleNextPageClick}
//         disabled={data.length < PAGE_SIZE}
//       >
//         Next Page
//       </button>
//     </div>
//   );
// };


// export default FetchPaginatedData