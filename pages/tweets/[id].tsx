import { Post, User } from "@prisma/client";
import { useRouter } from "next/router";
import useSWR from "swr";
import { cls } from "../../lib/cls";
import useMutation from "../../lib/useMutation";
import Layout from "../components/layout";

interface PostWithUser extends Post {
  author: User;
  _count: {
    Likes: number;
  };
}
interface TweetResponse {
  ok: boolean;
  tweet: PostWithUser;
  isLiked: boolean;
}
export default function tweetDetail() {
  const router = useRouter();
  const { data, mutate } = useSWR<TweetResponse>(
    `/api/tweets/${router.query.id ? router.query.id : null}`
  );
  const [likeTweet] = useMutation(`/api/tweets/${router.query.id}/like`);

  const toggleLike = () => {
    if (!data) return;
    mutate(
      {
        ...data,
        tweet: {
          ...data.tweet,
          _count: {
            ...data.tweet._count,
            Likes: data.isLiked
              ? data.tweet._count.Likes - 1
              : data.tweet._count.Likes + 1,
          },
        },
        isLiked: !data.isLiked,
      },
      false
    );
    likeTweet({});
  };

  return (
    <Layout>
      <h1 className="font-bold text-white text-xl mb-5">Tweet</h1>
      <div className="flex justify-between">
        <h2 className="font-bold text-lg text-gray-200">
          {data?.tweet?.title}
        </h2>
        <h3 className="text-sm text-slate-800">
          {data?.tweet?.author?.username}
        </h3>
      </div>
      <p className="block p-2 bg-gray-200 min-h-30 overflow-y-auto h-48 rounded-md mt-2 mb-5 text-sm text-slate-800">
        {data?.tweet?.content}
      </p>
      <div className="flex justify-between">
        <span
          onClick={toggleLike}
          className={cls(
            "px-2 py-1 font-bold bg-gray-200 cursor-pointer rounded-md",
            data?.isLiked ? "text-red-500" : "text-blue-500"
          )}
        >
          {data?.isLiked ? "UnTweet" : "Tweet"}
        </span>
        <strong className="text-green-400 text-sm font-medium">
          {data?.tweet?._count?.Likes} 트윗
        </strong>
      </div>
    </Layout>
  );
}
