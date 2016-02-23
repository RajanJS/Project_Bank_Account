//account array to store accounts information
var accounts = [];

//function to create an account
function createAccount(account){
	accounts.push(account);	
	return account;	
}


//getAccount(username)
//find matching account using forEach
function getAccount(username){
	var matchedAccount;

	for(var i = 0; i<accounts.length ; i++){
		if(accounts[i].username === username){
			matchedAccount = accounts[i];
		}
	}
	return matchedAccount; 
}


//deposit
	function deposit(acc,amt){
		if(typeof amt === 'number'){
		acc.balance += amt;
		console.log('You have successfully deposited '+amt+ ' in '+ acc.username+'\'s Account.');
		}else{
			console.log('Coundn\'t deposit not an valid number !');
		}
	}
//withdraw
	function withdraw(acc,amt){
		if(typeof amt === 'number'){
			acc.balance -= amt;
		console.log('You have successfully withdrawn '+amt+ ' from '+ acc.username+'\'s Account.');
		}else{
			console.log('Coundn\'t withdraw not an valid number !');
		}
	}

//getBalance
	function getBalance(acc){
		return acc.balance;
	}



function createBalanceGetter (acc){
	return function(){
		return acc.balance;
	}
}



//Create Account
var rajansAccount = createAccount({
	username: 'Rajan',
	balance: 0
});

deposit(rajansAccount,10000000000);

withdraw(rajansAccount,5000);

var rajan1 = getAccount('Rajan');
var getRajanBalance  = createBalanceGetter(rajan1);
console.log('Total remainig balance in '+rajan1.username+' \'s account is '+getRajanBalance());