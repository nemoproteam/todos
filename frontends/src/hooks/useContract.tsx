import { Contract } from "ethers";
import { useMemo } from "react";
import { IWeb3Context, useWeb3Context } from "../context/Web3Context";
import { CONTRACT_ADDRESS, ABI } from "../constants";

const useContract = () => {
  const { state } = useWeb3Context() as IWeb3Context;

  return useMemo(
    () => state.signer && new Contract(CONTRACT_ADDRESS, ABI, state.signer),
    [state.signer]
  );
};

export default useContract;
