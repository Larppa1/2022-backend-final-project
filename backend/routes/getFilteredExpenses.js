const express = require('express')
const router = express.Router()
const expenses = require('../models/expenses')

router.get('/', async (req, res, next) => {
  const month = req.query.month
  
  try {
    res.json(await expenses.getFilteredExpenses(month))
  } catch (err) {
    console.error(err)
    next(err)
  }
})

module.exports = router