class BankAccount
{
    constructor(balance)
    {
        this.balance = balance;
    }
    getBalance()
    {
        return this.balance;
    }
    deposit(amount)
    {
        this.balance += amount;
    }
    withdraw(amount)
    {
        if (amount <= this.balance)
        {
            this.balance -= amount;
        }
        else
        {
            console.log("Insufficient Funds");
        }
    }
}

const account = new BankAccount(100);
console.log(account.getBalance());
account.deposit(50);
console.log(account.getBalance());
account.withdraw(30);
console.log(account.getBalance());
account.withdraw(200);