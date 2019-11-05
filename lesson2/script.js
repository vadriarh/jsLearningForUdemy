"use strict";
let money = +prompt("Ваш бюджет на месяц?", ""),
  time = prompt("Введите дату в формате YYYY-MM-DD", ""),
  countOfExpensies = 2;

function setExpense() {
  return prompt("Введите обязательную " + "статью расходов в этом месяце", "");
}

function setAmount() {
  return +prompt("Во сколько обойдется?", "");
}

function validateExpense(expense) {
  return typeof expense === "string" && typeof expense != null && expense != "";
}

function validateAmount(amount) {
  return typeof amount === "number" && typeof amount != null && amount != "";
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

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
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

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Низкий уровень дохода");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень дохода");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень дохода");
} else {
  console.log("Ошибка расчета дохода");
}
