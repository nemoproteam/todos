import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";

import Web3ContextProvider from "./context/Web3Context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ChakraProvider>
    <Web3ContextProvider>
      <App />
    </Web3ContextProvider>
  </ChakraProvider>
);
