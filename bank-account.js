var accounts = [];

//Account Object
//Balance
//username


//createAccount(account)
//push onto Account array
//return account
function createAccount(account){
	accounts.push(account);	
	return account;	
}


//getAccount(username)
//find matching account using forEach
function getAccount(username){
	var matchedAccount;
	accounts.forEach(function(account){
		if(account.username === username){
			matchedAccount = account;
		}
	});

	return matchedAccount; 
}


//deposit
	function deposit(acc,amt){
		acc.balance += amt;
	}
//withdraw
	function withdraw(acc,amt){
		acc.balance -= amt;
	}
//getBalance
	function getBalance(acc){
		return acc.balance;
	}

var rajansAccount = createAccount({
	username: 'Rajan',
	balance: 0
});

deposit(rajansAccount,10000000000);
console.log(getBalance(rajansAccount));

withdraw(rajansAccount,5000);
console.log(getBalance(rajansAccount));

var existingAccount1 = getAccount('Rajan');
console.log(getBalance(existingAccount1));

var julsAccount = createAccount({
	username: 'Juls',
	balance: 90000000000
});

console.log(accounts);

var existingAccount2 = getAccount('Juls');
console.log(existingAccount2);
