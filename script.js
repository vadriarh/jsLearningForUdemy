'use strict';
let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

function setExpense() {
    return prompt("Введите обязательную " +
        "статью расходов в этом месяце", "")
};

function setAmount() {
    return +prompt("Во сколько обойдется?", "")
};
console.log(typeof(money));
let appData = {

    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false

}

appData.expenses[setExpense()] = setAmount();
appData.expenses[setExpense()] = setAmount();

console.log(appData);
alert(appData.budget / 30);