import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')  // assuming React runs on port 3000, and backend on 5000
      .then(response => response.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {data ? <p>{data}</p> : <p>Loading...</p>}
      </header>
    </div>
  );
}

export default App;
