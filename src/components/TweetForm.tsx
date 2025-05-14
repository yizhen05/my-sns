// src/components/TweetForm.tsx
import React, { useState } from "react";
import { Tweet } from "../types";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTweets: React.Dispatch<React.SetStateAction<Tweet[]>>;
}

const TweetForm: React.FC<Props> = ({ setTweets }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    const newTweet: Tweet = {
      id: uuidv4(),
      content,
      createdAt: new Date(),
      likes: 0,
      replies: [],
    };

    setTweets((prev) => [newTweet, ...prev]);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's happening?"
      />
      <button type="submit">Tweet</button>
    </form>
  );
};

export default TweetForm;
