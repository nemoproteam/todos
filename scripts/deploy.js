const { ethers } = require("hardhat");
const fs = require("fs/promises");

async function main() {
  const todoContract = await ethers.getContractFactory("Todo");
  const deployedTodoContract = await todoContract.deploy();
  await writeDeploymentInfo(todoContract, "Todo.json");

  console.log("Todo Contract Address:", deployedTodoContract.address);
}

async function writeDeploymentInfo(contract, filename = "") {
  const data = {
    contract: {
      address: contract.address,
      signerAddress: contract.signer.address,
      abi: contract.interface.format(),
    },
  };

  const content = JSON.stringify(data, null, 2);
  await fs.writeFile(filename, content, { encoding: "utf-8" });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
