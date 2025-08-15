// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import {TestFtsoV2Interface} from "@flarenetwork/flare-periphery-contracts/coston2/TestFtsoV2Interface.sol";
import {ContractRegistry} from "@flarenetwork/flare-periphery-contracts/coston2/ContractRegistry.sol";


contract FTSO_Price_Converter{
     bytes21 public constant flrUsdId =
        0x01464c522f55534400000000000000000000000000; 

    function getFlrUsdPrice() external view returns (uint256 price, int8 decimals, uint64 timestamp) {
        TestFtsoV2Interface ftsoV2 = ContractRegistry.getTestFtsoV2();
        (price, decimals, timestamp) = ftsoV2.getFeedById(flrUsdId);
        return (price, decimals, timestamp);
    }
    function getFlrUsdPriceWei() external view returns (uint256 priceWei, uint64 timestamp) {
        TestFtsoV2Interface ftsoV2 = ContractRegistry.getTestFtsoV2();
         (priceWei, timestamp) = ftsoV2.getFeedByIdInWei(flrUsdId);
            return (priceWei, timestamp);
    }
}