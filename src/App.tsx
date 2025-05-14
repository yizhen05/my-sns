// src/App.tsx
import React, { useState } from "react";
import { Tweet } from "./types";
import TweetForm from "./components/TweetForm";
import TweetList from "./components/TweetList";
import "./App.css";

const App: React.FC = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  //tweets:すべてのツイートを格納する変数
  //setTweets:ツイートを更新するための関数
  //useState<Tweet[]>():Tweet型の空の配列を設定
  return (
    <div className="App">
      <h1>My SNS</h1>
      <TweetForm setTweets={setTweets} />
      <TweetList tweets={tweets} setTweets={setTweets} />
    </div>
  );
};

export default App;
