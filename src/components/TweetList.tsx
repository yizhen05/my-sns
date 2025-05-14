// src/components/TweetList.tsx
import React from "react";
import { Tweet } from "../types";
import TweetItem from "./TweetItem";

interface Props {
  tweets: Tweet[];
  setTweets: React.Dispatch<React.SetStateAction<Tweet[]>>;
}

const TweetList: React.FC<Props> = ({ tweets, setTweets }) => {
  return (
    <div>
      {tweets.map((tweet) => (
        <TweetItem key={tweet.id} tweet={tweet} setTweets={setTweets} />
      ))}
    </div>
  );
};

export default TweetList;
