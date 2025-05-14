// - id: ツイートの一意の識別子を表す文字列。
// - content: ツイートの内容を表す文字列。
// - createdAt: ツイートが作成された日時を表すDateオブジェクト。
// - likes: ツイートのいいねの数を表す数値。
// - replies: ツイートに対する返信の配列を表すTweet型の配列。
export interface Tweet {
  id: string;
  content: string;
  createdAt: Date;
  likes: number;
  replies: Tweet[];
}
