const { OpenAI } = require('openai')
require('dotenv').config()

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1',
    organization: '',
    project: '',
})

module.exports = openai