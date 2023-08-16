function createAccount(pin, amount=0) {
  let balance = amount;
  return {
    checkBalance(acountPin) {
      if (pin === acountPin) {
        return "$"+balance;
      }
      return "Invalid PIN.";
    },
    deposit(accountPin, amnt) {
      if (accountPin === pin) {
        balance += amnt;
        return `Succesfully deposited $${amnt}. Current balance: $${balance}.`;
      }
      return "Invalid PIN.";
    },
    withdraw(accountPin, amnt) {
      if (accountPin === pin) {
        if (amnt < balance) {
          balance -= amnt;
          return `Succesfully withdrew $${amnt}. Current balance: $${balance}.`;
        } else {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        }
      }
      return "Invalid PIN.";
    },
    changePin(oldPin, newPin) {
      if (oldPin === pin) {
        pin = newPin;
        return "PIN successfully changed!";
      }
      return "Invalid PIN.";
    },
  };
}

module.exports = { createAccount };
