import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../lib/withHandler";
import { withApiSession } from "../../../lib/withSession";

interface ResponseType {
  ok: boolean;
  [key: string]: any;
}
async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const tweets = await db?.post.findMany({
    include: {
      author: {
        select: {
          username: true,
        },
      },
      _count: {
        select: {
          Likes: true,
        },
      },
    },
  });
  res.json({
    ok: true,
    tweets,
  });
}

export default withApiSession(
  withHandler({ methods: ["GET"], handler, isPrivate: true })
);
