const card = require('./card');

function blackJackCard() {}
blackJackCard.prototype = new card();
blackJackCard.prototype.minValue = function () {
  if (this.IsFaceCard()) {
    return 10;
  }

  return this.value;
};

blackJackCard.prototype.maxValue = function () {
  if (this.value === card.values.Ace) {
    return 11;
  }

  return this.minValue();
};

module.exports = blackJackCard;
