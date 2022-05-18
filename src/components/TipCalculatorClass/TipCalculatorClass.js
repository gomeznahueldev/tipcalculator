export class TipCalculator {
  constructor(billAmount, tipPercentage, personCount) {
    this.billAmount = billAmount;
    this.tipPercentage = tipPercentage;
    this.personCount = personCount;
  }

  calculateTip() {
    return this.billAmount * (this.tipPercentage / 100);
  }

  calculateTotal() {
    return parseFloat(this.billAmount) + parseFloat(this.calculateTip());
  }

  calculatePerPerson() {
    return this.calculateTotal() / this.personCount;
  }
}
