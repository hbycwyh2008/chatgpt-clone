const openai = require('../config/openaiConfig')

const generateChatCompletion = async (req, res) => {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4-turbo",
            messages: req.body.messages,
            temperature: 0.7
        });

        res.status(200).json({
            content: response.choices[0].message.content
        })
    } catch (error) {
        console.error('OpenAI API Error:', error);
        res.status(500).json({
            error: 'Failed to generate response',
            message: error.message
        })
    }
}

module.exports = { generateChatCompletion }