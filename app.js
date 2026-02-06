const express = require('express')

const { generateChatCompletion } = require('./controllers/chatGPTCloneController');

// app setup
const app = express()
const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`listening to requests on port ${PORT}`))

// middleware
app.use(express.json());
app.use(express.static('public'))

// routes
app.post('/openai/chatgpt_clone', generateChatCompletion)
