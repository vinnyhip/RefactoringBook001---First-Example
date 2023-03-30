'use strict';

const fs = require('fs');
const createStatementData = require('./createStatementData').createStatementData;

/**
 * Program: Print bills
 * Author: Vinícius Hipólito
 */

const _plays = fs.readFileSync("data/plays.json");
const plays = JSON.parse(_plays);

const _invoices = fs.readFileSync("data/invoices.json");
const invoices = JSON.parse(_invoices);

function statement(invoice, plays) {
    return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data) {
    let result = `Statement for ${data.customer}\n`;
    for (let perf of data.performances) {
        result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience} seats)\n`;
    }
    result += `Amount owed is ${usd(data.totalAmount)}\n`;
    result += `You earned ${data.totalVolumeCredits} credits\n`;
    return result;

    function usd(aNumber) {
        return new Intl.NumberFormat(
            "en-US", 
            { style: "currency", currency: "USD", minimumIntegerDigits: 2}
        ).format(aNumber/100);
    }
}

console.log(statement(invoices[0], plays))