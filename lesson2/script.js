"use strict";

// global variables

let money,
  time,
  countOfExpensies = 2,
  countOfOptExpensies = 3;

// functions

function start() {
  while (!validateAmount(money)) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
}

function setExpense() {
  return prompt("Введите обязательную " + "статью расходов в этом месяце", "");
}

function setOptExpense() {
  return prompt("Статья необязательных расходов?");
}

function setAmount() {
  return +prompt("Во сколько обойдется?", "");
}

function validateExpense(expense) {
  return expense != null && expense != "";
}

function validateAmount(amount) {
  return !isNaN(amount) && amount != null && amount != "";
}

function addExpensies() {
  let expense = setExpense(),
    amount = setAmount();
  if (validateExpense(expense) && validateAmount(amount)) {
    appData.expenses[expense] = amount;
    return true;
  } else {
    return false;
  }
}

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?"),
      percent = +prompt("Под какой процент?");

    appData.monthIncome = ((save / 100 / 12) * percent).toFixed(2);
    alert("Доход в месяц с вашего депозита " + appData.monthIncome);
  }
}

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed(2);
  alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Низкий уровень дохода");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень дохода");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень дохода");
  } else {
    console.log("Ошибка расчета дохода");
  }
}

function chooseOptExpenses() {
  let optionalExpenses = {};
  for (let i = 0; i < countOfOptExpensies; i++) {
    optionalExpenses[i + 1] = setOptExpense();
  }
  appData.optionalExpenses=optionalExpenses;
}
// start script

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};

for (let i = 0; i < countOfExpensies; i++) {
  if (!addExpensies()) {
    i--;
  }
}

// let i = countOfExpensies;
// while (i > 0) {
//     if (addExpensies()) {
//         i--;
//     } else {
//         i++;
//     }
// }

// let i=0;
// do{
//     if (addExpensies()) {
//         i++;
//     } else {
//         i--;
//     }
// }while(i<countOfExpensies);

detectDayBudget();

detectLevel();

chooseOptExpenses();

checkSavings();
