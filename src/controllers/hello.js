const asyncHandler = require('express-async-handler')

const hello = asyncHandler(async (req, res) => {
  const { name } = req.query
  res.status(200).json({ status: `Hello there ${ name }` })
})

exports.hello = hello
