// src/components/TweetList.tsx
import { useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { Tweet } from "../types";

type Props = {
  tweets: Tweet[];
  setTweets: React.Dispatch<React.SetStateAction<Tweet[]>>;
};

const TweetList = ({ tweets, setTweets }: Props) => {
  useEffect(() => {
    const q = query(collection(db, "tweets"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const tweetData: Tweet[] = [];
      querySnapshot.forEach((doc) => {
        tweetData.push({
          id: doc.id,
          ...doc.data(),
        } as Tweet);
      });
      console.log("ツイートデータ:", tweetData);
      setTweets(tweetData);
    });

    // クリーンアップ関数（リアルタイム監視の解除）
    return () => unsubscribe();
  }, [setTweets]);

  return (
    <div className="p-4">
      {tweets.length === 0 ? (
        <p>ツイートがまだありません</p>
      ) : (
        tweets.map((tweet) => (
          <div
            key={tweet.id}
            className="border border-gray-20 mx-auto w-56 p-2 my-1 rounded"
          >
            <p className="w-auto">{tweet.content}</p>
            <small className="w-auto ">
              {tweet.createdAt.toDate().toLocaleString()}
              ｜いいね: {tweet.likes}
            </small>
          </div>
        ))
      )}
    </div>
  );
};

export default TweetList;
