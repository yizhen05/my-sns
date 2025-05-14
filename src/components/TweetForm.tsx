// src/components/TweetForm.tsx
import React, { useState } from "react";
import { Tweet } from "../types";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTweets: React.Dispatch<React.SetStateAction<Tweet[]>>;
}

const TweetForm: React.FC<Props> = ({ setTweets }) => {
  const [content, setContent] = useState("");
  //投稿の内容を入力するテキストエリアに使う状態変数

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

    // uuidv4()：一意のIDを作る。
    // content：入力された投稿内容。
    // new Date()：今の時間。
    // likes: 初期状態では0。
    // replies: 最初は返信なしなので空の配列。

    setTweets((prev) => [newTweet, ...prev]);
    // setTweetsを使って、ツイートを追加する。今あるツイートの前に新しいツイートを追加する。
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
      {/* 投稿ボタン */}
    </form>
  );
};

export default TweetForm;
