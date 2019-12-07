const express = require('express');

const router = express.Router();

// @route   GET api/contacts
// @desc    Get all contacts for current user
// @access  Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @route   POST api/contacts
// @desc    Add new contact for current user
// @access  Private
router.post('/', (req, res) => {
  res.send('Create new contacts');
});

// @route   PUT api/contacts/:id
// @desc    Update specified contact for current user
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route   DELETE api/contacts/:id
// @desc    Delete specified contact for current user
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
