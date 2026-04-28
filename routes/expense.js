import express from 'express'
import Expense from '../models/Expense.js';
import { auth } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { expenseSchema } from '../validators/expenseValidators.js';

const router = express.Router();

router.post("/", auth, validate(expenseSchema), async (req, res) => {
   const data = req.validated.body;

 const expense = await Expense.create({
    ...data,
    date: data.date ? new Date(data.date) : new Date(),
    user: req.user,
  });

  res.json(expense);
});

router.get("/", auth,async (req, res) => {
  const expenses = await Expense.find({ user: req.user });
  res.json(expenses);
});

router.delete("/:id", auth, async (req, res) => {
  await Expense.findOneAndDelete({
    _id: req.params.id,
    user: req.user,
  });

  res.json({ msg: "Deleted" });
});

export default router