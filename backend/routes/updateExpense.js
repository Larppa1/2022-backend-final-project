const express = require('express')
const router = express.Router()
const expenses = require('../models/expenses')

router.get('/', async (req, res, next) => {
  try {
    res.json(await expenses.updateExpense())
  } catch (err) {
    console.error(err)
    next(err)
  }
})

module.exports = router