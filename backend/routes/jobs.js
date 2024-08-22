 // backend/routes/jobs.js
const express = require('express');
const Job = require('../models/Job');
const User = require('../models/User');

const router = express.Router();

// Create a new job
router.post('/create', async (req, res) => {
  const { title, description, payment, location, posterId } = req.body;

  try {
    const job = new Job({
      title,
      description,
      payment,
      location,
      poster: posterId,
    });

    await job.save();
    res.json(job);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find({ status: 'open' }).populate('poster', 'name email');
    res.json(jobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Apply for a job
router.put('/apply/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (job.status !== 'open') {
      return res.status(400).json({ msg: 'Job is not available' });
    }

    job.seeker = req.body.seekerId;
    job.status = 'in-progress';

    await job.save();
    res.json(job);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;