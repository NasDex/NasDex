/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMigratorChef, IMigratorChefInterface } from "../IMigratorChef";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "migrate",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IMigratorChef__factory {
  static readonly abi = _abi;
  static createInterface(): IMigratorChefInterface {
    return new utils.Interface(_abi) as IMigratorChefInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMigratorChef {
    return new Contract(address, _abi, signerOrProvider) as IMigratorChef;
  }
}
