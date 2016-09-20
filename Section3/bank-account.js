var accounts = [];

function createAccount (userName) {
    accounts.push({
        userName : userName,
        balance: 0
    });
    return accounts[accounts.length - 1];
}

function getAccount (name) {
    var foundAccount;
    accounts.forEach(function (account) {
        if (account.userName === name) {
            foundAccount = account;
        }
    });
    if (typeof foundAccount !== 'undefined') {
        return foundAccount;
    } else {
        return {
            userName : 'I am a dummy',
            balance : -555555555555555555555555
        };
    }
}

function deposit (account, amount) {
    account.balance = account.balance + amount;
    console.log('BDT ' + amount + ' deposited to ' + account.userName + '\n');
}

function withdraw (account, amount) {
    account.balance -= amount;
    console.log('BDT ' + amount + ' withdrawn from ' + account.userName + '\n');
}

function getBalance (account) {
    console.log('Current balance of ' + account.userName + ' is BDT:\t' + account.balance + '\n');
}

deposit(createAccount('Triss Merigold'), 5000);
withdraw(getAccount('Triss Merigold'), 3000);
deposit(getAccount('Triss Merigold'), 8000);
getBalance(getAccount('Triss Merigold'));

deposit(createAccount('Yennefer'), 4000);
withdraw(getAccount('Yennefer'), 3000);
deposit(getAccount('Yennefer'), 3000);
getBalance(getAccount('Yennefer'));
getBalance(getAccount('Triss Merigold'));
getBalance(getAccount('Ciri'));
