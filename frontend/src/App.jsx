import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;
function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch(`${API_URL}/`)
      .then((res) => res.text())

      .then((data) => setMessage(data));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>My App</h1>
      <p>
        Backend says: <strong>{message}</strong>
      </p>
    </div>
  );
}

export default App;
