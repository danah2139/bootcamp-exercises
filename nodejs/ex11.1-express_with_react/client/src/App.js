import React, { useEffect, useState } from "react";
import API from "./api/API";
function App() {
  const [value, setValue] = useState("mul");
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await API.get("");
      console.log(data);
    };
    fetchData();
  }, []);

  const handleSubmit = async () => {
    await API.put("d5a4236b-75b3-4ca0-b8c7-37d013e2a239", {
      title: value,
    });
  };
  return (
    <div className="App">
      My APP
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
