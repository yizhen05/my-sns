// src/components/TweetForm.tsx
import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

const TweetForm = () => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      await addDoc(collection(db, "tweets"), {
        content,
        createdAt: Timestamp.now(),
        likes: 0,
        replies: [],
      });

      setContent("");
    } catch (error) {
      console.error("ツイートの保存に失敗しました:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-b">
      <textarea
        className="w-full p-2 border rounded"
        rows={3}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="いまどうしてる？"
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        ツイート
      </button>
    </form>
  );
};

export default TweetForm;
