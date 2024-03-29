import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import basestyle from "../Base.module.css";

const Profile = ({ setUserState, username }) => {
  const [analysisData, setAnalysisData] = useState("");
  const navigate = useNavigate();



  const sendPostRequestWithQueryString = async (pgnString) => {
    const encodedPgnString = encodeURIComponent(pgnString);
    const endpoint = `http://13.201.118.68/app/pgn?pgn_string=${encodedPgnString}`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const json_analysis = JSON.parse(data.reformated_analysis);
      return json_analysis;
    } catch (error) {
      console.error('Error sending POST request:', error);
      return null;
    }
  };



  const handleInputChange = (event) => {
    setAnalysisData(event.target.value);
  };

  const handleSubmit = async () => {
    const analysisResult = await sendPostRequestWithQueryString(analysisData);
    if (analysisResult) {
      // Pass the analysisResult to the /analysis route as state
      navigate("/analysis", { state: { analysisResult } });
    } else {
      console.error("Failed to get analysis result.");
    }
  };

  return (
    <div className="profile">
      <h1 style={{ color: "white" }}>Welcome {username} !!</h1>
      <div >
        <textarea style={{ borderRadius: 10 }}
          placeholder="Paste PNG data here"
          value={analysisData}
          onChange={handleInputChange}
          rows={4}
          cols={50}
        />
      </div>

      <button
        className={basestyle.button_common}
        onClick={handleSubmit}
      >
        Submit Analysis
      </button>
      <button
        className={basestyle.button_common}
        onClick={() => setUserState({})}
      >
        Logout
      </button>
    </div>
  );
};
export default Profile;



//fetch("http://13.201.118.68/app/pgn?pgn_string=1. e4 e5 2. Nf3 Nc6 3. Bc4 Qg5 4. Nxg5 Nd8 5. Nc3 d5 6. Qg4 1-0