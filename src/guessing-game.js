class GuessingGame {
    constructor() {}

     setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        this.answer = Math.round((this.max + this.min) / 2);
        return this.answer;
    }

    lower() {
        this.max = this.answer;
    }

    greater() {
        this.min = this.answer;
    }
}

module.exports = GuessingGame;
