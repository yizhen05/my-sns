// src/components/TweetItem.tsx
import React from "react";
import { Tweet } from "../types";

interface Props {
  tweet: Tweet;
  setTweets: React.Dispatch<React.SetStateAction<Tweet[]>>;
}

const TweetItem: React.FC<Props> = ({ tweet, setTweets }) => {
  const handleLike = () => {
    setTweets((prev) =>
      prev.map((t) => (t.id === tweet.id ? { ...t, likes: t.likes + 1 } : t))
    );
  };

  return (
    <div style={{ border: "1px solid gray", padding: "8px", margin: "8px 0" }}>
      <p>{tweet.content}</p>
      <small>{tweet.createdAt.toLocaleString()}</small>
      <div>
        <button onClick={handleLike}>❤️ {tweet.likes}</button>
      </div>
    </div>
  );
};

export default TweetItem;
