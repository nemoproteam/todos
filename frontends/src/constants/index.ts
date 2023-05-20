export const CONTRACT_ADDRESS = "0x2CB19296d326C8e01AEE93B3031d14Ad54f8b718";
export const ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "author",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "done",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "EventTask",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_content",
        type: "string",
      },
      {
        internalType: "string",
        name: "_author",
        type: "string",
      },
    ],
    name: "createTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getTask",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "date",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "content",
            type: "string",
          },
          {
            internalType: "string",
            name: "author",
            type: "string",
          },
          {
            internalType: "bool",
            name: "done",
            type: "bool",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct Todo.Task",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTasks",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "date",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "content",
            type: "string",
          },
          {
            internalType: "string",
            name: "author",
            type: "string",
          },
          {
            internalType: "bool",
            name: "done",
            type: "bool",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct Todo.Task[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ids",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_content",
        type: "string",
      },
      {
        internalType: "string",
        name: "_author",
        type: "string",
      },
    ],
    name: "updateTask",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "date",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "content",
            type: "string",
          },
          {
            internalType: "string",
            name: "author",
            type: "string",
          },
          {
            internalType: "bool",
            name: "done",
            type: "bool",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct Todo.Task",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
