const express = require('express')
const router = express.Router()
const expenses = require('../models/expenses')

router.get('/', async (req, res, next) => {
  try {
    res.json(await expenses.getExpenses())
  } catch (err) {
    console.error(err)
    next(err)
  }
})

module.exports = router