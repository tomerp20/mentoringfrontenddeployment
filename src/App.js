import { useState, useEffect } from 'react';

import './App.css';
const BASE_URL = 'https://mentoringapplive.herokuapp.com/';
function App() {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    const fetchTweets = async () => {
      const response = await fetch(`${BASE_URL}tweets`);
      const json = await response.json();
      setTweets(json);
    }
    fetchTweets()
  }, []);
  return (
    <div className="App">
      <div>Tweet list </div>
      {tweets.length && tweets.map((tweet) => (
        <div key={tweet.id}>
          {JSON.stringify(tweet)}
        </div>)
      )}
    </div>
  );
}

export default App;
