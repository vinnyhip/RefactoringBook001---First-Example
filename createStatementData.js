class PerformanceCalculator {
    constructor(aPerformance, aPlay) {
        this.performance = aPerformance;
        this.play = aPlay;
    }

    get amount() {
        let result = 0;

        switch (this.play.type) {
            case "tragedy":
                result = 40_000;
                if (this.performance.audience > 30) {
                    result += 1000 * (this.performance.audience - 30);
                }
                break;
            case "comedy":
                result = 30_000;
                if (this.performance.audience > 20) {
                    result += 10_000 + 500 * (this.performance.audience - 20);
                }
                result += 300 * this.performance.audience;
                break;
            default:
                throw new Error(`unknown type: ${this.play.type}`);
        }

        return result;
    }

    get volumeCredits() {
        let result = 0;
        result += Math.max(this.performance.audience - 30, 0);
        if ("comedy" === this.play.type) result += Math.floor(this.performance.audience / 5);
        return result;
    }
}

function createPerformanceCalculator(aPerformance, aPlay) {
    switch(aPlay.type) {
        case "tragedy": return new TragedyCalculator(aPerformance, aPlay);
        case "comedy": return new ComedyCalculator(aPerformance, aPlay);
        default:
            throw new Error(`unknown type: ${aPlay.type}`);
    }
}

class TragedyCalculator extends PerformanceCalculator {

}

class ComedyCalculator extends PerformanceCalculator {

}

module.exports = {
    createStatementData: function createStatementData(invoice, plays) {
        const result = {};
        result.customer = invoice.customer;
        result.performances = invoice.performances.map(enrichPerformance);
        result.totalVolumeCredits = totalVolumeCredits(result);
        result.totalAmount = totalAmount(result);
        return result;

        function enrichPerformance(aPerformance) {
            const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance));
            const result = Object.assign({}, aPerformance);
            result.play = calculator.play;
            result.amount = amountFor(result);
            result.volumeCredits = volumeCreditsFor(result);
            return result;
        }

        function playFor(aPerformance) {
            return plays[aPerformance.playID];
        }

        function amountFor(aPerformance) {
            return new PerformanceCalculator(aPerformance, playFor(aPerformance)).amount;
        }

        function volumeCreditsFor(aPerformance) {
            return new PerformanceCalculator(aPerformance, playFor(aPerformance)).volumeCredits;
        }

        function totalVolumeCredits(data) {
            return data.performances
                .reduce((total, p) => total + p.volumeCredits, 0);
        }

        function totalAmount(data) {
            return data.performances
                .reduce((total, p) => total + p.amount, 0);
        }
    }
}