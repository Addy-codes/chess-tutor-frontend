import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import basestyle from "../Base.module.css";
const Profile = ({ setUserState, username }) => {
  const [analysisData, setAnalysisData] = useState("");
  const navigate = useNavigate();



  const sendPostRequestWithQueryString = async (pgnString) => {
    // Encode the pgnString to ensure it's safe to include in a URL
    const encodedPgnString = encodeURIComponent(pgnString);
    const endpoint = `
  http://13.201.118.68/app/pgn?pgn_string=${pgnString}`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST', // Method itself
        headers: {
          'Accept': 'application/json', // Indicates client expects JSON response
        },
        // No body is needed since the data is in the URL
      });

      // Wait for the server to respond with some data
      const data = await response.json();
      console.log(data.reformated_analysis); // Handle the response data
      const json_analysis = JSON.parse(data.reformated_analysis)
      console.log(json_analysis)
    } catch (error) {
      console.error('Error sending POST request:', error);
    }
  };



  const handleInputChange = (event) => {
    setAnalysisData(event.target.value);
  };

  const handleSubmit = () => {
    sendPostRequestWithQueryString(analysisData)
    // Do something with the analysisData, like sending it to a server
    // For now, just log it to the console
    console.log("Analysis data:", analysisData);

    // Redirect to the next analysis component
    navigate("/analysis");
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