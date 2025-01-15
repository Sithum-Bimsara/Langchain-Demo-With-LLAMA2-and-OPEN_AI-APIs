import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [essayTopic, setEssayTopic] = useState("");
  const [poemTopic, setPoemTopic] = useState("");
  const [essayResult, setEssayResult] = useState("");
  const [poemResult, setPoemResult] = useState("");

  const fetchEssay = async () => {
    try {
      const response = await axios.post("http://localhost:8000/essay/invoke", {
        input: { topic: essayTopic },
      });
      setEssayResult(response.data.output.content);
    } catch (error) {
      console.error("Error fetching essay:", error);
      setEssayResult("Failed to fetch essay. Please try again.");
    }
  };

  const fetchPoem = async () => {
    try {
      const response = await axios.post("http://localhost:8000/poem/invoke", {
        input: { topic: poemTopic },
      });
      setPoemResult(response.data.output);
    } catch (error) {
      console.error("Error fetching poem:", error);
      setPoemResult("Failed to fetch poem. Please try again.");
    }
  };

  return (
    <div className="app-container">
      <h1>Langchain Demo With LLAMA2 API & OPEN_AI</h1>
      
      <div className="input-section">
        <h2>Write an essay on</h2>
        <input
          type="text"
          value={essayTopic}
          onChange={(e) => setEssayTopic(e.target.value)}
          placeholder="Enter a topic for the essay"
        />
        <button onClick={fetchEssay}>Generate Essay</button>
        {essayResult && <div className="result-box">{essayResult}</div>}
      </div>

      <div className="input-section">
        <h2>Write a poem on</h2>
        <input
          type="text"
          value={poemTopic}
          onChange={(e) => setPoemTopic(e.target.value)}
          placeholder="Enter a topic for the poem"
        />
        <button onClick={fetchPoem}>Generate Poem</button>
        {poemResult && <div className="result-box">{poemResult}</div>}
      </div>
    </div>
  );
};

export default App;
