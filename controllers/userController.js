const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Index

router.get('/', (req, res) => {
  User.find({}, (error, allUsers) => {
    if (error) {
      console.error(error);
      res.json({
        error: 'an error has occurred'
      });
    } else {
      console.log('success!')
      res.json({
        message: 'success',
        users: allUsers
      });
    }
  });
});

// Delete

router.delete('/:id', (req, res) => {
  User.deleteOne({
    _id: req.params.id
  }, (error, deletedUser) => {
    if (error) {
      console.error(error);
      res.json({
        error: 'an error has occurred'
      });
    } else {
      console.log('success!')
      res.json({
        message: 'Successfully deleted'
      });
    }
  });
});

// Update

router.put('/:id', (req, res) => {
  User.updateOne({
    _id: req.params.id
  }, req.body, (error, updatedUser) => {
    if (error) {
      console.error(error);
      res.json({
        error: 'an error has occurred'
      });
    } else {
      console.log('success!')
      res.json({
        message: 'Successfully updated'
      });
    }
  });
});

// Create

router.post('/', (req, res) => {
  User.create(req.body, (error, createdUser) => {
    if (error) {
      console.error(error);
      res.json({
        error: 'an error has occurred'
      });
    } else {
      console.log('success!')
      res.json({
        message: 'Successfully created',
        user: createdUser
      });
    }
  });
});

// Show

router.get('/:id', (req, res) => {
  User.findOne({
    _id: req.params.id
  }, (error, foundUser) => {
    if (error) {
      console.error(error);
      res.json({
        error: 'an error has occurred'
      });
    } else {
      console.log('success!')
      res.json({
        message: 'Found successfully',
        user: foundUser
      });
    }
  });
});

module.exports = router;