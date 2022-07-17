import { Post } from "@prisma/client";
import Link from "next/link";
import React, { useEffect } from "react";
import useSWR from "swr";
import useUser from "../lib/useUser";
import Layout from "./components/layout";

interface PostWithUser extends Post {
  author: {
    id: number;
    createdAt: Date;
    username: string;
  };
  _count: {
    Likes: number;
  };
}
interface PostsResponseWithUser {
  ok: boolean;
  tweets: PostWithUser[];
}

export default function Home() {
  const { user } = useUser();
  const { data } = useSWR<PostsResponseWithUser>("/api/tweets");

  useEffect(() => {
    if (data && data.ok) {
      console.log(data);
    }
  }, [data]);

  return (
    <Layout>
      <h1 className="font-bold text-white">Twitter</h1>
      <section className="flex flex-col space-y-3 divide-y divide-slate-400 mt-5">
        {data?.tweets?.map((tweet) => (
          <Link href={`/tweets/${tweet.id}`} key={tweet.id}>
            <div className="cursor-pointer py-3">
              <div className="flex justify-between">
                <h3 className="text-gray-300 font-bold">{tweet.title}</h3>
                <h4 className="text-sm text-gray-800">
                  {tweet.author.username}
                </h4>
              </div>
              <strong className="text-[10px] text-green-500">
                {tweet._count.Likes} 트윗
              </strong>
              <p className="text-sm text-gray-900 truncate">{tweet.content}</p>
            </div>
          </Link>
        ))}
      </section>
      <Link href={`/tweets/create`}>
        <a className="flex justify-center items-center absolute bottom-5 right-5 w-14 h-14 rounded-full bg-blue-500 text-white">
          Tweet
        </a>
      </Link>
    </Layout>
  );
}
