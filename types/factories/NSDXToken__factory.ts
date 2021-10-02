/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NSDXToken, NSDXTokenInterface } from "../NSDXToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "pos",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "fromBlock",
            type: "uint32",
          },
          {
            internalType: "uint224",
            name: "votes",
            type: "uint224",
          },
        ],
        internalType: "struct ERC20Votes.Checkpoint",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "delegates",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getCurrentVotes",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastTotalSupply",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastVotes",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPriorVotes",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getVotes",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101406040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9610120523480156200003757600080fd5b506040518060400160405280600c81526020016b2720a9a222ac102a37b5b2b760a11b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600c81526020016b2720a9a222ac102a37b5b2b760a11b8152506040518060400160405280600481526020016309ca688b60e31b815250620000d4620000ce6200016760201b60201c565b6200016b565b8151620000e9906004906020850190620001f7565b508051620000ff906005906020840190620001f7565b5050825160208085019190912083519184019190912060c082905260e08190524660a0529091507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f62000154818484620001bb565b6080526101005250620003069350505050565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60008383834630604051602001620001d89594939291906200029d565b6040516020818303038152906040528051906020012090509392505050565b8280546200020590620002c9565b90600052602060002090601f01602090048101928262000229576000855562000274565b82601f106200024457805160ff191683800117855562000274565b8280016001018555821562000274579182015b828111156200027457825182559160200191906001019062000257565b506200028292915062000286565b5090565b5b8082111562000282576000815560010162000287565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b600281046001821680620002de57607f821691505b602082108114156200030057634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e05161010051610120516121e06200035660003960006109a501526000610dba01526000610dfc01526000610ddb01526000610d6801526000610d9101526121e06000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c8063782d6fe1116100f9578063a9059cbb11610097578063d505accf11610071578063d505accf146103aa578063dd62ed3e146103bd578063f1127ed8146103d0578063f2fde38b146103f0576101c4565b8063a9059cbb14610371578063b4b5ea5714610384578063c3cda52014610397576101c4565b80638e539e8c116100d35780638e539e8c1461033057806395d89b41146103435780639ab24eb01461034b578063a457c2d71461035e576101c4565b8063782d6fe1146102f55780637ecebe00146103155780638da5cb5b14610328576101c4565b80633a46b1a8116101665780635c19a95c116101405780635c19a95c146102a75780636fcfff45146102ba57806370a08231146102da578063715018a6146102ed576101c4565b80633a46b1a81461025f57806340c10f1914610272578063587cde1e14610287576101c4565b806323b872dd116101a257806323b872dd1461021c578063313ce5671461022f5780633644e51514610244578063395093511461024c576101c4565b806306fdde03146101c9578063095ea7b3146101e757806318160ddd14610207575b600080fd5b6101d1610403565b6040516101de9190611a9b565b60405180910390f35b6101fa6101f53660046118e0565b610496565b6040516101de91906119e5565b61020f6104b3565b6040516101de91906119f0565b6101fa61022a36600461183c565b6104b9565b610237610552565b6040516101de91906120ee565b61020f610557565b6101fa61025a3660046118e0565b610566565b61020f61026d3660046118e0565b6105ba565b6102856102803660046118e0565b610604565b005b61029a6102953660046117f0565b610651565b6040516101de91906119d1565b6102856102b53660046117f0565b610672565b6102cd6102c83660046117f0565b610686565b6040516101de91906120dd565b61020f6102e83660046117f0565b6106ae565b6102856106c9565b6103086103033660046118e0565b610714565b6040516101de91906120fc565b61020f6103233660046117f0565b610728565b61029a610749565b61020f61033e36600461199e565b610758565b6101d1610784565b61020f6103593660046117f0565b610793565b6101fa61036c3660046118e0565b610828565b6101fa61037f3660046118e0565b6108a1565b6103086103923660046117f0565b6108b5565b6102856103a5366004611909565b6108c3565b6102856103b8366004611877565b610981565b61020f6103cb36600461180a565b610a63565b6103e36103de366004611960565b610a8e565b6040516101de91906120a9565b6102856103fe3660046117f0565b610b14565b6060600480546104129061215f565b80601f016020809104026020016040519081016040528092919081815260200182805461043e9061215f565b801561048b5780601f106104605761010080835404028352916020019161048b565b820191906000526020600020905b81548152906001019060200180831161046e57829003601f168201915b505050505090505b90565b60006104aa6104a3610b82565b8484610b86565b50600192915050565b60035490565b60006104c6848484610c3a565b6001600160a01b0384166000908152600260205260408120816104e7610b82565b6001600160a01b03166001600160a01b03168152602001908152602001600020549050828110156105335760405162461bcd60e51b815260040161052a90611e4a565b60405180910390fd5b6105478561053f610b82565b858403610b86565b506001949350505050565b601290565b6000610561610d64565b905090565b60006104aa610573610b82565b848460026000610581610b82565b6001600160a01b03908116825260208083019390935260409182016000908120918b16815292529020546105b59190612110565b610b86565b60004382106105db5760405162461bcd60e51b815260040161052a90611bae565b6001600160a01b03831660009081526008602052604090206105fd9083610e27565b9392505050565b61060c610b82565b6001600160a01b031661061d610749565b6001600160a01b0316146106435760405162461bcd60e51b815260040161052a90611ee2565b61064d8282610f00565b5050565b6001600160a01b03808216600090815260076020526040902054165b919050565b61068361067d610b82565b82610f0a565b50565b6001600160a01b0381166000908152600860205260408120546106a890610f8a565b92915050565b6001600160a01b031660009081526001602052604090205490565b6106d1610b82565b6001600160a01b03166106e2610749565b6001600160a01b0316146107085760405162461bcd60e51b815260040161052a90611ee2565b6107126000610fb4565b565b60006105fd61072384846105ba565b611004565b6001600160a01b03811660009081526006602052604081206106a89061102d565b6000546001600160a01b031690565b60004382106107795760405162461bcd60e51b815260040161052a90611bae565b6106a8600983610e27565b6060600580546104129061215f565b6001600160a01b0381166000908152600860205260408120548015610815576001600160a01b03831660009081526008602052604090206107d5600183612148565b815481106107f357634e487b7160e01b600052603260045260246000fd5b60009182526020909120015464010000000090046001600160e01b0316610818565b60005b6001600160e01b03169392505050565b60008060026000610837610b82565b6001600160a01b03908116825260208083019390935260409182016000908120918816815292529020549050828110156108835760405162461bcd60e51b815260040161052a9061202d565b61089761088e610b82565b85858403610b86565b5060019392505050565b60006104aa6108ae610b82565b8484610c3a565b60006106a861072383610793565b834211156108e35760405162461bcd60e51b815260040161052a90611be5565b600061094561093d7fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf8989896040516020016109229493929190611a2d565b60405160208183030381529060405280519060200120611031565b858585611044565b90506109508161106c565b861461096e5760405162461bcd60e51b815260040161052a90611c53565b6109788188610f0a565b50505050505050565b834211156109a15760405162461bcd60e51b815260040161052a90611d12565b60007f00000000000000000000000000000000000000000000000000000000000000008888886109d08c61106c565b896040516020016109e6969594939291906119f9565b6040516020818303038152906040528051906020012090506000610a0982611031565b90506000610a1982878787611044565b9050896001600160a01b0316816001600160a01b031614610a4c5760405162461bcd60e51b815260040161052a90611e13565b610a578a8a8a610b86565b50505050505050505050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b610a966117b1565b6001600160a01b0383166000908152600860205260409020805463ffffffff8416908110610ad457634e487b7160e01b600052603260045260246000fd5b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090046001600160e01b0316918101919091529392505050565b610b1c610b82565b6001600160a01b0316610b2d610749565b6001600160a01b031614610b535760405162461bcd60e51b815260040161052a90611ee2565b6001600160a01b038116610b795760405162461bcd60e51b815260040161052a90611c8a565b61068381610fb4565b3390565b6001600160a01b038316610bac5760405162461bcd60e51b815260040161052a90611fe9565b6001600160a01b038216610bd25760405162461bcd60e51b815260040161052a90611cd0565b6001600160a01b0380841660008181526002602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610c2d9085906119f0565b60405180910390a3505050565b6001600160a01b038316610c605760405162461bcd60e51b815260040161052a90611f5e565b6001600160a01b038216610c865760405162461bcd60e51b815260040161052a90611b25565b610c9183838361109e565b6001600160a01b03831660009081526001602052604090205481811015610cca5760405162461bcd60e51b815260040161052a90611d49565b6001600160a01b03808516600090815260016020526040808220858503905591851681529081208054849290610d01908490612110565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d4b91906119f0565b60405180910390a3610d5e8484846110a3565b50505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461415610db557507f0000000000000000000000000000000000000000000000000000000000000000610493565b610e207f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006110ae565b9050610493565b8154600090815b81811015610e99576000610e4282846110e8565b905084868281548110610e6557634e487b7160e01b600052603260045260246000fd5b60009182526020909120015463ffffffff161115610e8557809250610e93565b610e90816001612110565b91505b50610e2e565b8115610eeb5784610eab600184612148565b81548110610ec957634e487b7160e01b600052603260045260246000fd5b60009182526020909120015464010000000090046001600160e01b0316610eee565b60005b6001600160e01b031695945050505050565b61064d8282611103565b6000610f1583610651565b90506000610f22846106ae565b6001600160a01b0385811660008181526007602052604080822080546001600160a01b031916898616908117909155905194955093928616927f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4610d5e828483611152565b600063ffffffff821115610fb05760405162461bcd60e51b815260040161052a90611fa3565b5090565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006001600160601b03821115610fb05760405162461bcd60e51b815260040161052a90611b68565b5490565b60006106a861103e610d64565b8361127d565b6000806000611055878787876112b0565b9150915061106281611390565b5095945050505050565b6001600160a01b038116600090815260066020526040812061108d8161102d565b9150611098816114bd565b50919050565b505050565b61109e8383836114c6565b600083838346306040516020016110c9959493929190611a51565b6040516020818303038152906040528051906020012090509392505050565b60006110f76002848418612128565b6105fd90848416612110565b61110d82826114ec565b6111156115b4565b6001600160e01b03166111266104b3565b11156111445760405162461bcd60e51b815260040161052a90611e92565b610d5e60096115bf836115cb565b816001600160a01b0316836001600160a01b0316141580156111745750600081115b1561109e576001600160a01b038316156111f9576001600160a01b038316600090815260086020526040812081906111af9061177c856115cb565b91509150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72483836040516111ee9291906120cf565b60405180910390a250505b6001600160a01b0382161561109e576001600160a01b0382166000908152600860205260408120819061122f906115bf856115cb565b91509150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724838360405161126e9291906120cf565b60405180910390a25050505050565b600082826040516020016112929291906119b6565b60405160208183030381529060405280519060200120905092915050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156112e75750600090506003611387565b8460ff16601b141580156112ff57508460ff16601c14155b156113105750600090506004611387565b6000600187878787604051600081526020016040526040516113359493929190611a7d565b6020604051602081039080840390855afa158015611357573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661138057600060019250925050611387565b9150600090505b94509492505050565b60008160048111156113b257634e487b7160e01b600052602160045260246000fd5b14156113bd57610683565b60018160048111156113df57634e487b7160e01b600052602160045260246000fd5b14156113fd5760405162461bcd60e51b815260040161052a90611aee565b600281600481111561141f57634e487b7160e01b600052602160045260246000fd5b141561143d5760405162461bcd60e51b815260040161052a90611c1c565b600381600481111561145f57634e487b7160e01b600052602160045260246000fd5b141561147d5760405162461bcd60e51b815260040161052a90611d8f565b600481600481111561149f57634e487b7160e01b600052602160045260246000fd5b14156106835760405162461bcd60e51b815260040161052a90611dd1565b80546001019055565b6114d183838361109e565b61109e6114dd84610651565b6114e684610651565b83611152565b6001600160a01b0382166115125760405162461bcd60e51b815260040161052a90612072565b61151e6000838361109e565b80600360008282546115309190612110565b90915550506001600160a01b0382166000908152600160205260408120805483929061155d908490612110565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906115a09085906119f0565b60405180910390a361064d600083836110a3565b6001600160601b0390565b60006105fd8284612110565b82546000908190801561162457856115e4600183612148565b8154811061160257634e487b7160e01b600052603260045260246000fd5b60009182526020909120015464010000000090046001600160e01b0316611627565b60005b6001600160e01b0316925061164083858763ffffffff16565b915060008111801561168c5750438661165a600184612148565b8154811061167857634e487b7160e01b600052603260045260246000fd5b60009182526020909120015463ffffffff16145b156116fa5761169a82611788565b866116a6600184612148565b815481106116c457634e487b7160e01b600052603260045260246000fd5b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b03160217905550611773565b85604051806040016040528061170f43610f8a565b63ffffffff16815260200161172385611788565b6001600160e01b039081169091528254600181018455600093845260209384902083519101805493909401519091166401000000000263ffffffff91821663ffffffff1990931692909217161790555b50935093915050565b60006105fd8284612148565b60006001600160e01b03821115610fb05760405162461bcd60e51b815260040161052a90611f17565b604080518082019091526000808252602082015290565b80356001600160a01b038116811461066d57600080fd5b803560ff8116811461066d57600080fd5b600060208284031215611801578081fd5b6105fd826117c8565b6000806040838503121561181c578081fd5b611825836117c8565b9150611833602084016117c8565b90509250929050565b600080600060608486031215611850578081fd5b611859846117c8565b9250611867602085016117c8565b9150604084013590509250925092565b600080600080600080600060e0888a031215611891578283fd5b61189a886117c8565b96506118a8602089016117c8565b955060408801359450606088013593506118c4608089016117df565b925060a0880135915060c0880135905092959891949750929550565b600080604083850312156118f2578182fd5b6118fb836117c8565b946020939093013593505050565b60008060008060008060c08789031215611921578182fd5b61192a876117c8565b95506020870135945060408701359350611946606088016117df565b92506080870135915060a087013590509295509295509295565b60008060408385031215611972578182fd5b61197b836117c8565b9150602083013563ffffffff81168114611993578182fd5b809150509250929050565b6000602082840312156119af578081fd5b5035919050565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b901515815260200190565b90815260200190565b9586526001600160a01b0394851660208701529290931660408501526060840152608083019190915260a082015260c00190565b9384526001600160a01b039290921660208401526040830152606082015260800190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b6000602080835283518082850152825b81811015611ac757858101830151858201604001528201611aab565b81811115611ad85783604083870101525b50601f01601f1916929092016040019392505050565b60208082526018908201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604082015260600190565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526026908201527f53616665436173743a2076616c756520646f65736e27742066697420696e203960408201526536206269747360d01b606082015260800190565b6020808252601f908201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e656400604082015260600190565b6020808252601d908201527f4552433230566f7465733a207369676e61747572652065787069726564000000604082015260600190565b6020808252601f908201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604082015260600190565b60208082526019908201527f4552433230566f7465733a20696e76616c6964206e6f6e636500000000000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b6020808252601d908201527f45524332305065726d69743a206578706972656420646561646c696e65000000604082015260600190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604082015265616c616e636560d01b606082015260800190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604082015261756560f01b606082015260800190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604082015261756560f01b606082015260800190565b6020808252601e908201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604082015260600190565b60208082526028908201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616040820152676c6c6f77616e636560c01b606082015260800190565b60208082526030908201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60408201526f766572666c6f77696e6720766f74657360801b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526027908201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326040820152663234206269747360c81b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526026908201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360408201526532206269747360d01b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604082015264207a65726f60d81b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b815163ffffffff1681526020918201516001600160e01b03169181019190915260400190565b918252602082015260400190565b63ffffffff91909116815260200190565b60ff91909116815260200190565b6001600160601b0391909116815260200190565b6000821982111561212357612123612194565b500190565b60008261214357634e487b7160e01b81526012600452602481fd5b500490565b60008282101561215a5761215a612194565b500390565b60028104600182168061217357607f821691505b6020821081141561109857634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fdfea26469706673582212207baf42adb4c78748008aa7dfa6e605f0e2fa4b26bdbdf35053ada0ef76eab1a164736f6c63430008000033";

export class NSDXToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NSDXToken> {
    return super.deploy(overrides || {}) as Promise<NSDXToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NSDXToken {
    return super.attach(address) as NSDXToken;
  }
  connect(signer: Signer): NSDXToken__factory {
    return super.connect(signer) as NSDXToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NSDXTokenInterface {
    return new utils.Interface(_abi) as NSDXTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NSDXToken {
    return new Contract(address, _abi, signerOrProvider) as NSDXToken;
  }
}
