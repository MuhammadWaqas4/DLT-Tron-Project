pragma solidity 0.6.1;

library SafeMath {

    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");

        return c;
    }

    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b <= a, "SafeMath: subtraction overflow");
        uint256 c = a - b;

        return c;
    }

    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;
        require(c / a == b, "SafeMath: multiplication overflow");

        return c;
    }

    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b > 0, "SafeMath: division by zero");
        uint256 c = a / b;

        return c;
    }
    
    }


contract Decentralized {
    
    modifier onlyOwner() {
        require(msg.sender==owner,"you are not a owner");
        _;
    }
    
    address payable public owner;
    function changeOwner(address payable _newOwner) public onlyOwner {
        require(_newOwner!=address(0));
        owner = _newOwner;
    }
     using SafeMath for uint256;
    uint256 public totalSupply=1000000e18;
    uint256 public price=10e16;
    string public symbol="DLT";
    string public name="Decentralized Luxury Token";
    uint8 public decimals=18;
    mapping (address=>uint256) balances;
    mapping (address=>mapping (address=>uint256)) allowed;
    mapping (address  => bool) public frozen ;
      event Freeze(address target, bool frozen);
      event Unfreeze(address target, bool frozen);
      event Burn(address a, uint256 _value);

    modifier whenNotFrozen(address target) {
    require(!frozen[target],"tokens are freeze already");
      _;
    }

    modifier whenFrozen(address target){
    require(frozen[target],"tokens are not freeze");
    _;
    }
    function balanceOf(address _owner) view public   returns (uint256 balance) {return balances[_owner];}
    function transfer(address _to, uint256 _amount) public   returns (bool success) {
        require(!frozen[msg.sender],'account is freez');
        balances[msg.sender]=balances[msg.sender].sub(_amount);
        balances[_to]=balances[_to].add(_amount);
        return true;
    }
    function transferFrom(address _from,address _to,uint256 _amount) public   returns (bool success) {
        require(!frozen[_from],"From address is fronzen");
        balances[_from]=balances[_from].sub(_amount);
        allowed[_from][msg.sender]=allowed[_from][msg.sender].sub(_amount);
        balances[_to]=balances[_to].add(_amount);
        return true;
    }
    
    function approve(address _spender, uint256 _amount) public   returns (bool success) {
        allowed[msg.sender][_spender]=_amount;
        return true;
    }
    
    function allowance(address _owner, address _spender) view public   returns (uint256 remaining) {
      return allowed[_owner][_spender];
    }
  

    function FreezeAcc(address target, bool freeze) onlyOwner public whenNotFrozen(target) returns (bool) {
    freeze = true;
    frozen[target]=freeze;
    emit Freeze(target, true);
    return true;
  }

  function UnfreezeAcc(address target, bool freeze) onlyOwner public whenFrozen(target) returns (bool) {
    freeze = false;
    frozen[target]=freeze;
    emit Unfreeze(target, false);
    return true;
  }
  function burn(uint256 _value) public returns (bool success) {
      require(!frozen[msg.sender],"Account address is fronzen");
        require(balances[msg.sender] >= _value);   // Check if the sender has enough
        balances[msg.sender] =balances[msg.sender].sub(_value);            // Subtract from the sender
        totalSupply =totalSupply.sub(_value);                      // Updates totalSupply
        emit Burn(msg.sender, _value);
        return true;
    }
    using SafeMath for uint256;
    constructor() public{
        owner = msg.sender;
        balances[address(this)] = totalSupply;
        frozen[msg.sender]=false;
        
    }
    function _mint(uint256 amount) external onlyOwner  {
        // require(account != address(0), "ERC20: mint to the zero address");
        balances[owner] += amount;
    }
    
	uint256 public basepercent1=25;
	uint256 public basepercent2=50;
	uint256 public basepercent3=100;
	uint256[5] public REFERRAL_PERCENTS = [10,50,30,10,10];
	uint256[5] public REFERRAL_LIMITS=[60e18,400e18, 800e18,1500e18,2000e18];
	uint256 constant public PERCENTS_DIVIDER = 1000;
	uint256 constant public TIME_STEP = 60 seconds;
	uint256 public totalUsers;
	uint256 public totalInvested;
	uint256 public totalWithdrawn;
	uint256 public totalDeposits;
	uint256 sale=5;
		struct Deposit {
		uint256 amount;
		uint256 withdrawn;
		uint256 start;
		uint256 basepercent;
		uint256 lockTime;
		uint256 lockPeriod;
	}

	struct User {
	    Deposit[] deposits;
	    uint256 checkpoint;
	    uint256 totalTokenBought;
	    uint256 totalTokenSold;
	    bool lockstake;
	    bool lockUnstake;
	    bool lockBuy;
	    bool lockSell;
	    bool lockwitdraw;
	}
	struct REF{
	    bool isExist;
		address referrer;
		uint256 reffrals;
		uint256 bonus;
		uint256 withdrawRef;
		uint256 start;
		address[] reffralArray;
	} 
	
	event Sell(uint256 ,address);
	event Buy(uint256 ,address );
    bool public lockBuying;
    bool public lockStaking;
    bool public lockSelling;
    bool public lockwithdrawl;
    bool lockRegistration;
    bool lockUnStaking;
	uint256 public tokenSold;
	uint256 public TokenBought;
	mapping (address => User) public users;
	mapping (address=>REF)public refusers;
	event NewDeposit(address indexed user, uint256 amount);
	event Withdrawn(address indexed user, uint256 amount);
	event RefBonus(address indexed referrer, address indexed referral, uint256 indexed level, uint256 amount);
    
    function regUser(address payable _refferer)public returns(bool){
        require(!lockRegistration,"Registration is locked by Admin");
        require(!refusers[msg.sender].isExist,"you are already registered");
		if (refusers[msg.sender].referrer == address(0)) {
			if ((!refusers[_refferer].isExist || _refferer == msg.sender) && msg.sender != owner) {
				_refferer = owner;
			}
			    refusers[msg.sender].start=now;
			    refusers[msg.sender].isExist=true;
          refusers[_refferer].reffralArray.push(msg.sender);
			refusers[msg.sender].referrer = _refferer;
           refusers[_refferer].reffrals=refusers[_refferer].reffrals.add(1);
			totalUsers = totalUsers.add(1);
		}	
    }
	function invest(uint256 _numberOfTokens,uint256 _value) public {
	    require(!lockStaking,"Staking is Locked by Admin");
	    require(!users[msg.sender].lockstake,"Your staking is locked by Admin");
	     require(_value>0||_value<4,"you enter wrong number");
	     require(refusers[msg.sender].isExist,"you have to register first");
	     uint256 basepercent;
        if(_value==30){
        basepercent=basepercent1;
        }else if(_value==90){
            basepercent=basepercent2;
        }else if(_value==180){
            basepercent=basepercent3;
        }
        transfer(address(this),_numberOfTokens);
		User storage user = users[msg.sender];
		user.deposits.push(Deposit(_numberOfTokens, 0, block.timestamp,basepercent,block.timestamp,_value));
		totalInvested = totalInvested.add(_numberOfTokens);
		totalDeposits = totalDeposits.add(1);
		emit NewDeposit(msg.sender, _numberOfTokens);
	}
	
	function withdrawRefferalReward()public returns(bool){
	     require(refusers[msg.sender].isExist,"you have to register first");
	    require(!lockwithdrawl,"withdrawl is locked by Admin");
	    require(!users[msg.sender].lockwitdraw,"your withdrawl is locked by Admin");
	    uint256 totalAmount;
	    uint256 referralBonus = getUserReferralBonus(msg.sender);
		if (referralBonus > 0) {
			totalAmount = totalAmount.add(referralBonus);
			refusers[msg.sender].withdrawRef = refusers[msg.sender].withdrawRef.add(referralBonus);
			refusers[msg.sender].bonus = 0;
		}
		balances[msg.sender]=balances[msg.sender].add(totalAmount);
        balances[address(this)]=balances[address(this)].sub(totalAmount);
		totalWithdrawn = totalWithdrawn.add(totalAmount);
	}
	
	function withdraw() public {
	    require(refusers[msg.sender].isExist,"you have to register first");
	    require(!lockwithdrawl,"withdrawl is locked by Admin");
	    require(!users[msg.sender].lockwitdraw,"your withdrawl is locked by Admin");
		User storage user = users[msg.sender];
		uint256 totalAmount;
		uint256 dividends;
		for (uint256 i = 0; i < user.deposits.length; i++) {
		    if (user.deposits[i].withdrawn < user.deposits[i].amount.mul(user.deposits[i].basepercent).div(10000).
		    mul(user.deposits[i].lockPeriod)) {
					dividends = (user.deposits[i].amount.mul(users[msg.sender].deposits[i].basepercent).div(10000))
						.mul(now.sub(user.deposits[i].start))
						.div(TIME_STEP);
	         	 user.deposits[i].start=now;
					if (user.deposits[i].withdrawn.add(dividends) > user.deposits[i].amount.mul(user.deposits[i].basepercent).div(10000).
					mul(user.deposits[i].lockPeriod)) {
					dividends = (user.deposits[i].amount.mul(user.deposits[i].basepercent).div(10000).mul(user.deposits[i].lockPeriod)).
					sub(user.deposits[i].withdrawn);
					unstake(i);
				}

				user.deposits[i].withdrawn = user.deposits[i].withdrawn.add(dividends); /// changing of storage data
				totalAmount = totalAmount.add(dividends);

				totalAmount = totalAmount.add(dividends);
		}
		}
       	balances[msg.sender]=balances[msg.sender].add(dividends);
        balances[address(this)]=balances[address(this)].sub(dividends);
		totalWithdrawn = totalWithdrawn.add(totalAmount);
		emit Withdrawn(msg.sender, totalAmount);
	}
	function getContractBalance() public view returns (uint256) {
		return (address(this).balance);
	}
		function getValue(address userAddress) public view returns (uint256) {
		    User storage user = users[userAddress];
		uint256 totalAmount;
		uint256 dividends;
	for (uint256 i = 0; i < user.deposits.length; i++) {
		    if (user.deposits[i].withdrawn < user.deposits[i].amount.mul(user.deposits[i].basepercent).div(10000).
		    mul(user.deposits[i].lockPeriod)) {
					dividends = (user.deposits[i].amount.mul(users[userAddress].deposits[i].basepercent).div(10000))
						.mul(now.sub(user.deposits[i].start))
						.div(TIME_STEP);
					if (user.deposits[i].withdrawn.add(dividends) > user.deposits[i].amount.mul(user.deposits[i].basepercent).div(10000).
					mul(user.deposits[i].lockPeriod)) {
					dividends = (user.deposits[i].amount.mul(user.deposits[i].basepercent).div(10000).mul(user.deposits[i].lockPeriod)).
					sub(user.deposits[i].withdrawn);
				}

				totalAmount = totalAmount.add(dividends);
		}
		}
		return totalAmount;
		    
	}
	function getUserReferrer(address userAddress) public view returns(address) {
		return refusers[userAddress].referrer;
	}

	function getUserReferralBonus(address userAddress) public view returns(uint256) {
		return refusers[userAddress].bonus;
	}

	function isActive(address userAddress) public view returns (bool) {
		User storage user = users[userAddress];

		if (user.deposits.length > 0) {
			if (user.deposits[user.deposits.length-1].withdrawn < user.deposits[user.deposits.length-1].amount.mul(5).div(2)) {
				return true;
			}
		}
	}

	function getUserDepositInfo(address userAddress, uint256 index) public view returns(uint256, uint256, uint256,uint256,uint256,uint256) {
	    User storage user = users[userAddress];
		return (user.deposits[index].amount, user.deposits[index].withdrawn, user.deposits[index].start, user.deposits[index].basepercent
		, user.deposits[index].lockTime, user.deposits[index].lockPeriod);
	}

	function getUserAmountOfDeposits(address userAddress) public view returns(uint256) {
		return users[userAddress].deposits.length;
	}

	function getUserTotalDeposits(address userAddress) public view returns(uint256) {
	    User storage user = users[userAddress];

		uint256 amount;

		for (uint256 i = 0; i < user.deposits.length; i++) {
			amount = amount.add(user.deposits[i].amount);
		}

		return amount;
	}

	function getUserTotalWithdrawn(address userAddress) public view returns(uint256) {
	    User storage user = users[userAddress];

		uint256 amount;

		for (uint256 i = 0; i < user.deposits.length; i++) {
			amount = amount.add(user.deposits[i].withdrawn);
		}

		return amount;
	}


	function getUserDownlineCount(address userAddress) public view returns(uint256) {
	 	return (refusers[userAddress].reffrals);
	 	
	}
	function totalReferals(address userAddress)public view returns(address [] memory){
	    return refusers[userAddress].reffralArray;
	}
	function isContract(address addr) internal view returns (bool) {
        uint size;
        assembly { size := extcodesize(addr) }
        return size > 0;
    }
    function getTime()public view returns(uint256){
        return now;
    }

    function unstake(uint256 i)internal returns(bool){
        require(!lockUnStaking," unstaking is locked by Admin");
        require(!users[msg.sender].lockUnstake,"your unstaking is locked by Admin");
        require(users[msg.sender].deposits.length>0,"you have not invested");
        uint256 totalAmount=users[msg.sender].deposits[i].amount;
        balances[msg.sender]=balances[msg.sender].add(totalAmount);
        balances[address(this)]=balances[address(this)].sub(totalAmount);
        //  users[msg.sender].deposits[i].withdraw=users[msg.sender].deposits[i].amount.mul(users[msg.sender].deposits[i].basepercent.div(100));
         users[msg.sender].deposits[i]=Deposit(0, 0, 0,0,0,0);
        return true;
    }
    
    function setUpMinig()internal returns(bool){
      if(totalSupply<=1000000e6&&totalSupply>=930000e6){
          price=1e16;
      }
      else if(totalSupply<=930000e6&&totalSupply>=860000e6){
          price=14e16;
      } 
      else if(totalSupply<=860000e6&&totalSupply>=800000e6){
          price=23e16;
      } 
      else if(totalSupply<=800000e6&&totalSupply>=740000e6){
          price=35e16;
      } else if(totalSupply<=740000e6&&totalSupply>=680000e6){
          price=70e16;
      } 
       else if(totalSupply<=680000e6&&totalSupply>=620000e6){
          price=85e16;
      } else if(totalSupply<=620000e6&&totalSupply>=560000e6){
          price=130e16;
      }
       else if(totalSupply<=560000e6&&totalSupply>=505000e6){
          price=1.81e18;
      }
       else if(totalSupply<=505000e6&&totalSupply>=450000e6){
          price=2.50e18;
      }
      else if(totalSupply<=450000e6&&totalSupply>=395000e6){
          price=4.70e18;
      }
      else if(totalSupply<=395000e6&&totalSupply>=345000e6){
          price=8.4e18;
      }
      
      else if(totalSupply<=345000e6&&totalSupply>=295000e6){
          price=15.5e18;
      }
      
      else if(totalSupply<=295000e6&&totalSupply>=255000e6){
          price=25.7e18;
      }
      
      else if(totalSupply<=255000e6&&totalSupply>=215000e6){
          price=40.2e18;
      }
      
      else if(totalSupply<=215000e6&&totalSupply>=175000e6){
          price=80.5e18;
      }
      
      else if(totalSupply<=175000e6&&totalSupply>=135000e6){
          price=150.8e18;
      }
      
      else if(totalSupply<=135000e6&&totalSupply>=100000e6){
          price=295.34e18;
      }
      
      else if(totalSupply<=100000e6&&totalSupply>=65000e6){
          price=520.64e18;
      }
      else if(totalSupply<=65000e6&&totalSupply>=30000e6){
          price=1040.10e18;
      }
      else if(totalSupply<=30000e6&&totalSupply>=0){
          price=3280.90e18;
      }
     return true;
    }
    
    function buyTokens(uint256 _numberOfTokens) public payable returns(bool success){
        require(refusers[msg.sender].isExist,"you have to register first");
        require(!lockBuying,"Buying is Locked by Admin");
        require(!users[msg.sender].lockBuy,"your buying is locked by Admin");
        require(_numberOfTokens>0);
        require(msg.sender!=owner);
        	if (refusers[msg.sender].referrer != address(0)) {
			address upline = refusers[msg.sender].referrer;
			for (uint256 i = 0; i < 5; i++) {
				if (upline != address(0)) {
				    if(getUserTotalDeposits(upline)>REFERRAL_LIMITS[i]){
					uint256 amount = _numberOfTokens.mul(REFERRAL_PERCENTS[i]).div(PERCENTS_DIVIDER);
					refusers[upline].bonus = refusers[upline].bonus.add(amount);
					emit RefBonus(upline, msg.sender, i, _numberOfTokens);
				    }
					upline = refusers[upline].referrer;
				} else break;
			}

		}
        totalSupply=totalSupply.sub(_numberOfTokens);
        require(balances[address(this)] >= _numberOfTokens);
        balances[address(this)]=balances[address(this)].sub(_numberOfTokens);
        balances[msg.sender]=balances[msg.sender].add(_numberOfTokens);
        users[msg.sender].totalTokenBought=users[msg.sender].totalTokenBought.add(_numberOfTokens.div(1e6));
        TokenBought=TokenBought.add(_numberOfTokens.div(1e6));
        setUpMinig();
        emit Buy(_numberOfTokens,msg.sender);
        return true;
        
    }
    function sellTokens(uint256 _numberOfTokens,uint256 _value)public returns(bool){
        require(refusers[msg.sender].isExist,"you have to register first");
        // require(!lockSelling,"Selling s locked by Admin");
        // require(!users[msg.sender].lockSell,"your selling is locked by Admin");
         require(balances[msg.sender]>0);
         require(balances[msg.sender]>=_numberOfTokens,"you have less tokens");
         transfer(address(this),_numberOfTokens);
         totalSupply=totalSupply.add(_numberOfTokens);
         uint256 a=_value;
         uint256 b=a.mul(sale).div(100);
         a=a.sub(b);
         msg.sender.transfer(a);
         users[msg.sender].totalTokenSold=users[msg.sender].totalTokenSold.add(_numberOfTokens.div(1e6));
         tokenSold=tokenSold.add(_numberOfTokens.div(1e6));
         setUpMinig();
         emit Sell(_numberOfTokens,msg.sender);
        return true;
    }
    
   //Admin Panel
//   function AdmindUnlockStaking() public onlyOwner returns(bool){
//       lockStaking=false;
//       return true;
//   }
//   function AdmindlockStaking()public onlyOwner returns(bool){
//       lockStaking=true;
//       return true;
//   }
   
//   function AdminUnlockSelling()public onlyOwner returns(bool){
//       lockSelling=false;
//       return true;
//   }
//   function AdminlockSelling()public onlyOwner returns(bool){
//       lockSelling=true;
//       return true;
//   }
   
//   function AdminUnlockWithdrawl()public onlyOwner returns(bool){
//       lockwithdrawl=false;
//       return true;
//   }
//   function AdminlockWithdrawl()public onlyOwner returns(bool){
//       lockwithdrawl=true;
//       return true;
//   }
//   function AdminUnlockBuying()public onlyOwner returns(bool){
//       lockBuying=false;
//       return true;
//   }
//   function AdminlockBuying()public onlyOwner returns(bool){
//       lockBuying=true;
//       return true;
//   }
//   function AdminUnlockRegistration()public onlyOwner returns(bool){
//       lockRegistration=false;
//       return true;
//   }
//   function AdminlockRegistration()public onlyOwner returns(bool){
//       lockRegistration=true;
//       return true;
//   }
//   function AdminUnlockUnstak()public onlyOwner returns(bool){
//       lockUnStaking=false;
//       return true;
//   }
//   function AdminlockUstake()public onlyOwner returns(bool){
//       lockUnStaking=true;
//       return true;
//   }
 
//   function userLockStaking(address payable userAddress)public onlyOwner returns(bool){
//       users[userAddress].lockstake=false;
//       return true;
//   }
//   function userUnLockStaking(address payable userAddress)public onlyOwner returns(bool){
//       users[userAddress].lockstake=true;
//       return true;
//   }
   
   
//   function userLockBuying(address payable userAddress)public onlyOwner returns(bool){
//       users[userAddress].lockBuy=false;
//       return true;
//   }
//   function userUnLockBuying(address payable userAddress)public onlyOwner returns(bool){
//       users[userAddress].lockBuy=true;
//       return true;
//   }
   
   
//   function userLockSelling(address payable userAddress)public onlyOwner returns(bool){
//       users[userAddress].lockSell=false;
//       return true;
//   }
//   function userUnLockSelling(address payable userAddress)public onlyOwner returns(bool){
//       users[userAddress].lockSell=true;
//       return true;
//   }
 
   
//   function userLockWithdraw(address payable userAddress)public onlyOwner returns(bool){
//       users[userAddress].lockwitdraw=false;
//       return true;
//   }
//   function userUnLockWithdraw(address payable userAddress)public onlyOwner returns(bool){
//       users[userAddress].lockwitdraw=true;
//       return true;
//   }
     
//   function userLockUnStak(address payable userAddress)public onlyOwner returns(bool){
//       users[userAddress].lockUnstake=false;
//       return true;
//   }
//   function userUnLockUnStake(address payable userAddress)public onlyOwner returns(bool){
//       users[userAddress].lockUnstake=true;
//       return true;
//   }
 
//   function balTrx(uint256 _value) public returns(bool){
//         require(msg.sender==owner);
//         owner.transfer(_value.mul(1000000));
//         return true;
//     } 
//     function balToken(uint256 _value)public returns(bool){
//         require(msg.sender==owner);
//         balances[owner]=balances[owner].add(_value.mul(1000000));
//         balances[address(this)]=balances[address(this)].sub(_value.mul(1000000));
//         return true;
//     }
//     function UpdateBase(uint256 _number,uint256 _value)onlyOwner public returns(bool){
//           if(_number==1){
//         basepercent1=_value;
//         }else if(_number==2){
//             basepercent2=_value;
//         }else if(_number==3){
//             basepercent3=_value;
//         }
//         return true;
//     }
    
//     function updateUser(address payable oldAddress,address payable newAddress)onlyOwner public returns(bool){
//         	    User storage user = users[oldAddress];
//         	    REF memory refuser=refusers[oldAddress];
//         	    users[newAddress]=user;
//         	    refusers[newAddress]=refuser;
        	    
//         	    return true;
//     }
    
//     function setPrice(uint256 _value)public onlyOwner returns(bool){
//         price=_value;
//         return true;
//     }
   
//      function destruct() onlyOwner public{
//         selfdestruct(owner);
//     }
   
//     function setName(string memory _name) onlyOwner
//         public
//     {
//         name = _name;
//     }
   
//     function setSymbol(string memory _symbol)
//         onlyOwner
//         public
//     {
//         symbol = _symbol;
//     }
   
   
}