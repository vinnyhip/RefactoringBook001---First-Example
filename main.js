'use strict';

const fs = require('fs');

/**
 * Program: Print bills
 * Author: Vinícius Hipólito
 */

const _plays = fs.readFileSync("data/plays.json");
const plays = JSON.parse(_plays);

const _invoices = fs.readFileSync("data/invoices.json");
const invoices = JSON.parse(_invoices);

function statement(invoice, plays) {
    let totalAmount = 0;
    let volumeCredtis = 0;
    let result = `Statement for ${invoice.customer}\n`;
    const format = new Intl.NumberFormat(
        "en-US", 
        { style: "currency", currency: "USD", minimumIntegerDigits: 2}
    ).format;

    for (let perf of invoice.performances) {
        volumeCredtis +=  volumeCreditsFor(perf);

        // print line for this order
        result += ` ${playFor(perf).name}: ${format(amountFor(perf)/100)} (${perf.audience} seats)\n`;
        totalAmount += amountFor(perf);
    }

    result += `Amount owed is ${format(totalAmount/100)}\n`;
    result += `You earned ${volumeCredtis} credits\n`;
    return result;

    function amountFor(aPerformance) {
        let result = 0;

        switch (playFor(aPerformance).type) {
            case "tragedy":
                result = 40_000;
                if (aPerformance.audience > 30) {
                    result += 1000 * (aPerformance.audience - 30);
                }
                break;
            case "comedy":
                result = 30_000;
                if (aPerformance.audience > 20) {
                    result += 10_000 + 500 * (aPerformance.audience - 20);
                }
                result += 300 * aPerformance.audience;
                break;
            default:
                throw new Error(`unknown type: ${playFor(aPerformance).type}`);
        }

        return result;
    }

    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }

    function volumeCreditsFor(perf) {
        let result = 0;
        result += Math.max(perf.audience - 30, 0);
        if ("comedy" === playFor(perf).type) volumeCredtis += Math.floor(perf.audience / 5);
        return result;
    }
}

console.log(statement(invoices[0], plays))