const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Search items by name
router.get('/search', async (req, res) => {
  try {
    const query = req.query.name;
    const items = await Item.find({ name: new RegExp(query, 'i') });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
