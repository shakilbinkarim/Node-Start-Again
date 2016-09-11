var account = {
    balance: 0
};

function deposit (account, amount) {
    account.balance = account.balance + amount;
    console.log('BDT ' + amount + ' deposited\n');
}

function withdraw (account, amount) {
    account.balance -= amount;
    console.log('BDT ' + amount + ' withdrawn\n');
}

function getBalance (account) {
    console.log('Current balance is BDT:\t' + account.balance + '\n');
}

deposit(account, 5000);
withdraw(account, 3000);
getBalance(account);
deposit(account, 8000);
getBalance(account);