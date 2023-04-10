import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ReactQueryDevtools } from "react-query/devtools";

import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />,
    <ReactQueryDevtools initilaIsOpen={false} />
  </QueryClientProvider>,
  document.getElementById("root")
);
