/* const {createPool} = require('mysql')

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "pepperi",
  database: "expensestracker",
  connectionLimit: 10
})

var amount = 12
var shop_id = 1
var category_id = 1
var date = "06012023"

pool.query('SELECT * FROM shops;', (err, res) => {
  console.log(res.map((res, index) => ({
    id: res.id,
    name: res.shop_name,
  })))
  return pool.end()
})

pool.query(`INSERT INTO expenses (amount, shop_id, category_id, date) VALUES ('${amount}', '${shop_id}', '${category_id}', '${date}');`, (err, res) => {
  console.log(res)
  return pool.end()
}) */

const express = require('express')
const app = express()
const PORT = 3307
const expensesRouter = require('./routes/getExpenses')
const addExpenseRouter = require('./routes/addExpense')
const deleteExpenseRouter = require('./routes/deleteExpense')
const updateExpenseRouter = require('./routes/updateExpense')
const getFilteredExpensesRouter = require('./routes/getFilteredExpenses')

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/', (req, res) => {
  res.json("OK")
})

app.use('/expenses/all', expensesRouter)
app.use('/expenses/add', addExpenseRouter)
app.use('/expenses/delete', deleteExpenseRouter)
app.use('/expenses/update', updateExpenseRouter)
app.use('/expenses/filter', getFilteredExpensesRouter)

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`)
})