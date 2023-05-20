import { createContext, FC, ReactNode, useContext } from "react";
import useWeb3Provider, { IWeb3State } from "../hooks/useWeb3Provider";
import { ToastId } from "@chakra-ui/react";

export interface IWeb3Context {
  connectWallet: () => Promise<ToastId | undefined>;
  disconnect: () => void;
  state: IWeb3State;
}

const Web3Context: any = createContext(null);

const Web3ContextProvider = ({ children }: any) => {
  const { connectWallet, disconnect, state } = useWeb3Provider();

  return (
    <Web3Context.Provider
      value={{
        connectWallet,
        disconnect,
        state,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export default Web3ContextProvider;

export const useWeb3Context: any = () => useContext(Web3Context);
