# LangChain Chatbot with OpenAI and Ollama LLMs

This project demonstrates a simple chatbot powered by two large language models (LLMs): OpenAI's GPT-3.5 and Ollama's Llama3.2. The application includes a FastAPI-based backend and two frontends:
1. A React+Vite frontend for a rich user interface.
2. A Streamlit-based frontend for rapid prototyping and demos.

---

## Table of Contents
1. [What is Streamlit?](#what-is-streamlit)
2. [What is Ollama?](#what-is-ollama)
3. [Project Structure](#project-structure)
4. [Prerequisites](#prerequisites)
5. [Setup Instructions](#setup-instructions)
6. [Running the Application](#running-the-application)
7. [Requirements](#requirements)
8. [Troubleshooting](#troubleshooting)
9. [Contributing](#contributing)
10. [License](#license)

---

## What is Streamlit?
Streamlit is an open-source app framework used to build interactive web applications with Python. It's particularly useful for creating data applications and machine learning demos, allowing developers to quickly prototype and deploy apps.

For more details, visit [Streamlit's website](https://streamlit.io/).

---

## What is Ollama?
Ollama provides access to large language models (LLMs) like Llama3.2. It allows you to run models locally, offering an easy-to-use platform for interacting with AI-powered models.

For more details, visit [Ollama's website](https://ollama.com/).

---

## Project Structure
```plaintext
LangChain-Chatbot-with-OpenAI-and-Ollama-LLMs/
├── api/
│   ├── app.py            # FastAPI backend application
│   ├── client.py         # Streamlit frontend application
│
├── langchain-demo/       # React+Vite frontend for the chatbot
│   ├── src/
│   │    ├──App.jsx
│   │    ├──App.css
│   │    ├──main.jsx
│   │
│   ├── public/
│   └── ...
│
├── .env                  # Environment variables for API keys
├── requirements.txt      # Dependencies list
├── README.md             # Project documentation
└── venv/                 # Virtual environment (optional, created manually)
```

---

## Prerequisites
Ensure the following are installed on your system:
- Python 3.7 or higher
- pip (Python package installer)
- Node.js (for React+Vite frontend)
- Ollama (for Llama3.2 model)

### Installing Ollama
1. Visit [Ollama's website](https://ollama.com/) to download and install Ollama for your operating system.
2. After installation, download the Llama3.2 model using the following command:
   ```bash
   ollama run llama3.2
   ```

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Sithum-Bimsara/LangChain-Chatbot-with-OpenAI-and-Ollama-LLMs.git
cd LangChain-Chatbot-with-OpenAI-and-Ollama-LLMs
```

### 2. Create a Virtual Environment
On Windows:
```bash
python -m venv venv
```
On macOS/Linux:
```bash
python3 -m venv venv
```

### 3. Activate the Virtual Environment
On Windows:
```bash
.\venv\Scripts\activate
```
On macOS/Linux:
```bash
source venv/bin/activate
```

### 4. Install Dependencies
Install the required dependencies for the backend:
```bash
pip install -r requirements.txt
```

### 5. Set Up Environment Variables
Create a `.env` file in the root directory and add your API keys:
```plaintext
OPENAI_API_KEY="your_openai_api_key"
```
Replace `your_openai_api_key` with your actual OpenAI API key.

---

## Running the Application

### 1. Start the Backend (FastAPI)
Navigate to the `api` folder and run the backend:
```bash
python app.py
```
The backend will be available at `http://localhost:8000`.

### 2. Run the Streamlit Frontend
From the project root directory, launch the Streamlit frontend:
```bash
streamlit run api/client.py
```
The Streamlit app will be accessible at `http://localhost:8501`.

### 3. Run the React+Vite Frontend
Navigate to the `langchain-demo` folder:
```bash
cd langchain-demo
npm install
npm run dev
```
The React+Vite app will be accessible at the URL provided in the terminal, typically `http://localhost:5173`.

---

## Requirements
The project dependencies are listed in `requirements.txt`. Key dependencies include:
- `streamlit`
- `python-dotenv`
- `openai`
- `langchain-core`
- `langchain-community`
- `langchain-ollama`
- `fastapi`
- `uvicorn`
- `langserve`

---

## Troubleshooting

- **API Key Issues**: Ensure the `.env` file contains valid API keys and there are no syntax errors.
- **Package Installation Errors**: If you encounter errors during installation, try:
  ```bash
  pip install -r requirements.txt
  ```
- **Llama3.2 Model Issues**: If the Ollama model is not installed, run:
  ```bash
  ollama run llama3.2
  ```
- **Frontend Errors**: Ensure Node.js and npm are installed and run:
  ```bash
  npm install
  ```

---

## Contributing
We welcome contributions! Feel free to fork the repository and submit pull requests. Please ensure your code adheres to the project's coding standards.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

