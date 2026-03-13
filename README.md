# Sales Call Analyzer

A web application that analyzes sales calls using AI-powered insights from OpenAI. The app evaluates call quality, identifies strengths and weaknesses, and provides actionable feedback to help improve sales performance.

## Features
- 📊 AI-powered sales call analysis
- 🎯 Customer interest assessment
- 💡 Strengths and weaknesses identification
- 📈 Deal closing probability estimation
- 🔍 Detailed improvement recommendations

## Tech Stack
- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript
- **AI**: OpenAI GPT-4o-mini
- **Other**: CORS, dotenv

## Project Structure
```
sales-call-analyzer/
├── server.js      # Node.js/Express backend
├── index.html     # Frontend interface
├── package.json   # Project dependencies
├── .env          # Environment variables (not in repo)
├── .gitignore     # Git ignore rules
└── README.md      # This file
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- OpenAI API key ([get one here](https://platform.openai.com/api-keys))

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/Mikal369/sales-call-analyzer.git
   cd sales-call-analyzer
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=3000
   ```
4. Start the server:
   ```
   npm start
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Usage
1. Paste or input a sales call transcript in the textarea
2. Click the "Analyze Call" button
3. Wait for the AI analysis (powered by GPT-4o-mini)
4. Review the structured feedback on:
   - Customer interest level (low/medium/high)
   - Salesperson mistakes
   - What the salesperson did well
   - Probability of closing the deal
   - Recommendations for improvement

## API Endpoints

### POST /analyze
Analyzes a sales call transcript and returns AI-generated feedback.

**Request**:
```json
{
"text": "sales call transcript here..."
}
```

**Response**:
```json
{
"analysis": "detailed analysis from OpenAI..."
}
```

## Future Enhancements
- 🎙️ Audio/video upload with automatic transcription
- 💾 Database integration for call history
- 🔐 User authentication (SaaS features)
- 📊 Performance scoring and ranking
- 📧 Automated email follow-ups
- 🎨 Enhanced UI/UX
- 📱 Mobile app

## Environment Variables
- `OPENAI_API_KEY`: Your OpenAI API key (required)
- `PORT`: Server port (default: 3000)

## Error Handling
The application includes error handling for:
- Missing or invalid input
- OpenAI API errors
- Network issues
All errors are logged to the console and returned as JSON responses.

## License
ISC

## Contributing
Feel free to submit issues and pull requests to improve this project!

## Support
For questions or issues, please create a GitHub issue in the repository.