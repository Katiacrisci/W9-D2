class MotherAccount {
  balanceInit: number = 0;

  constructor(_balance: number) {
    this.balanceInit = _balance;
  }

  oneDeposit(amount: number): number {
    this.balanceInit += amount;
    return this.balanceInit;
  }

  oneWithDraw(amount: number): number {
    this.balanceInit -= amount;
    return this.balanceInit;
  }
}

class SonAccount extends MotherAccount {
  constructor(_balance: number) {
    super(_balance);
  }
}

const son = new SonAccount(1000);
son.balanceInit;
console.log(son.oneWithDraw(100));