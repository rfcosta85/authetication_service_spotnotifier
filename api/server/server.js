// const express = require('express')
import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

// app.listen(3001, () => {
//   console.log('Server is running on port 3001');
// });

export default app; // Export app for testing