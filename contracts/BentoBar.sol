pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";


contract BentoBar is ERC20("BentoBar", "xBENTO"){
    using SafeMath for uint256;
    IERC20 public bento;

    constructor(IERC20 _bento) public {
        bento = _bento;
    }

    // Enter the bar. Pay some BENTOs. Earn some shares.
    function enter(uint256 _amount) public {
        uint256 totalBento = bento.balanceOf(address(this));
        uint256 totalShares = totalSupply();
        if (totalShares == 0 || totalBento == 0) {
            _mint(msg.sender, _amount);
        } else {
            uint256 what = _amount.mul(totalShares).div(totalBento);
            _mint(msg.sender, what);
        }
        bento.transferFrom(msg.sender, address(this), _amount);
    }

    // Leave the bar. Claim back your BENTOs.
    function leave(uint256 _share) public {
        uint256 totalShares = totalSupply();
        uint256 what = _share.mul(bento.balanceOf(address(this))).div(totalShares);
        _burn(msg.sender, _share);
        bento.transfer(msg.sender, what);
    }
}