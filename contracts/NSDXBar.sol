// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// @notice NSDXBar the rewarder of MasterChef
contract NSDXBar is Ownable {
    using SafeERC20 for IERC20;

    // @notice The NasDex token
    IERC20 public nsdx;

    constructor (IERC20 _nsdx) {
        require(address(_nsdx) != address(0), "the _nsdx address is zero");
        nsdx = _nsdx;
    }

    // @notice Safe nsdx transfer function, just in case if rounding error causes pool to not hava enough NSDX
    function safeNSDXTransfer(address _to, uint256 _amount) public onlyOwner {
        uint256 nsdxBal = nsdx.balanceOf(address(this));
        if (_amount > nsdxBal && nsdxBal > 0) {
            nsdx.safeTransfer(_to, nsdxBal);
        } else {
            nsdx.safeTransfer(_to, _amount);
        }
    }
}