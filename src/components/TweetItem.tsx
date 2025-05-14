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
      // prev：今の投稿リスト。
      // map：投稿リストの中のそれぞれの投稿を見ていく。
      // t：今見ている投稿。
      // t.id === tweet.id：今の投稿（tweet）と同じ投稿を見つける。
      // t.likes + 1：その投稿のいいね数を1増やす。
      // { ...t, likes: t.likes + 1 }：見つけた投稿の中身をそのままコピーして、likesだけ変えています。
      // : t：今の投稿と同じじゃなかったら、そのままの投稿を返す。
    );
  };

  // いいねボタン。
  // 押されるとhandleLikeが実行されて、いいね数が増えます。
  // 投稿リストの中から、今の投稿（tweet.id）と同じものを見つけて、likesを1増やします。
  // ...t：元の投稿の中身をそのままコピーして、likesだけ変えています。

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
