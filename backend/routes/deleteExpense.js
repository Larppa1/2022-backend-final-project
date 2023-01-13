const express = require('express')
const router = express.Router()
const expenses = require('../models/expenses')

router.get('/', async (req, res, next) => {
  const id = req.query.id

  try {
    res.json(await expenses.deleteExpense(id))
  } catch (err) {
    console.error(err)
    next(err)
  }
})

module.exports = router