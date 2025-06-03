// src/components/TweetForm.tsx
import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase"; // firebase.ts から Firestore をインポート

const TweetForm = () => {
  // ツイートの内容を管理するステート
  const [content, setContent] = useState("");

  // フォームの送信処理。非同期関数として定義
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // e.preventDefault() は、フォームが送信されたときにページがリロードされるのを防ぎます。

    if (!content.trim()) return; // 空のツイートを防ぐ

    try {
      // Firestore に新しいツイートを追加
      // `collection` は、Firestore のコレクションを参照するための関数
      // `addDoc` は、指定したコレクションに新しいドキュメントを追加するための関数
      // `Timestamp.now()` は、現在の日時を Firestore の Timestamp 型で取得
      // `content` は、ユーザーが入力したツイートの内容
      await addDoc(collection(db, "tweets"), {
        content: content,
        createdAt: Timestamp.now(),
        likes: 0,
        replies: [],
      });

      setContent(""); // フォームをリセット
    } catch (err) {
      console.error("ツイートの保存に失敗しました:", err);
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
