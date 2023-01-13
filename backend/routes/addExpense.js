const express = require('express')
const router = express.Router()
const expenses = require('../models/expenses')

router.get('/', async (req, res, next) => {
  const amount = req.query.amount
  const shop_id = req.query.shop_id
  const category_id = req.query.category_id
  const date = req.query.date
  const month = req.query.month

  try {
    res.json(await expenses.addExpense(amount, shop_id, category_id, date, month))
  } catch (err) {
    console.error(err)
    next(err)
  }
})

module.exports = router