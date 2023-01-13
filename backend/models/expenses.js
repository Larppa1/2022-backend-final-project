const connection = require('../db/connection')

async function getExpenses() {
  const result = await connection.query(`SELECT * FROM expenses;`)
  return result
}

async function addExpense(shop, category, date, month, year, shop) {
  const result = await connection.query(`INSERT INTO expenses (shop, category, date, month, year, amount) VALUES ("${shop}", "${category}", "${date}", "${month}", "${year}", "${amount}");`)
  return result
}

async function deleteExpense(id) {
  const result = await connection.query(`DELETE FROM expenses WHERE id = ${id};`)
  return result
}

async function updateExpense() {
  const result = await connection.query(`UPDATE expenses SET shop_id = 2 WHERE id = 3;`)
  return result
}

async function getFilteredExpenses(month) {
  const result = await connection.query(`SELECT * FROM expenses WHERE month = "${month}";`)
  return result
}

module.exports = {
  getExpenses,
  addExpense,
  deleteExpense,
  updateExpense,
  getFilteredExpenses,
}