const express = require('express')
const router = express.Router()
const expenses = require('../models/expenses')

router.get('/', async (req, res, next) => {
  const amount = req.query.amount
  const shop = req.query.shop_id
  const category = req.query.category_id
  const date = req.query.date
  const month = req.query.month
  const year = req.query.year

  try {
    res.json(await expenses.addExpense(amount, shop, category, date, month, year))
  } catch (err) {
    console.error(err)
    next(err)
  }
})

module.exports = router