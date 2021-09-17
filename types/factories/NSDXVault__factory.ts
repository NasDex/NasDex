/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NSDXVault, NSDXVaultInterface } from "../NSDXVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "contract IMasterChef",
        name: "_masterchef",
        type: "address",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lastDepositedTime",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "performanceFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "callFee",
        type: "uint256",
      },
    ],
    name: "Harvest",
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
    inputs: [],
    name: "Pause",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Unpause",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_CALL_FEE",
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
    inputs: [],
    name: "MAX_PERFORMANCE_FEE",
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
    inputs: [],
    name: "MAX_WITHDRAW_FEE",
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
    inputs: [],
    name: "MAX_WITHDRAW_FEE_PERIOD",
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
    inputs: [],
    name: "admin",
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
    inputs: [],
    name: "available",
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
    inputs: [],
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
    inputs: [],
    name: "calculateHarvestNSDXRewards",
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
    inputs: [],
    name: "calculateTotalPendingNSDXRewards",
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
    inputs: [],
    name: "callFee",
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
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPricePerFullShare",
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
    inputs: [],
    name: "harvest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "inCaseTokensGetStuck",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastHarvestedTime",
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
    inputs: [],
    name: "masterchef",
    outputs: [
      {
        internalType: "contract IMasterChef",
        name: "",
        type: "address",
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
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "performanceFee",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_callFee",
        type: "uint256",
      },
    ],
    name: "setCallFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_performanceFee",
        type: "uint256",
      },
    ],
    name: "setPerformanceFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
    ],
    name: "setTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_withdrawFee",
        type: "uint256",
      },
    ],
    name: "setWithdrawFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_withdrawFeePeriod",
        type: "uint256",
      },
    ],
    name: "setWithdrawFeePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalShares",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treasury",
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
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastDepositedTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "cakeAtLastUserAction",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastUserActionTime",
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
        name: "_shares",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawFee",
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
    inputs: [],
    name: "withdrawFeePeriod",
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
];

const _bytecode =
  "0x60c060405260001960015560c86007556019600855600a6009556203f480600a553480156200002d57600080fd5b50604051620028d9380380620028d983398101604081905262000050916200043c565b620000646200005e620000e5565b620000e9565b6000805460ff60a01b191690556001600160601b0319606085811b821660805284901b1660a052600580546001600160a01b038481166001600160a01b031992831617909255600680548484169216919091179055600154620000db9186169085906200155262000139602090811b91909117901c565b50505050620006b2565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b801580620001c85750604051636eb1769f60e11b81526001600160a01b0384169063dd62ed3e90620001729030908690600401620004da565b60206040518083038186803b1580156200018b57600080fd5b505afa158015620001a0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001c69190620004a3565b155b620001f05760405162461bcd60e51b8152600401620001e79062000609565b60405180910390fd5b6200024b8363095ea7b360e01b848460405160240162000212929190620004f4565b60408051808303601f190181529190526020810180516001600160e01b0319939093166001600160e01b03938416179052906200025016565b505050565b6000620002ac826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316620002ec60201b62001651179092919060201c565b8051909150156200024b5780806020019051810190620002cd91906200041a565b6200024b5760405162461bcd60e51b8152600401620001e790620005bf565b6060620002fd848460008562000307565b90505b9392505050565b6060824710156200032c5760405162461bcd60e51b8152600401620001e79062000542565b6200033785620003d6565b620003565760405162461bcd60e51b8152600401620001e79062000588565b600080866001600160a01b03168587604051620003749190620004bc565b60006040518083038185875af1925050503d8060008114620003b3576040519150601f19603f3d011682016040523d82523d6000602084013e620003b8565b606091505b509092509050620003cb828286620003dc565b979650505050505050565b3b151590565b60608315620003ed57508162000300565b825115620003fe5782518084602001fd5b8160405162461bcd60e51b8152600401620001e791906200050d565b6000602082840312156200042c578081fd5b8151801515811462000300578182fd5b6000806000806080858703121562000452578283fd5b84516200045f8162000699565b6020860151909450620004728162000699565b6040860151909350620004858162000699565b6060860151909250620004988162000699565b939692955090935050565b600060208284031215620004b5578081fd5b5051919050565b60008251620004d081846020870162000666565b9190910192915050565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b03929092168252602082015260400190565b60006020825282518060208401526200052e81604085016020870162000666565b601f01601f19169190910160400192915050565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6040820152651c8818d85b1b60d21b606082015260800190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b60208082526036908201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60408201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606082015260800190565b60005b838110156200068357818101518382015260200162000669565b8381111562000693576000848401525b50505050565b6001600160a01b0381168114620006af57600080fd5b50565b60805160601c60a05160601c6121926200074760003960008181610607015281816108e101528181610afa01528181610cf801528181611167015281816112780152818161150c01526117590152600081816106ed0152818161076901528181610988015281816109dd01528181610a6b01528181610d9d015281816110690152818161130e015261153001526121926000f3fe608060405234801561001057600080fd5b50600436106102325760003560e01c8063853828b611610130578063d8214675116100b8578063f0f442601161007c578063f0f44260146103dc578063f2fde38b146103ef578063f851a44014610402578063fb1db2781461040a578063fc0c546a1461041257610232565b8063d8214675146103a9578063db2e21bc146103b1578063def68a9c146103b9578063df10b4e6146103cc578063e941fa78146103d457610232565b8063b60f0531116100ff578063b60f053114610373578063b6ac642a1461037b578063b6b55f251461038e578063bdca9165146103a1578063d4b0de2f1461028b57610232565b8063853828b614610353578063877887821461035b5780638da5cb5b1461036357806390321e1a1461036b57610232565b806348a0d754116101be57806370897b231161018257806370897b2314610320578063715018a614610333578063722713f71461033b57806377c7b8fc146103435780638456cb591461034b57610232565b806348a0d754146102d3578063502ef81c146102db5780635c975abb146102e357806361d027b3146102f8578063704b6c021461030d57610232565b80632cfc5f01116102055780632cfc5f01146102a05780632e1a7d4d146102a85780633a98ef39146102bb5780633f4ba83a146102c35780634641257d146102cb57610232565b80631959a002146102375780631efac1b81461026357806326465826146102785780632ad5a53f1461028b575b600080fd5b61024a610245366004611a24565b61041a565b60405161025a9493929190612091565b60405180910390f35b610276610271366004611a6b565b610443565b005b610276610286366004611a6b565b61049e565b6102936104ee565b60405161025a9190611b50565b6102936104f3565b6102766102b6366004611a6b565b6104fa565b6102936107d9565b6102766107df565b610276610860565b610293610a51565b610293610af5565b6102eb610bb1565b60405161025a9190611b45565b610300610bc1565b60405161025a9190611ada565b61027661031b366004611a24565b610bd0565b61027661032e366004611a6b565b610c57565b610276610ca8565b610293610cf3565b610293610e3d565b610276610e75565b610276610ef7565b610293610f55565b610300610f5b565b610293610f6a565b610293610f70565b610276610389366004611a6b565b610f76565b61027661039c366004611a6b565b610fc6565b61029361115c565b610293611162565b610276611237565b6102766103c7366004611a24565b6112e2565b6102936113f7565b6102936113fd565b6102766103ea366004611a24565b611403565b6102766103fd366004611a24565b61148a565b6103006114fb565b61030061150a565b61030061152e565b600260208190526000918252604090912080546001820154928201546003909201549092919084565b6005546001600160a01b031633146104765760405162461bcd60e51b815260040161046d90611ed2565b60405180910390fd5b6203f4808111156104995760405162461bcd60e51b815260040161046d90611f2e565b600a55565b6005546001600160a01b031633146104c85760405162461bcd60e51b815260040161046d90611ed2565b60648111156104e95760405162461bcd60e51b815260040161046d90611d77565b600855565b606481565b6203f48081565b6105033361166a565b156105205760405162461bcd60e51b815260040161046d90611ea4565b33321461053f5760405162461bcd60e51b815260040161046d90611bdd565b3360009081526002602052604090208161056b5760405162461bcd60e51b815260040161046d90611c42565b805482111561058c5760405162461bcd60e51b815260040161046d90611cfa565b60006105ac6003546105a6856105a0610cf3565b90611670565b9061167c565b82549091506105bb9084611688565b82556003546105ca9084611688565b60035560006105d7610a51565b9050818110156106a45760006105ed8383611688565b604051630441a3e760e41b81529091506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063441a3e709061063f906000908590600401611b70565b600060405180830381600087803b15801561065957600080fd5b505af115801561066d573d6000803e3d6000fd5b50505050600061067b610a51565b905060006106898285611688565b9050828110156106a05761069d8482611694565b94505b5050505b600a5460018401546106b591611694565b4210156107245760006106d96127106105a66009548661167090919063ffffffff16565b600654909150610716906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169116836116a0565b6107208382611688565b9250505b82541561074e576107446003546105a661073c610cf3565b865490611670565b6002840155610756565b600060028401555b4260038401556107906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633846116a0565b336001600160a01b03167ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b56883866040516107cb929190611b70565b60405180910390a250505050565b60035481565b6005546001600160a01b031633146108095760405162461bcd60e51b815260040161046d90611ed2565b610811610bb1565b61082d5760405162461bcd60e51b815260040161046d90611c14565b6108356116bf565b6040517f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3390600090a1565b6108693361166a565b156108865760405162461bcd60e51b815260040161046d90611ea4565b3332146108a55760405162461bcd60e51b815260040161046d90611bdd565b6108ad610bb1565b156108ca5760405162461bcd60e51b815260040161046d90611e15565b604051630441a3e760e41b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063441a3e7090610919906000908190600401611b70565b600060405180830381600087803b15801561093357600080fd5b505af1158015610947573d6000803e3d6000fd5b505050506000610955610a51565b905060006109746127106105a66007548561167090919063ffffffff16565b6006549091506109b1906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169116836116a0565b60006109ce6127106105a66008548661167090919063ffffffff16565b9050610a046001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633836116a0565b610a0c611730565b4260045560405133907f71bab65ced2e5750775a0613be067df48ef06cf92a496ebf7663ae066092495490610a449085908590611b70565b60405180910390a2505050565b6040516370a0823160e01b81526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190610aa0903090600401611ada565b60206040518083038186803b158015610ab857600080fd5b505afa158015610acc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af09190611a83565b905090565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663200dab866000306040518363ffffffff1660e01b8152600401610b47929190611b59565b60206040518083038186803b158015610b5f57600080fd5b505afa158015610b73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b979190611a83565b9050610bab610ba4610a51565b8290611694565b91505090565b600054600160a01b900460ff1690565b6006546001600160a01b031681565b610bd86117c6565b6001600160a01b0316610be9610f5b565b6001600160a01b031614610c0f5760405162461bcd60e51b815260040161046d90611e6f565b6001600160a01b038116610c355760405162461bcd60e51b815260040161046d90611e3f565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b6005546001600160a01b03163314610c815760405162461bcd60e51b815260040161046d90611ed2565b6101f4811115610ca35760405162461bcd60e51b815260040161046d90611dbf565b600755565b610cb06117c6565b6001600160a01b0316610cc1610f5b565b6001600160a01b031614610ce75760405162461bcd60e51b815260040161046d90611e6f565b610cf160006117ca565b565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166393f1a40b6000306040518363ffffffff1660e01b8152600401610d45929190611b59565b604080518083038186803b158015610d5c57600080fd5b505afa158015610d70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d949190611a9b565b509050610bab817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231306040518263ffffffff1660e01b8152600401610de79190611ada565b60206040518083038186803b158015610dff57600080fd5b505afa158015610e13573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e379190611a83565b90611694565b6000600354600014610e6857610e636003546105a6670de0b6b3a76400006105a0610cf3565b610af0565b50670de0b6b3a764000090565b6005546001600160a01b03163314610e9f5760405162461bcd60e51b815260040161046d90611ed2565b610ea7610bb1565b15610ec45760405162461bcd60e51b815260040161046d90611e15565b610ecc61181a565b6040517f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62590600090a1565b610f003361166a565b15610f1d5760405162461bcd60e51b815260040161046d90611ea4565b333214610f3c5760405162461bcd60e51b815260040161046d90611bdd565b33600090815260026020526040902054610cf1906104fa565b60075481565b6000546001600160a01b031690565b60085481565b60045481565b6005546001600160a01b03163314610fa05760405162461bcd60e51b815260040161046d90611ed2565b6064811115610fc15760405162461bcd60e51b815260040161046d90611fd5565b600955565b610fce610bb1565b15610feb5760405162461bcd60e51b815260040161046d90611e15565b610ff43361166a565b156110115760405162461bcd60e51b815260040161046d90611ea4565b3332146110305760405162461bcd60e51b815260040161046d90611bdd565b600081116110505760405162461bcd60e51b815260040161046d90611bb1565b600061105a610cf3565b90506110916001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633308561187b565b60006003546000146110bd576110b6826105a66003548661167090919063ffffffff16565b90506110c0565b50815b33600090815260026020526040902080546110db9083611694565b81554260018201556003546110f09083611694565b600381905561110c906105a6611104610cf3565b845490611670565b600282015542600382015561111f611730565b336001600160a01b03167f36af321ec8d3c75236829c5317affd40ddb308863a1236d2d277a4025cccee1e8584426040516107cb9392919061207b565b6101f481565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663200dab866000306040518363ffffffff1660e01b81526004016111b4929190611b59565b60206040518083038186803b1580156111cc57600080fd5b505afa1580156111e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112049190611a83565b9050611211610ba4610a51565b905060006112306127106105a66008548561167090919063ffffffff16565b9250505090565b6005546001600160a01b031633146112615760405162461bcd60e51b815260040161046d90611ed2565b604051632989754760e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690635312ea8e906112ae90600090600401611b50565b600060405180830381600087803b1580156112c857600080fd5b505af11580156112dc573d6000803e3d6000fd5b50505050565b6005546001600160a01b0316331461130c5760405162461bcd60e51b815260040161046d90611ed2565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316816001600160a01b0316141561135e5760405162461bcd60e51b815260040161046d90611cb5565b6040516370a0823160e01b81526000906001600160a01b038316906370a082319061138d903090600401611ada565b60206040518083038186803b1580156113a557600080fd5b505afa1580156113b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113dd9190611a83565b90506113f36001600160a01b03831633836116a0565b5050565b600a5481565b60095481565b61140b6117c6565b6001600160a01b031661141c610f5b565b6001600160a01b0316146114425760405162461bcd60e51b815260040161046d90611e6f565b6001600160a01b0381166114685760405162461bcd60e51b815260040161046d90611e3f565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b6114926117c6565b6001600160a01b03166114a3610f5b565b6001600160a01b0316146114c95760405162461bcd60e51b815260040161046d90611e6f565b6001600160a01b0381166114ef5760405162461bcd60e51b815260040161046d90611c6f565b6114f8816117ca565b50565b6005546001600160a01b031681565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b8015806115da5750604051636eb1769f60e11b81526001600160a01b0384169063dd62ed3e906115889030908690600401611aee565b60206040518083038186803b1580156115a057600080fd5b505afa1580156115b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115d89190611a83565b155b6115f65760405162461bcd60e51b815260040161046d90612025565b61164c8363095ea7b360e01b8484604051602401611615929190611b2c565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261189c565b505050565b6060611660848460008561192b565b90505b9392505050565b3b151590565b600061166382846120e4565b600061166382846120c4565b60006116638284612103565b600061166382846120ac565b61164c8363a9059cbb60e01b8484604051602401611615929190611b2c565b6116c7610bb1565b6116e35760405162461bcd60e51b815260040161046d90611c14565b6000805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6117196117c6565b6040516117269190611ada565b60405180910390a1565b600061173a610a51565b905080156114f857604051631c57762b60e31b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063e2bbb15890611791906000908590600401611b70565b600060405180830381600087803b1580156117ab57600080fd5b505af11580156117bf573d6000803e3d6000fd5b5050505050565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b611822610bb1565b1561183f5760405162461bcd60e51b815260040161046d90611e15565b6000805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586117196117c6565b6112dc846323b872dd60e01b85858560405160240161161593929190611b08565b60006118f1826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166116519092919063ffffffff16565b80519091501561164c578080602001905181019061190f9190611a4b565b61164c5760405162461bcd60e51b815260040161046d90611f8b565b60608247101561194d5760405162461bcd60e51b815260040161046d90611d31565b6119568561166a565b6119725760405162461bcd60e51b815260040161046d90611ef7565b600080866001600160a01b0316858760405161198e9190611abe565b60006040518083038185875af1925050503d80600081146119cb576040519150601f19603f3d011682016040523d82523d6000602084013e6119d0565b606091505b50915091506119e08282866119eb565b979650505050505050565b606083156119fa575081611663565b825115611a0a5782518084602001fd5b8160405162461bcd60e51b815260040161046d9190611b7e565b600060208284031215611a35578081fd5b81356001600160a01b0381168114611663578182fd5b600060208284031215611a5c578081fd5b81518015158114611663578182fd5b600060208284031215611a7c578081fd5b5035919050565b600060208284031215611a94578081fd5b5051919050565b60008060408385031215611aad578081fd5b505080516020909101519092909150565b60008251611ad081846020870161211a565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b918252602082015260400190565b6000602082528251806020840152611b9d81604085016020870161211a565b601f01601f19169190910160400192915050565b602080825260129082015271139bdd1a1a5b99c81d1bc819195c1bdcda5d60721b604082015260600190565b6020808252601a908201527f70726f787920636f6e7472616374206e6f7420616c6c6f776564000000000000604082015260600190565b60208082526014908201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604082015260600190565b6020808252601390820152724e6f7468696e6720746f20776974686472617760681b604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526025908201527f546f6b656e2063616e6e6f742062652073616d65206173206465706f736974206040820152643a37b5b2b760d91b606082015260800190565b6020808252601f908201527f576974686472617720616d6f756e7420657863656564732062616c616e636500604082015260600190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6040820152651c8818d85b1b60d21b606082015260800190565b60208082526028908201527f63616c6c4665652063616e6e6f74206265206d6f7265207468616e204d41585f60408201526743414c4c5f46454560c01b606082015260800190565b60208082526036908201527f706572666f726d616e63654665652063616e6e6f74206265206d6f7265207468604082015275616e204d41585f504552464f524d414e43455f46454560501b606082015260800190565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b60208082526016908201527543616e6e6f74206265207a65726f206164647265737360501b604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526014908201527318dbdb9d1c9858dd081b9bdd08185b1b1bddd95960621b604082015260600190565b6020808252600b908201526a61646d696e3a207775743f60a81b604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252603d908201527f7769746864726177466565506572696f642063616e6e6f74206265206d6f726560408201527f207468616e204d41585f57495448445241575f4645455f504552494f44000000606082015260800190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b60208082526030908201527f77697468647261774665652063616e6e6f74206265206d6f7265207468616e2060408201526f4d41585f57495448445241575f46454560801b606082015260800190565b60208082526036908201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60408201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b606082015260800190565b9283526020830191909152604082015260600190565b93845260208401929092526040830152606082015260800190565b600082198211156120bf576120bf612146565b500190565b6000826120df57634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156120fe576120fe612146565b500290565b60008282101561211557612115612146565b500390565b60005b8381101561213557818101518382015260200161211d565b838111156112dc5750506000910152565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220ec3efea81b92cd0f2ff645b327400a57bf2816211849d1d3b39e93e9e3b80d4e64736f6c63430008000033";

export class NSDXVault__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _token: string,
    _masterchef: string,
    _admin: string,
    _treasury: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NSDXVault> {
    return super.deploy(
      _token,
      _masterchef,
      _admin,
      _treasury,
      overrides || {}
    ) as Promise<NSDXVault>;
  }
  getDeployTransaction(
    _token: string,
    _masterchef: string,
    _admin: string,
    _treasury: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _token,
      _masterchef,
      _admin,
      _treasury,
      overrides || {}
    );
  }
  attach(address: string): NSDXVault {
    return super.attach(address) as NSDXVault;
  }
  connect(signer: Signer): NSDXVault__factory {
    return super.connect(signer) as NSDXVault__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NSDXVaultInterface {
    return new utils.Interface(_abi) as NSDXVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NSDXVault {
    return new Contract(address, _abi, signerOrProvider) as NSDXVault;
  }
}