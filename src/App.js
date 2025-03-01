import React, { useState } from "react";
import "./App.css";

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+{}[]<>?";

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("📋 Password copied!");
  };

  return (
    <div className="container">
      <h2>🔐 Random Password Generator</h2>
      <div className="settings">
        <label>Password Length: {length}</label>
        <input
          type="range"
          min="6"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div className="options">
        <label>
          <input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} />
          Uppercase
        </label>
        <label>
          <input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} />
          Numbers
        </label>
        <label>
          <input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} />
          Symbols
        </label>
      </div>
      <button className="generate-btn" onClick={generatePassword}>Generate Password</button>
      <div className="password-box">{password}</div>
      <button className="copy-btn" onClick={copyToClipboard}>📋 Copy</button>
    </div>
  );
};

export default PasswordGenerator;
