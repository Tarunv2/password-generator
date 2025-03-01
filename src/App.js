import React, { useState } from "react";

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
    alert("Password copied!");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>🔐 Random Password Generator</h2>
      <label>Password Length: {length}</label>
      <input
        type="range"
        min="6"
        max="20"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
      <div>
        <label>
          <input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} />
          Include Uppercase
        </label>
        <label>
          <input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} />
          Include Numbers
        </label>
        <label>
          <input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} />
          Include Symbols
        </label>
      </div>
      <button onClick={generatePassword} style={{ margin: "10px", padding: "10px" }}>Generate</button>
      <h3>{password}</h3>
      <button onClick={copyToClipboard} style={{ padding: "10px" }}>Copy</button>
    </div>
  );
};

export default PasswordGenerator;
