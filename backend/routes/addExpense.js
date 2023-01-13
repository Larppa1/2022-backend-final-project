const express = require('express')
const router = express.Router()
const expenses = require('../models/expenses')

router.get('/', async (req, res, next) => {
  const shop = req.query.shop
  const category = req.query.shop
  const date = req.query.date
  const month = req.query.month
  const year = req.query.year
  const amount = req.query.amount

  try {
    res.json(await expenses.addExpense(shop, category, date, month, year, amount))
  } catch (err) {
    console.error(err)
    next(err)
  }
})

module.exports = router