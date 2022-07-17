import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../../lib/withHandler";
import { withApiSession } from "../../../../lib/withSession";

interface ResponseType {
  ok: boolean;
  [key: string]: any;
}
async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query,
    session: { user },
  } = req;

  console.log(+query.id);
  const tweet = await db?.post.findUnique({
    where: { id: +query.id },
    include: {
      author: {
        select: {
          id: true,
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

  const isLiked = Boolean(
    await db?.like.findFirst({
      where: {
        userId: user?.id,
        postId: +query.id,
      },
      select: {
        id: true,
      },
    })
  );

  res.json({
    ok: true,
    tweet,
    isLiked,
  });
}

export default withApiSession(
  withHandler({ methods: ["GET"], handler, isPrivate: true })
);
